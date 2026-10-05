pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                sh 'echo "Hello from Jenkins"'
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

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh 'echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin'
                }
            }
        }

        stage('Docker Tag') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh 'docker tag devops-portfolio:1.0 $DOCKER_USERNAME/devops-portfolio:1.0'
                    sh 'docker tag frontend:latest $DOCKER_USERNAME/frontend:latest'
                }
            }
        }

        stage('Docker Push') {
           steps {
              withCredentials([usernamePassword(
                credentialsId: 'dockerhub-creds',
                usernameVariable: 'DOCKER_USERNAME',
                passwordVariable: 'DOCKER_PASSWORD'
           )]) {
            sh 'docker push $DOCKER_USERNAME/devops-portfolio:1.0'
            sh 'docker push $DOCKER_USERNAME/frontend:latest'
               }
            }
        }
    }
}