# TaskListApp

TaskListApp is a full-stack task management application deployed on AWS. The application allows users to create, update, delete, and view tasks. The frontend is built using React and is hosted on AWS Amplify, while the backend is powered by AWS Lambda, DynamoDB, and monitored using CloudWatch.

## Table of Contents

- [Architecture](#architecture)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup and Deployment](#setup-and-deployment)
- [Usage](#usage)
- [Monitoring](#monitoring)

## Architecture

The application architecture is as follows:

- **Frontend:** React application hosted on AWS Amplify.
- **Backend:** Python-based AWS Lambda functions.
- **Database:** DynamoDB for storing task data.
- **Monitoring:** CloudWatch for logging and monitoring.

## Features

- **Add New Tasks:** Users can add new tasks to the list.
- **Edit Tasks:** Users can update existing tasks.
- **Delete Tasks:** Users can remove tasks from the list.
- **View Tasks:** Users can view all tasks in a list format.
- **Real-time Updates:** Tasks are updated in real-time using API calls to the backend.

## Prerequisites

Before you begin, ensure you have the following:

- **AWS Account:** An AWS account with access to AWS Amplify, DynamoDB, Lambda, and CloudWatch.
- **Node.js:** Installed on your local machine for running the React development server.
- **AWS CLI:** Installed and configured with your AWS account credentials.
- **Amplify CLI:** Installed globally via npm (`npm install -g @aws-amplify/cli`).

## Setup and Deployment

### 1. Clone the Repository

git clone https://github.com/AlleAkhil/TaskTrek.git
cd TaskTrek

### 2. Setup AWS Amplify

amplify init

Follow the prompts to set up Amplify in your project. Choose the appropriate options based on your AWS environment.

### 3. Deploy the Frontend

amplify add hosting
amplify publish

This command will deploy your React frontend to AWS Amplify and provide you with a URL to access the application.

### 4. Setup DynamoDB

Go to the DynamoDB Console on AWS.
Create a new table named Tasks with id as the primary key (String).

### 5. Deploy Lambda Functions

In the project root, navigate to the lambda/ directory.
Create a Lambda function using the AWS Console or AWS CLI.
Upload the Python scripts that handle CRUD operations on DynamoDB to the Lambda function.
Set the appropriate IAM role to allow Lambda functions to interact with DynamoDB.

### 6. Configure API Gateway (Optional)

If not using AWS Amplify's built-in API feature, create an API Gateway and link it to your Lambda functions.

### 7. Monitor with CloudWatch

Ensure that your Lambda functions are logging to CloudWatch.
Set up CloudWatch Alarms if needed to monitor for errors or performance issues.
Usage
Access the Application:

Navigate to the URL provided by AWS Amplify after deployment.
Create Tasks:

Use the form provided on the main page to add new tasks.
Edit Tasks:

Click on a task to edit its details.
Delete Tasks:

Click the delete button next to a task to remove it.
View All Tasks:

All tasks are displayed in a list on the main page.
Monitoring
CloudWatch Logs:

View logs of your Lambda function executions via the CloudWatch Console.
CloudWatch Alarms:

Set up alarms to get notified if something goes wrong with your backend.
Amplify Monitoring:

Use AWS Amplify’s monitoring features to keep track of frontend performance and deployments.
