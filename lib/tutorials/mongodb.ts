export const mongodbTutorial = {
    topic: "mongodb",
    triggers: [
        "mongodb tutorial",
        "mongodb sikhao",
        "mongodb full course",
        "mongodb explain properly",
    ],
    content: `
## 📘 MongoDB Complete Tutorial (Beginner → Advanced)
1️⃣ MongoDB kya hai?

MongoDB ek NoSQL database hai jo data ko JSON-like documents (BSON) ke form me store karta hai.
Yeh traditional SQL databases se different hai kyunki yeh tables & rows ke bajaye collections & documents use karta hai.

2️⃣ SQL vs MongoDB (Difference)
SQL	MongoDB
Tables	Collections
Rows	Documents
Columns	Fields
Fixed schema	Flexible schema
JOINs	Embedded documents

👉 MongoDB schema-less hota hai (structure flexible).

3️⃣ MongoDB Structure
Database
 └── Collection
      └── Document

Example Document:
{
  "name": "Rohii",
  "age": 22,
  "skills": ["React", "Node", "MongoDB"]
}

4️⃣ MongoDB kyun use karein?

Flexible data structure

Fast read & write

Easily scalable

Big data handle kar sakta hai

MERN stack me widely used

5️⃣ MongoDB Installation (Basic idea)

MongoDB Atlas (Cloud – recommended)

Local MongoDB (system pe)

👉 Mostly projects me MongoDB Atlas use hota hai.

6️⃣ CRUD Operations (MOST IMPORTANT)
🔹 Create (Insert Data)
db.users.insertOne({
  name: "Aman",
  age: 23
});

🔹 Read (Find Data)
db.users.find({ age: 23 });


Find all:

db.users.find();

🔹 Update
db.users.updateOne(
  { name: "Aman" },
  { $set: { age: 24 } }
);

🔹 Delete
db.users.deleteOne({ name: "Aman" });

7️⃣ Important MongoDB Operators
🔸 Comparison

$gt → greater than

$lt → less than

$gte, $lte

db.users.find({ age: { $gt: 18 } });

🔸 Logical

$and

$or

db.users.find({
  $or: [{ age: 18 }, { age: 20 }]
});

8️⃣ Schema Design (Important Concept)

MongoDB me:

Embedded documents (preferred)

Referenced documents (SQL-style)

Embedded Example:
{
  "orderId": 1,
  "items": [
    { "product": "Book", "price": 200 }
  ]
}

9️⃣ Indexing (Performance Booster)

Index data ko fast search karne me help karta hai.

db.users.createIndex({ email: 1 });


👉 Index ke bina large data slow ho jaata hai.

🔟 MongoDB with Node.js (Mongoose)
Mongoose kya hai?

Mongoose ek ODM (Object Data Modeling) library hai jo MongoDB ko Node.js ke sath connect karti hai.

Connection Example:
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

Schema Example:
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

1️⃣1️⃣ Model
const User = mongoose.model("User", userSchema);

1️⃣2️⃣ When MongoDB is Best Choice?

MERN stack projects

Real-time apps

Flexible data

Startups & scalable apps

Analytics / logging

1️⃣3️⃣ Common MongoDB Mistakes

❌ Too many collections
❌ No indexes
❌ Deep nested documents
❌ Using MongoDB like SQL

1️⃣4️⃣ MongoDB Interview Questions (Bonus)

What is NoSQL?

Difference between MongoDB & MySQL?

What is indexing?

What is aggregation?

What is Mongoose?

1️⃣5️⃣ Summary

✔ MongoDB is flexible
✔ Uses documents instead of tables
✔ Easy to scale
✔ Perfect for modern web apps

📌 Final Tip (Buddy Advice 💙)

MongoDB tab powerful hota hai jab tum data ko structure ke sath design karo,
sirf database samajh ke nahi — system ki tarah socho.
`,
};