pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
               checkout scm
               sh  'echo "Hello from Jenkins"'
            }
        }

    }
}