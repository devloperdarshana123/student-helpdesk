export const dockerTutorial = {
    topic: "docker",
    triggers: [
        "docker tutorial",
        "docker sikhao",
        "docker full course",
    ],
    content: `
🐳 Docker Full Tutorial

(Beginner → Advanced)

1️⃣ Docker kya hai?

Docker ek containerization tool hai jo application aur uski dependencies ko ek container ke andar pack kar deta hai.

Simple words me:
👉 “Mere system pe chal raha hai” problem Docker solve karta hai

2️⃣ Docker kyun use karein?

Same app har system pe same chale

Easy deployment

Lightweight (VM se halka)

Fast setup

Dev → Test → Prod same environment

3️⃣ Docker vs Virtual Machine
Docker	Virtual Machine
Lightweight	Heavy
Fast startup	Slow
Uses host OS	Own OS
Less memory	More memory

👉 Docker VM ka smarter version hai.

4️⃣ Docker Important Terms (MUST KNOW)
🔹 Image

Blueprint of app (read-only)

🔹 Container

Running instance of image

🔹 Dockerfile

Instructions to build image

🔹 Docker Hub

Online image repository

5️⃣ Docker Architecture (Basic)
Docker Client → Docker Engine → Containers

6️⃣ Docker Installation

Windows / Mac → Docker Desktop

Linux → docker engine

Check:

docker --version

7️⃣ First Docker Command
docker run hello-world


👉 Docker correctly installed ✔️

8️⃣ Docker Images

List images:

docker images


Pull image:

docker pull node

9️⃣ Docker Containers

Run container:

docker run node


List running containers:

docker ps


All containers:

docker ps -a

🔟 Stop & Remove Container
docker stop container_id
docker rm container_id

1️⃣1️⃣ Port Mapping (VERY IMPORTANT)
docker run -p 3000:3000 node


👉 Browser → localhost:3000

1️⃣2️⃣ Dockerfile (CORE CONCEPT)

Dockerfile = instructions to create image

Example (Node.js App):
FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

1️⃣3️⃣ Build Image
docker build -t my-app .

1️⃣4️⃣ Run Image
docker run -p 3000:3000 my-app


🎉 App container me chal raha hai!

1️⃣5️⃣ Docker Ignore (.dockerignore)

Unnecessary files ignore karne ke liye:

node_modules
.env
.git

1️⃣6️⃣ Environment Variables
docker run -e PORT=3000 my-app


Dockerfile me:

ENV PORT=3000

1️⃣7️⃣ Volumes (Data Persistence)
docker run -v data:/app/data my-app


👉 Container delete hone par bhi data safe.

1️⃣8️⃣ Docker Compose (MULTI-CONTAINER) ⭐

Used for:

App + Database

MERN stack

docker-compose.yml
version: "3"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo

  mongo:
    image: mongo
    ports:
      - "27017:27017"


Run:

docker-compose up

1️⃣9️⃣ Docker for MERN Stack (Example)
React → Node → Mongo


Each service = separate container
Docker Compose manages all.

2️⃣0️⃣ Docker Networking (Basic)

Containers ek-dusre ko service name se access karte hain.

Example:

mongoose.connect("mongodb://mongo:27017/db");

2️⃣1️⃣ Docker Best Practices

✔ Small images
✔ Use official base images
✔ .dockerignore use karo
✔ One app per container
✔ Use Docker Compose

2️⃣2️⃣ Common Docker Mistakes

❌ Hardcoding secrets
❌ Huge images
❌ Running everything in one container
❌ Forgetting port mapping

2️⃣3️⃣ Docker Interview Questions

What is container?

Docker vs VM?

Image vs container?

Dockerfile vs Docker Compose?

Why Docker is used?

2️⃣4️⃣ Docker in Production

Used with:

AWS

Kubernetes

CI/CD pipelines

Microservices

2️⃣5️⃣ Learning Path (Recommended)

Docker basics

Dockerfile

Docker Compose

MERN with Docker

Docker + AWS

2️⃣6️⃣ Summary

✔ Docker solves environment issues
✔ Lightweight & fast
✔ Industry standard
✔ Must-have DevOps skill

💙 Buddy Tip (IMPORTANT)

Docker aane ke baad deployment fear khatam ho jata hai.
Code likho → Container banao → Deploy 🚀
`,
};