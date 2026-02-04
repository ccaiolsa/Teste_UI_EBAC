pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                    bat '''set NO_COLOR=1 && npm ci'''
            }
        }
        stage('Test') {
            steps {
                bat '''npx cypress run'''
            }
        }
        stage('Deploy') {
            steps {publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'Mochawesome Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}