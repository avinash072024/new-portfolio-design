
pipeline {
    agent any

    options {
        buildDiscarder(logRotator(daysToKeepStr: '7', numToKeepStr: '50'))
    }

    parameters {
        booleanParam(name: 'PUBLISH_ARTIFACTS', defaultValue: false, description: 'Push the built app to the remote server?')
    }

    environment {
        CONTAINER_REGISTRY = 'gitlab.mipl.dev:5050'
        IMAGE_NAME         = 'phase1/infra/dockerepis/ui'
        ANGULAR_APP_NAME   = 'UI'
        BASE_VERSION       = '2.0.0'

        REMOTE_USER        = 'mipladmin'
        REMOTE_HOST        = '192.168.6.254'
        REMOTE_PATH        = '/var/www/epis/Mahalaxmi/UI'
    }

    stages {

        stage('Install Node Modules') {
            steps {
                sh '''
                    echo "Installing npm packages..."
                    npm install
                '''
            }
        }

        stage('Build Angular App') {
            steps {
                sh '''
                    echo "Building Angular app..."
                    npm run build -- --configuration=production
                '''
            }
        }

        stage('Prepare Dist Directory') {
            steps {
                sh '''
                    echo "Checking dist folder..."
                    ls -la dist
                '''
            }
        }

        stage('Copy to Linux Server') {
            when {
                expression { return params.PUBLISH_ARTIFACTS }
            }
            steps {
                withCredentials([
                    sshUserPrivateKey(credentialsId: 'ssh-linux-creds', keyFileVariable: 'SSH_KEY'),
                    usernamePassword(credentialsId: 'linux-sudo-creds', usernameVariable: 'LINUX_USER', passwordVariable: 'LINUX_PASS')
                ]) {
                    sh '''
                        echo "Preparing remote directory on remote server..."
                        ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$REMOTE_USER@$REMOTE_HOST" \
                            "rm -rf $REMOTE_PATH/* && mkdir -p $REMOTE_PATH"

                        echo "Copying dist folder to server..."
                        rsync -avz -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no" \
                            dist/ "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"
                    '''
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
