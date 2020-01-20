pipeline {
  agent any
  environment {
    SNYK_TOKEN = credentials('snyk-token-id')
  }
  options {
    disableConcurrentBuilds()
    timeout(time: 1, unit: 'HOURS')
  }
  stages {
    stage('Checkout') {
      steps {
        echo 'Checkout'
      }
    }
    stage('Testing App') {
      parallel {
        stage('Nodejs') {
          stages {
            stage('Install') {
              steps {
                echo 'Install Dependencies'
                dir('./polympic-server/'){
                  sh 'npm install'
                }
              }
            }
            stage('Lint') {
              steps {
                echo 'javascript Linter'
                dir('./polympic-server/'){
                  sh 'npm run lint'
                }
              }
            }
            stage('Test') {
              environment {
                NODE_ENV = 'development'
              }
              steps {
                echo 'Test'
                dir('./polympic-server/'){
                  sh 'npm run compiler-deploy'
                  sh 'npm run coverage'
                }
              }
            }
            stage('Sonar') {
              steps {
                echo 'Sonar Analysis'
                withSonarQubeEnv('Sonarqube_env'){
                  dir('./polympic-server/'){
                    sh 'npm run sonar'
                  }
                }
              }
            }
            stage('Quality Gate') {
              steps {
                timeout(time: 1, unit: 'HOURS') {
                  waitForQualityGate true
                }
              }
            }
          }
        }
        stage('Flutter') {
          stages {
            stage('Test') {
              steps {
                dir('./polympic/'){
                  sh  '''
                      export PATH=${PATH}:/var/lib/jenkins/development/flutter/bin
                      flutter test
                      '''
                }
              }
            }
          }
        }
      }
    }
    stage('Production') {
      environment {
        NODE_ENV = 'production'
      }
      stages {
        stage('Snyk') {
          steps {
            echo 'Snyk Diagnosis'
            dir('./polympic-server/'){
              sh 'snyk test --severity-medium'
              sh 'snyk monitor'
            }
          }
        }
        stage('Deployment'){
          steps {
            echo 'App restarted'
            // =>/var/lib/jenkins/node-app/PNS-PS7-19-20-pns-ps7-19-20-al-ihm1
            dir('../../node-app/') {
              sh 'rm -rf PNS-PS7-19-20-pns-ps7-19-20-al-ihm1'
              sh 'git clone git@github.com:PNS-PS7and8/PNS-PS7-19-20-pns-ps7-19-20-al-ihm1.git'
            }
            dir('../../node-app/PNS-PS7-19-20-pns-ps7-19-20-al-ihm1/polympic-server/') {
              sh 'git checkout develop'
              sh 'npm install'
              withEnv(['JENKINS_NODE_COOKIE=dontkill']) {
                sh  '''
                    export PATH=${PATH}:/var/lib/jenkins/development/flutter/bin
                    npm run flutter-deploy
                    '''
                sh 'npm run compiler-deploy'
                sh 'npm run doc'
                sh 'npm run redeploy'
              }
            }
          }
        }
      }
    }
  }
  post {
    always {
      echo 'JENKINS PIPELINE'
    }

    success {
      echo 'JENKINS PIPELINE SUCCESSFUL'
    }

    failure {
      echo 'JENKINS PIPELINE FAILED'
    }

    unstable {
      echo 'JENKINS PIPELINE WAS MARKED AS UNSTABLE'
    }

    changed {
      echo 'JENKINS PIPELINE STATUS HAS CHANGED SINCE LAST EXECUTION'
    }
  }
}
