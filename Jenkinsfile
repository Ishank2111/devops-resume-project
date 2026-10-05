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


        stage('Docker Build Backend') {
            steps {
                sh 'docker build -f docker/Dockerfile -t devops-portfolio:1.0 .'
            }
        }

         stage('Docker Build Frontend') {
            steps {
                sh 'docker build -f frontend/Dockerfile -t frontend frontend'
            }
        }
    }
}