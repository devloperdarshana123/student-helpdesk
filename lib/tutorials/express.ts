export const expressTutorial = {
    topic: "express",
    triggers: [
        "express tutorial",
        "express.js tutorial",
        "expressjs tutorial",
        "express sikhao",
    ],
    content: `
🚀 Express.js Full Tutorial

(Beginner → Advanced)

1️⃣ Express.js kya hai?

Express.js ek Node.js framework hai jo backend / server-side applications banane ke liye use hota hai.

Simple words me:
👉 Node.js powerful hai, Express usko easy bana deta hai

Express ka use hota hai:

APIs banane me

Backend logic likhne me

MERN stack me

2️⃣ Express kyun use karein?

Lightweight & fast

Simple syntax

Routing easy

Middleware support

Industry standard (Node backend)

3️⃣ Express kahan use hota hai?

REST APIs

Backend for React / Next.js

Authentication systems

CRUD applications

Microservices

4️⃣ Express setup (Basic)
Step 1: Project init
npm init -y

Step 2: Install Express
npm install express

5️⃣ First Express Server
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


Open browser:

http://localhost:3000

6️⃣ Basic Route
app.get("/", (req, res) => {
  res.send("Hello Express");
});


👉 GET / route create ho gaya.

7️⃣ HTTP Methods (IMPORTANT)

GET → data read

POST → data create

PUT → data update

DELETE → data delete

Example:

app.post("/users", (req, res) => {
  res.send("User created");
});

8️⃣ Request & Response
Request (req)

req.body

req.params

req.query

Response (res)

res.send()

res.json()

res.status()

Example:

res.status(200).json({ success: true });

9️⃣ Middleware (VERY IMPORTANT)

Middleware = function jo request ke beech me run hota hai

Example:
app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});


👉 next() call karna mandatory hai.

🔟 Body Parser (JSON data)
app.use(express.json());


Ab tum JSON body read kar sakti ho:

req.body

1️⃣1️⃣ Route Parameters
app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});


URL:

/users/5

1️⃣2️⃣ Query Parameters
app.get("/search", (req, res) => {
  res.send(req.query.name);
});


URL:

/search?name=rohii

1️⃣3️⃣ Express Router (Clean Code)
const router = express.Router();

router.get("/profile", (req, res) => {
  res.send("Profile page");
});

module.exports = router;


Use in app:

app.use("/user", router);

1️⃣4️⃣ Folder Structure (Best Practice)
src/
 ├── routes/
 ├── controllers/
 ├── models/
 ├── middleware/
 └── server.js

1️⃣5️⃣ Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

1️⃣6️⃣ Connecting MongoDB (Intro)

Using Mongoose:

npm install mongoose

mongoose.connect(process.env.MONGO_URI);

1️⃣7️⃣ MVC Pattern (IMPORTANT)

Model → Database logic

View → (frontend)

Controller → Business logic

👉 Clean & scalable backend.

1️⃣8️⃣ Authentication (Basic Idea)

Common methods:

JWT (JSON Web Token)

Sessions

OAuth

JWT Example:

jwt.sign({ id: user._id }, "secret");

1️⃣9️⃣ CORS (Frontend connect issue)
npm install cors

app.use(cors());


👉 React / Next.js ke sath required hota hai.

2️⃣0️⃣ Environment Variables
npm install dotenv

require("dotenv").config();


Use:

process.env.PORT

2️⃣1️⃣ Express with MERN Stack
React / Next.js → Express API → MongoDB


Express = backend brain 🧠

2️⃣2️⃣ Common Express Mistakes

❌ Middleware me next() bhool jana
❌ Error handling nahi karna
❌ Hardcoded secrets
❌ Monolithic routes

2️⃣3️⃣ Express Interview Questions

What is middleware?

Express vs Node.js?

What is Router?

What is MVC?

How authentication works?

2️⃣4️⃣ Express Best Practices

✔ MVC structure follow karo
✔ Use async/await
✔ Central error handler
✔ Secure environment variables

2️⃣5️⃣ Summary

✔ Express = Node backend framework
✔ APIs banana easy
✔ MERN stack ka core
✔ Scalable & production ready

💙 Buddy Tip (Important)

Express strong ho gaya → Backend ka darr khatam.
React / Next.js ke sath Express = 🔥 powerful combo.
`,
};