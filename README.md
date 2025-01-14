# README - Projet ReactJS ConvergeInnov

---
## Table of Contents
- [1.Introduction](#introduction)
- [2.Prérequis](#Prérequis)
- [3.Détails du Projet](#Détails du Projet)
  - [3.1. Application](#3.1. Application)
  - [3.2. Conteneurisation](#3.2. Conteneurisation)
  - [3.3. Intégration Continue avec Jenkins](#3.3. Intégration Continue avec Jenkins)
- [4. Instructions d’Utilisation](#4. Instructions d’Utilisation)
  - [5. Auteur](#5. Auteur)
---



## 1. Introduction

Ce projet est une application web développée avec ReactJS pour l'entreprise **ConvergeInnov**. L'application suit une architecture **MVC** et est compatible avec la conteneurisation pour faciliter son déploiement et son intégration continue.

## 2. Prérequis

- **Node.js** (v14 ou supérieur)
- **Docker** (v20 ou supérieur)
- **Docker Compose** (v2 ou supérieur)
- **Jenkins** pour l’intégration continue
- Accès à un compte Docker Hub

---

## 3. Détails du Projet

### 3.1. Application

L'application ReactJS inclut :

- Une interface utilisateur intuitive pour gérer les données de l'entreprise **ConvergeInnov**.
- Une architecture **MVC** ou microservices pour assurer une séparation claire des responsabilités.
- Compatibilité avec la conteneurisation pour un déploiement simplifié.

### 3.2. Conteneurisation

L'application est empaquetée dans des conteneurs Docker pour garantir une exécution cohérente sur différents environnements.

#### Livrables :

1. **Dockerfile(s)** : Un Dockerfile est fourni pour chaque service ou composant de l'application.
2. **docker-compose.yml** : Permet de déployer et tester l'application en local avec un seul fichier.

#### Exemple de Dockerfile :

```Dockerfile
# Dockerfile pour l'application ReactJS
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

#### Exemple de fichier docker-compose.yml :

```yaml
version: "3.8"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

### 3.3. Intégration Continue avec Jenkins

Un pipeline Jenkins est configuré pour automatiser les étapes de construction et distribution.

#### Jenkinsfile :

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Construction de l’image Docker'
                    sh 'docker build -t convergeinnov/app .'
                }
            }
        }

        stage('Scan des vulnérabilités') {
            steps {
                script {
                    echo 'Analyse de sécurité avec Trivy'
                    sh 'trivy image convergeinnov/app'
                }
            }
        }

        stage('Push sur Docker Hub') {
            steps {
                script {
                    echo 'Push de l’image sur Docker Hub'
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker tag convergeinnov/app $DOCKER_USERNAME/convergeinnov-app:latest'
                    sh 'docker push $DOCKER_USERNAME/convergeinnov-app:latest'
                }
            }
        }
    }
}
```

---

## 4. Instructions d’Utilisation

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/hamedyasmine/devops.git
   cd devops
   ```

2. **Lancer l'application localement avec Docker Compose** :

   ```bash
   docker-compose up --build
   ```

3. **Configurer Jenkins** :

   - Ajouter le Jenkinsfile au projet.
   - Configurer les crédentials Docker Hub dans Jenkins.

4. **Déployer sur Docker Hub** :

   - Une fois le pipeline exécuté avec succès, l'image sera disponible sur Docker Hub.

---

## 5. Docker Configuration

### Dockerfile for Services

Chaque microservice a son propre Dockerfile pour la conteneurisation. Ces Dockerfiles définissent l’environnement et les dépendances nécessaires au bon fonctionnement des services.

### Docker-Compose

Un fichier `docker-compose.yml` orchestre le démarrage de tous les microservices, MongoDB, et Kafka, garantissant une interaction fluide entre les conteneurs.

### Jenkins Integration

Jenkins est configuré pour rationaliser le processus CI/CD en automatisant les constructions, tests, et déploiements.

- **Pipeline Configuration** : Les scripts Jenkinsfile définissent des pipelines multi-étapes, incluant les étapes de construction, test et déploiement.
- **Integration with Kubernetes** : Jenkins s’intègre avec Kubernetes pour allouer dynamiquement des agents de construction et gérer les déploiements.
- **Notification System** : Jenkins est configuré pour envoyer des notifications sur l’état des constructions ou déploiements via Slack ou email.

---

## 6. Auteur

- **Nom** : Yasmine Hamed
- **Entreprise** : ConvergeInnov
- **Contact** : [yasmine.hamed@convergeinnov.com](mailto:yasmine.hamed@convergeinnov.com)



