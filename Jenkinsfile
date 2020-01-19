pipeline {
  agent any
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
    stage('build parallel') {
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
                  sh 'npm test'
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
    stage(' Deployment') {
      environment {
        NODE_ENV = 'production'
      }
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
