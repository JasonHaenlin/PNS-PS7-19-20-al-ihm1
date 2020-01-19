require('dotenv').config();
const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('sonar', (callback) => {
  sonarqubeScanner({
    serverUrl: process.env.SONAR_HOST_URL,
    token: process.env.SONAR_AUTH_TOKEN,
    options: {
      'sonar.projectKey': 'ps7-polympic',
      'sonar.sources': 'app',
      'sonar.exclusions': 'app/public/**, app/views/**',
      'sonar.tests': 'tests',
      'sonar.test.inclusions': '**/*.spec.js',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    }
  }, callback);
});
