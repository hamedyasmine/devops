pipeline {
    agent {
        docker {
            image 'node:16'  // Utilisation de l'image Node.js 16
            label 'docker'
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Pour utiliser Docker-in-Docker
        }
    }

    environment {
        // Définir des variables d'environnement si nécessaire
        DOCKER_IMAGE = 'votre-image-react'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Construire l'application React
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Construire l'image Docker
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Pousser l'image Docker vers un registre (ex. DockerHub)
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Ajouter ici vos étapes de déploiement
                    // Par exemple, déployer sur un service cloud, un serveur, etc.
                }
            }
        }
    }
}
