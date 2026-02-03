export const awsTutorial = {
  topic: "aws",
  triggers: [
    "aws tutorial",
    "aws sikhao",
    "aws full course",
    ],
    content: `
    ☁️ AWS Full Tutorial

(Beginner → Advanced)

1️⃣ AWS kya hai?

AWS (Amazon Web Services) ek cloud computing platform hai jo Amazon ne banaya hai.
AWS tumhe servers, storage, databases, networking, security sab kuch internet ke through provide karta hai.

👉 Simple words me:
Apna khud ka server kharidne ke bajaye, AWS se rent pe lo.

2️⃣ Cloud Computing kya hoti hai?

Cloud computing =
Internet ke through compute power, storage aur services use karna.

Types of Cloud:

Public Cloud (AWS, Azure, GCP)

Private Cloud

Hybrid Cloud

3️⃣ AWS kyun use karein?

No physical servers

Pay only for what you use

Highly scalable

Secure

Used by big companies (Netflix, Airbnb, etc.)

4️⃣ AWS Global Infrastructure

AWS ka structure:

Region
 └── Availability Zones (AZ)
      └── Data Centers


👉 High availability & fault tolerance milti hai.

5️⃣ AWS Account Setup

AWS free tier account

12 months free (limited services)

Credit card required (₹0 charge mostly)

6️⃣ Core AWS Services (IMPORTANT)

AWS me 200+ services hain, but yeh main hain 👇

7️⃣ EC2 (Elastic Compute Cloud)

EC2 = Virtual Server

Use:

Backend apps

APIs

Websites

Example:
Laptop → AWS EC2 → Website running

EC2 Steps:

Launch instance

Choose OS (Amazon Linux / Ubuntu)

Select instance type (t2.micro – free)

Add key pair

Launch

8️⃣ S3 (Simple Storage Service)

S3 = Object Storage

Use:

Images

Videos

Files

Backups

Example:
Website images → S3 bucket

Features:

Unlimited storage

Very durable (99.999999999%)

9️⃣ IAM (Identity & Access Management) 🔐

IAM = Security backbone of AWS

Use:

Users

Roles

Permissions

Rule:

👉 Never use root account for daily work

Example:

EC2 access → IAM Role

🔟 RDS (Relational Database Service)

RDS = Managed SQL databases

Supported:

MySQL

PostgreSQL

SQL Server

Oracle

Advantage:

Automatic backup

Scaling

Security handled by AWS

1️⃣1️⃣ DynamoDB (NoSQL)

DynamoDB = AWS ka NoSQL database

Features:

Key-value store

Very fast

Serverless

Use case:

High traffic apps

Real-time data

1️⃣2️⃣ VPC (Virtual Private Cloud)

VPC = Your private network in AWS

Inside VPC:

Subnets

Route tables

Internet Gateway

👉 Networking ka base concept.

1️⃣3️⃣ Load Balancer (ELB)

ELB = Traffic ko multiple servers me distribute karta hai.

User → Load Balancer → EC2 (1,2,3)


Types:

Application Load Balancer

Network Load Balancer

1️⃣4️⃣ Auto Scaling

Auto Scaling =
Traffic badhne par automatically servers add
Traffic kam hone par servers remove

👉 Cost + performance balance.

1️⃣5️⃣ Lambda (Serverless) ⚡

AWS Lambda =
Code run karo without managing servers

Example:
User uploads image → Lambda runs → Image processed


Languages:

JavaScript

Python

Java

1️⃣6️⃣ API Gateway

API Gateway =
REST APIs create & manage karne ke liye

Frontend → API Gateway → Lambda

1️⃣7️⃣ CloudWatch (Monitoring)

CloudWatch =
Logs, metrics, alarms

Use:

CPU usage

Error logs

Alerts

1️⃣8️⃣ CloudFront (CDN)

CloudFront =
Content Delivery Network

Use:

Fast website loading

Cache content near user

1️⃣9️⃣ CI/CD (DevOps Basics)

AWS tools:

CodeCommit (Git)

CodeBuild

CodeDeploy

CodePipeline

👉 Automated deployment.

2️⃣0️⃣ Security Best Practices

✔ Use IAM roles
✔ Enable MFA
✔ Least privilege access
✔ Never expose keys

2️⃣1️⃣ AWS Pricing (Basic idea)

Pay-as-you-go

EC2 hourly pricing

S3 storage pricing

Lambda per execution

👉 Cost calculator available.

2️⃣2️⃣ AWS Architecture Example (MERN App)
React (S3 + CloudFront)
Node API (EC2 / Lambda)
MongoDB (Atlas)
Auth (Cognito)

2️⃣3️⃣ Common AWS Mistakes

❌ Leaving EC2 running
❌ Using root account
❌ Open security groups
❌ Not monitoring billing

2️⃣4️⃣ AWS Interview Questions (Bonus)

What is EC2?

Difference between S3 & EBS?

What is IAM?

What is VPC?

What is Lambda?

2️⃣5️⃣ AWS Learning Path (Recommended)

Cloud basics

EC2, S3, IAM

RDS & VPC

Lambda & API Gateway

Security & Monitoring

2️⃣6️⃣ Summary

✔ AWS = cloud leader
✔ Scalable & secure
✔ Used in real production
✔ Essential for full-stack & DevOps careers
    `,
};