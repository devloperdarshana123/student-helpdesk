export const pythonTutorial = {
  topic: "python",
  triggers: [
    "python tutorial",
    "python sikhao",
    "python full course",
  ],
  content: `
✅

📘 Python Full Tutorial

(Beginner → Advanced)

1️⃣ Python kya hai?

Python ek high-level, interpreted programming language hai jo simple syntax aur powerful features ke liye famous hai.
Beginner-friendly hone ke saath-saath, Python industry-grade kaam bhi handle karta hai.

2️⃣ Python kyun sikhein?

Easy to read & write

Beginner friendly

Huge community & libraries

Web, Data, AI, Automation sab me use hota hai

3️⃣ Python kahan use hoti hai?

Web Development (Django, Flask)

Data Science & Analytics

Machine Learning / AI

Automation & Scripting

Desktop Applications

APIs & Backend

4️⃣ Python Installation

Python.org se install

Check version:

python --version

5️⃣ Python Syntax (Basic)
print("Hello Python")


👉 Python me semicolon ; nahi hota
👉 Indentation bahut important hai

6️⃣ Variables
name = "Rohii"
age = 22
is_student = True


Python me variable ka type likhna nahi padta.

7️⃣ Data Types
Primitive:

int

float

string

boolean

x = 10
price = 99.5

Non-Primitive:

List

Tuple

Set

Dictionary

8️⃣ Lists
skills = ["Python", "React", "MongoDB"]

Common operations:
skills.append("SQL")
skills.remove("React")

9️⃣ Tuples (Immutable)
colors = ("red", "green", "blue")


👉 Value change nahi hoti

🔟 Dictionaries (Key-Value)
student = {
  "name": "Rohii",
  "age": 22
}


Access:

student["name"]

1️⃣1️⃣ Conditions (if-else)
if age >= 18:
    print("Adult")
else:
    print("Minor")

1️⃣2️⃣ Loops
for loop
for i in range(5):
    print(i)

while loop
i = 0
while i < 5:
    i += 1

1️⃣3️⃣ Functions
def add(a, b):
    return a + b


Call:

add(2, 3)

1️⃣4️⃣ Lambda Functions
square = lambda x: x * x

1️⃣5️⃣ File Handling
file = open("data.txt", "w")
file.write("Hello Python")
file.close()


Better way:

with open("data.txt", "r") as file:
    print(file.read())

1️⃣6️⃣ Exception Handling
try:
    x = int("abc")
except:
    print("Error occurred")

1️⃣7️⃣ OOP in Python
Class & Object
class Student:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello", self.name)

1️⃣8️⃣ Inheritance
class Child(Student):
    pass

1️⃣9️⃣ Modules & Packages
import math
print(math.sqrt(16))

2️⃣0️⃣ Virtual Environment
python -m venv venv


Activate:

venv\Scripts\activate

2️⃣1️⃣ Python for Web (Intro)

Frameworks:

Django (full-stack)

Flask (lightweight)

2️⃣2️⃣ Python for Data Science

Libraries:

NumPy

Pandas

Matplotlib

Seaborn

Example:

import pandas as pd

2️⃣3️⃣ Python for Automation
import os
os.rename("old.txt", "new.txt")

2️⃣4️⃣ Common Python Mistakes

❌ Ignoring indentation
❌ Mutable default arguments
❌ Not handling exceptions
❌ Writing long functions

2️⃣5️⃣ Python Best Practices

✔ Use meaningful variable names
✔ Follow PEP8
✔ Write reusable functions
✔ Use virtual environments

2️⃣6️⃣ Python Interview Questions (Bonus)

Python vs Java?

List vs Tuple?

What is PEP8?

What are decorators?

What is GIL?

2️⃣7️⃣ Summary

✔ Python easy hai
✔ Powerful hai
✔ Beginner → Advanced sab ke liye
✔ Career-friendly language
`,
};
