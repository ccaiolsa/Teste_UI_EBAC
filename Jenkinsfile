pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'NO_COLOR=1 npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Deploy') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'C:\\Users\\ccaio\\repositorio\\exercicios_ebac\\Teste_UI_EBAC\\cypress\\reports\\html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}