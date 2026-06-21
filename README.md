# fullstack_developer_capstone
## Car Dealership Reviews Application

## Overview

This project is a full-stack web application for managing and reviewing car dealerships. It allows users to browse dealerships, view dealer information, read customer reviews, and submit their own reviews after authentication.

The application is built using:

* Frontend: React.js
* Backend: Django
* Database API: Node.js / Express
* Containerization: Docker
* Deployment: Kubernetes / IBM Cloud Code Engine

---

## Features

### User Authentication

* User registration
* User login
* User logout

### Dealership Management

* View all dealerships
* Filter dealerships by state
* View dealership details

### Reviews

* View reviews for a dealership
* Submit new reviews
* Sentiment analysis for customer reviews

### Vehicle Information

* Car Make management
* Car Model management
* Vehicle inventory integration

---

## Project Structure

```text
server/
│
├── djangoapp/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── restapis.py
│   └── populate.py
│
├── djangoproj/
│
├── frontend/
│   ├── src/
│   └── build/
│
├── database/
│   ├── app.js
│   ├── dealership.js
│   ├── inventory.js
│   └── review.js
│
├── Dockerfile
├── entrypoint.sh
├── requirements.txt
└── manage.py
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/CTMT1406/xrwvm-fullstack_developer_capstone.git
cd xrwvm-fullstack_developer_capstone/server
```

### Create Virtual Environment

```bash
virtualenv djangoenv
source djangoenv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Database Migration

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Run Backend

```bash
python manage.py runserver
```

Application will be available at:

```text
http://127.0.0.1:8000
```

---

## Build Frontend

```bash
cd frontend
npm install
npm run build
```

---

## Docker

### Build Docker Image

```bash
docker build -t dealership .
```

### Run Docker Container

```bash
docker run -p 8000:8000 dealership
```

---

## IBM Container Registry

```bash
docker build -t us.icr.io/<namespace>/dealership .
docker push us.icr.io/<namespace>/dealership
```

---

## Kubernetes Deployment

```bash
kubectl apply -f deployment.yaml
```

Verify deployment:

```bash
kubectl get pods
kubectl get services
```

---

## Technologies Used

* Python
* Django
* React
* JavaScript
* Node.js
* Express
* Docker
* Kubernetes
* IBM Cloud
* MongoDB

---

## Author

Tiến Châu

Artificial Intelligence Student

Full Stack Developer Capstone Project
