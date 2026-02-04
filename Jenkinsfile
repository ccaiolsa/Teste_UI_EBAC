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
                
            }
        }
    }
}