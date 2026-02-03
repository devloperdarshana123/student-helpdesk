export const sqlTutorial = {
  topic: "sql",
  triggers: [
    "sql tutorial",
    "sql sikhao",
    "sql full course",
    "sql explain properly",
    ],
    content: `
    1️⃣ SQL kya hai?

SQL ka full form Structured Query Language hai.
SQL ka use database se data ko store, fetch, update aur delete karne ke liye hota hai.

SQL mainly Relational Databases ke sath use hoti hai jaise:

MySQL

PostgreSQL

SQL Server

Oracle

2️⃣ Database kya hota hai?

Database ek jagah hoti hai jahan structured data store hota hai.

Structure:

Database
 └── Tables
      └── Rows (Records)
           └── Columns (Fields)

3️⃣ SQL vs NoSQL (Short Comparison)
SQL	NoSQL
Table-based	Document-based
Fixed schema	Flexible schema
Structured data	Semi-structured data
Uses SQL	Uses custom queries
4️⃣ Table kya hoti hai?

Table rows aur columns ka collection hoti hai.

Example: students

id	name	age	course
5️⃣ Basic SQL Commands (CRUD)
🔹 CREATE (Insert Data)
INSERT INTO students (name, age, course)
VALUES ('Rohii', 22, 'React');

🔹 READ (Select Data)
SELECT * FROM students;


Specific column:

SELECT name, age FROM students;

🔹 UPDATE
UPDATE students
SET age = 23
WHERE name = 'Rohii';

🔹 DELETE
DELETE FROM students
WHERE name = 'Rohii';


⚠️ WHERE ke bina DELETE poori table clear kar deta hai.

6️⃣ WHERE Clause

Data filter karne ke liye use hota hai.

SELECT * FROM students
WHERE age > 18;

7️⃣ Operators
Comparison:

=

!=

>

<

>=

<=

Logical:

AND

OR

NOT

SELECT * FROM students
WHERE age > 18 AND course = 'React';

8️⃣ ORDER BY

Data ko sort karne ke liye.

SELECT * FROM students
ORDER BY age DESC;

9️⃣ LIMIT

Kitne records chahiye define karta hai.

SELECT * FROM students
LIMIT 5;

🔟 Aggregate Functions

Data ka summary nikalne ke liye.

COUNT()

SUM()

AVG()

MAX()

MIN()

SELECT COUNT(*) FROM students;

1️⃣1️⃣ GROUP BY

Similar data ko group karta hai.

SELECT course, COUNT(*)
FROM students
GROUP BY course;

1️⃣2️⃣ HAVING

GROUP BY ke sath condition lagane ke liye.

SELECT course, COUNT(*)
FROM students
GROUP BY course
HAVING COUNT(*) > 2;

1️⃣3️⃣ JOINS (VERY IMPORTANT)

Tables ko connect karne ke liye.

🔹 INNER JOIN
SELECT students.name, courses.course_name
FROM students
INNER JOIN courses
ON students.course_id = courses.id;

🔹 LEFT JOIN
SELECT *
FROM students
LEFT JOIN courses
ON students.course_id = courses.id;

🔹 RIGHT JOIN
SELECT *
FROM students
RIGHT JOIN courses
ON students.course_id = courses.id;

1️⃣4️⃣ PRIMARY KEY

Unique identifier hota hai.

id INT PRIMARY KEY

1️⃣5️⃣ FOREIGN KEY

Table ke beech relation banata hai.

FOREIGN KEY (course_id) REFERENCES courses(id)

1️⃣6️⃣ Constraints

Data rules enforce karte hain.

NOT NULL

UNIQUE

DEFAULT

CHECK

age INT NOT NULL

1️⃣7️⃣ Indexing (Performance)

Query ko fast banata hai.

CREATE INDEX idx_name
ON students(name);

1️⃣8️⃣ Subqueries

Query ke andar query.

SELECT name
FROM students
WHERE age > (
  SELECT AVG(age) FROM students
);

1️⃣9️⃣ Views

Virtual table hoti hai.

CREATE VIEW student_view AS
SELECT name, age FROM students;

2️⃣0️⃣ Stored Procedures (Basic Idea)

Reusable SQL logic.

CREATE PROCEDURE getStudents()
BEGIN
  SELECT * FROM students;
END;

2️⃣1️⃣ Transactions

Multiple queries ko ek unit me run karna.

BEGIN;
UPDATE students SET age = 25 WHERE id = 1;
COMMIT;


Rollback:

ROLLBACK;

2️⃣2️⃣ Common SQL Mistakes

❌ WHERE bhool jana
❌ DELETE bina condition
❌ Index ka use na karna
❌ SQL injection ignore karna

2️⃣3️⃣ SQL Interview Questions (Bonus)

Difference between WHERE & HAVING?

What is JOIN?

What is normalization?

What is index?

SQL vs NoSQL?

2️⃣4️⃣ SQL Best Practices

✔ Use proper indexes
✔ Avoid SELECT * in production
✔ Use transactions
✔ Backup database regularly

2️⃣5️⃣ Summary

✔ SQL structured data ke liye best hai
✔ Powerful querying language
✔ Backend & analytics me must-have skill
✔ Strong foundation for databases
    `,
};