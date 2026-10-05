pipeline {
    agent any 
    options {
        skipDefaultCheckout(true)
    }
    stages {
        stage('Checkout') {
            steps {
               checkout scm
               sh  'echo "Hello from Jenkins"'
            }
        }

        stage('Build') {
            steps {
                dir('devopsportfolio') { 
                sh './mvnw package'
                }
            }
        }

         stage('Test') {
            steps {
                dir('devopsportfolio') { 
                sh './mvnw test'
                }
            }
        }
    }
}