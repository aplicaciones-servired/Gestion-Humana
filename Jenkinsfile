pipeline {
  agent any
    
  tools {
    nodejs 'node-v22'
  }

  environment {
    ENV_CLIENT_GESTION = credentials('ENV_CLIENT_GESTION')
    ENV_SERVER_GESTION = credentials('ENV_SERVER_GESTION')
    CLERK_SECRET_KEY_GESTION = credentials('CLERK_SECRET_KEY_GESTION')
  }
    
  stages {

    stage('Copy .env files') {
      steps {
        script {
          def env_server = readFile(ENV_SERVER_GESTION)
          def env_client = readFile(ENV_CLIENT_GESTION)
          
          // Añadir clave Clerk al env del cliente (sin el sufijo _GESTION)
          def env_client_completo = env_client + "\nCLERK_SECRET_KEY=${CLERK_SECRET_KEY_GESTION}\n"
          
          writeFile file: './server/.env', text: env_server
          writeFile file: './client/.env', text: env_client_completo
          
          // Verificar
          sh 'ls -la ./server/.env'
          sh 'ls -la ./client/.env'
          sh 'cat ./client/.env | grep PUBLIC_URL_API'
          sh 'cat ./client/.env | grep CLERK_SECRET_KEY'
        }
      }
    }

    stage('install dependencies server') {
      steps {
        script {
          sh 'cd ./server && npm install'
        }
      }
    }

    stage('install dependencies client') {
      steps {
        script {
          sh 'cd ./client && npm install --legacy-peer-deps'
          sh 'cd ./client && npm run build'
        }
      }
    }

    stage('down docker compose') {
      steps {
        script {
          sh 'docker compose down'
        }
      }
    }

    stage('delete images client') {
      steps {
        script {
          def images = 'web-gestion'
          if (sh(script: "docker images -q ${images}", returnStdout: true).trim()) {
            sh "docker rmi ${images}"
          } else {
            echo "Image ${images} does not exist."
          }
        }
      }
    }

    stage('delete images server') {
      steps {
        script {
          def images = 'gestion-server'
          if (sh(script: "docker images -q ${images}", returnStdout: true).trim()) {
            sh "docker rmi ${images}"
          } else {
            echo "Image ${images} does not exist."
          }
        }
      }
    }
    
    stage('run docker compose') {
      steps {
        script {
          // Extraer PUBLIC_CLERK_PUBLISHABLE_KEY del .env del cliente
          def clerk_public_key = sh(script: "grep '^PUBLIC_CLERK_PUBLISHABLE_KEY=' ./client/.env | cut -d '=' -f2", returnStdout: true).trim()
          
          // ✅ Pasar todas las variables necesarias como build arguments
          sh """docker compose build \
            --build-arg CLERK_SECRET_KEY=${CLERK_SECRET_KEY_GESTION} \
            --build-arg PUBLIC_CLERK_PUBLISHABLE_KEY=${clerk_public_key} \
            web_gestion"""
          sh 'docker compose up -d'
        }
      }
    }
  }
}
