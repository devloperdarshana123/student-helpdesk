export const javascriptTutorial = {
  topic: "javascript",
  triggers: [
    "javascript tutorial",
    "js tutorial",
    "javascript full",
    "javascript sikhao",
  ],
  content: `
## 📘 JavaScript Complete Tutorial

1️⃣ JavaScript kya hai?

JavaScript ek programming language hai jo web pages ko interactive banati hai.
HTML structure deta hai, CSS design deta hai, aur JavaScript logic & behavior deta hai.

👉 Aaj JavaScript sirf browser tak limited nahi hai —
Node.js ke sath backend, mobile apps, desktop apps sab me use hoti hai.

2️⃣ JavaScript kahan use hoti hai?

Frontend (Browser)

Backend (Node.js)

Mobile Apps (React Native)

Games

APIs

Server-side apps

3️⃣ Variables

Variables data store karne ke liye use hote hain.

Types:

var ❌ (old, avoid)

let ✅

const ✅

let name = "Rohii";
const age = 22;


👉 const use karo jab value change na ho.

4️⃣ Data Types
Primitive Types:

String

Number

Boolean

Undefined

Null

let city = "Delhi";
let score = 90;
let isPassed = true;

Non-Primitive:

Object

Array

Function

let skills = ["JS", "React", "MongoDB"];

5️⃣ Operators
Arithmetic:
+  -  *  /  %

Comparison:
==   ===   !=   >   <


👉 === always preferred (strict comparison).

6️⃣ Conditions (if-else)
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

7️⃣ Loops
for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while loop
let i = 0;
while (i < 5) {
  i++;
}

8️⃣ Functions

Functions reusable code hote hain.

function add(a, b) {
  return a + b;
}

Arrow Function
const add = (a, b) => a + b;

9️⃣ Arrays
let fruits = ["apple", "banana", "mango"];

Important Methods:

map()

filter()

reduce()

fruits.map(item => console.log(item));

🔟 Objects
let user = {
  name: "Rohii",
  age: 22,
  skills: ["JS", "React"]
};


Access:

user.name;

1️⃣1️⃣ Destructuring
const { name, age } = user;

1️⃣2️⃣ Spread Operator
let newSkills = [...skills, "Node"];

1️⃣3️⃣ Asynchronous JavaScript
Callback (old)
Promise
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));

Async / Await (best)
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
}

1️⃣4️⃣ Error Handling
try {
  riskyCode();
} catch (error) {
  console.log(error);
}

1️⃣5️⃣ DOM Manipulation
document.getElementById("title").innerText = "Hello JS";

1️⃣6️⃣ ES6 Important Features

let / const

Arrow functions

Destructuring

Spread operator


1️⃣7️⃣ JavaScript in React / Next.js

JavaScript:

Controls state

Handles events

Calls APIs

Manages logic

React = JavaScript + UI components.

1️⃣8️⃣ Common JavaScript Mistakes

❌ Using var
❌ Not handling async properly
❌ Using == instead of ===
❌ Mutating state directly

1️⃣9️⃣ Interview Questions (Bonus)

Difference between let, var, const?

What is closure?

What is hoisting?

Difference between map and forEach?

What is async/await?

2️⃣0️⃣ Summary

✔ JavaScript is heart of web development
✔ Used everywhere
✔ Easy to start, powerful to master
✔ Must-learn for React, Node, Next.js
`,
};
