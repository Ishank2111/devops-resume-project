# DevOps Deployment & Portfolio Platform

A DevOps portfolio project demonstrating an automated CI/CD workflow for a
Spring Boot application using Jenkins, Docker, Trivy, Kubernetes, and Helm.

The project focuses on automated builds, testing, container image publishing,
vulnerability scanning, and Kubernetes deployment.

## Technologies

- **Application:** Java 21, Spring Boot, Maven
- **Version Control:** Git, GitHub
- **CI/CD:** Jenkins
- **Containerization:** Docker, Docker Hub
- **Security:** Trivy
- **Orchestration:** Kubernetes
- **Deployment Management:** Helm
- **Infrastructure as Code:** Terraform, AWS

## Architecture

```text
Developer
    |
    v
GitHub Repository
    |
    v
Jenkins Pipeline
    |
    +--> Checkout Source Code
    |
    +--> Build Application
    |
    +--> Run Tests
    |
    +--> Build Docker Images
    |
    +--> Scan Image with Trivy
    |
    +--> Push Images to Docker Hub
    |
    v
Helm Deployment
    |
    v
Kubernetes Cluster
    |
    v
Spring Boot Application
    |
    +--> /actuator/health
    |
    +--> /api/portfolio
```

## CI/CD Pipeline

The Jenkins pipeline automates the following stages:

1. **Checkout:** Retrieves the application source code from GitHub.
2. **Build:** Compiles and packages the Spring Boot application using Maven.
3. **Test:** Executes the automated tests.
4. **Docker Build:** Builds the backend and frontend container images.
5. **Security Scan:** Uses Trivy to scan the backend image for HIGH and
   CRITICAL vulnerabilities.
6. **Image Publishing:** Authenticates with Docker Hub and pushes the images.
7. **Deployment:** Uses Helm to deploy or upgrade the application in Kubernetes.

## Kubernetes Features

The Helm chart demonstrates:

- Deployment and Service resources
- ConfigMap and Secret references
- Liveness and readiness probes
- CPU and memory requests and limits
- Horizontal Pod Autoscaler configuration
- Persistent Volume Claim integration
- Helm-based application upgrades

The existing Kubernetes configuration and storage resources are maintained
separately where appropriate.

## API Endpoints

| Endpoint | Purpose |
|---|---|
| `/actuator/health` | Application health status |
| `/api/portfolio` | Portfolio information returned as JSON |

## Run Locally

### Prerequisites

- Java 21
- Docker
- Git

### Run the Spring Boot application

From the repository root:

```bash
cd devopsportfolio
./mvnw spring-boot:run
```

Check application health:

```bash
curl http://localhost:8080/actuator/health
```

Test the portfolio API:

```bash
curl http://localhost:8080/api/portfolio
```

### Build the application

From the `devopsportfolio` directory:

```bash
./mvnw clean package
```

## Kubernetes Deployment

Prerequisites: a working Kubernetes cluster, `kubectl`, and Helm.

Validate the Helm chart:

```bash
helm lint helm/devops-portfolio
helm template devops-portfolio helm/devops-portfolio \
  --namespace default
```

Deploy or upgrade the application:

```bash
helm upgrade --install devops-portfolio \
  helm/devops-portfolio \
  --namespace default \
  --wait \
  --timeout 3m
```

Check the deployment:

```bash
kubectl rollout status deployment/devops-portfolio \
  -n default

kubectl get pods,services,hpa -n default

helm status devops-portfolio -n default
```

## Repository Structure

```text
.
├── devopsportfolio/       # Spring Boot application
├── docker/                # Docker build configuration
├── jenkins/               # Jenkins-related files
├── helm/                  # Helm chart
├── k8s/                   # Kubernetes manifests
├── infrastructure/        # Infrastructure as Code
├── monitoring/            # Monitoring-related project files
├── app/                   # Frontend application
└── README.md
```

## Security Practices

- Scan container images with Trivy.
- Keep credentials and tokens out of Git.
- Use Kubernetes RBAC to restrict deployment permissions.
- Store deployment credentials in the CI/CD environment rather than source code.

## Project Status

The Jenkins pipeline has successfully completed its build, test, image
publishing, security scanning, and Helm deployment stages.

The application health endpoint and portfolio API have been verified
successfully in Kubernetes.

## Future Improvements

- Add Prometheus and Grafana monitoring.
- Improve deployment credential lifecycle management.
- Expand automated testing and deployment validation.
- Document AWS and Terraform infrastructure provisioning.
