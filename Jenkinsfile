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

    }
}