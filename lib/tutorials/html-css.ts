export const htmlCssTutorial = {
    topic: "html-css",
    triggers: [
        "html css tutorial",
        "html css sikhao",
        "html css full course",
    ],
    content: `
PART 1: HTML (Structure of Website)
1️⃣ HTML kya hai?

HTML ka full form HyperText Markup Language hai.
HTML ka kaam hota hai website ka structure banana.

👉 HTML bina CSS ke sirf skeleton hota hai.

2️⃣ Basic HTML Structure
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>

3️⃣ Common HTML Tags
Headings
<h1>Heading</h1>  <!-- biggest -->
<h6>Smallest</h6>

Paragraph
<p>This is a paragraph</p>

Links
<a href="https://google.com">Go to Google</a>

Images
<img src="image.jpg" alt="My Image" />

Lists

Ordered List

<ol>
  <li>HTML</li>
  <li>CSS</li>
</ol>


Unordered List

<ul>
  <li>React</li>
  <li>Next.js</li>
</ul>

4️⃣ HTML Forms (VERY IMPORTANT)
<form>
  <input type="text" placeholder="Name" />
  <input type="email" />
  <button>Submit</button>
</form>


Input types:

text

email

password

number

checkbox

radio

5️⃣ Semantic HTML (INTERVIEW IMPORTANT)

Semantic tags meaning batate hain.

<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<footer></footer>


👉 SEO aur accessibility ke liye important.

🎨 PART 2: CSS (Design & Layout)
6️⃣ CSS kya hai?

CSS ka full form Cascading Style Sheets hai.
CSS ka kaam hota hai HTML ko beautiful banana.

7️⃣ CSS add karne ke tarike
Inline
<h1 style="color:red">Hello</h1>

Internal
<style>
  h1 { color: red; }
</style>

External (BEST)
<link rel="stylesheet" href="style.css">

8️⃣ CSS Selectors
h1 { color: blue; }
.className { font-size: 20px; }
#idName { background: yellow; }

9️⃣ Box Model (VERY IMPORTANT)
Margin
Border
Padding
Content

div {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}

🔟 Colors & Units
Colors
color: red;
color: #ff0000;
color: rgb(255,0,0);

Units

px

%

rem

vh / vw

1️⃣1️⃣ Flexbox (LAYOUT KING 👑)
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}


Flex properties:

justify-content

align-items

gap

flex-direction

1️⃣2️⃣ CSS Grid (Advanced Layout)
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}


Use when:

Complex layouts

Dashboard UI

1️⃣3️⃣ Position Property
position: static | relative | absolute | fixed | sticky;


Example:

.box {
  position: absolute;
  top: 10px;
}

1️⃣4️⃣ Responsive Design (IMPORTANT)
Media Queries
@media (max-width: 768px) {
  body {
    background: lightgray;
  }
}


👉 Mobile-friendly website ke liye MUST.

1️⃣5️⃣ Hover & Transitions
button:hover {
  background: green;
}

transition: all 0.3s ease;

1️⃣6️⃣ Animations (Basic)
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

1️⃣7️⃣ Common HTML + CSS Mistakes

❌ Inline CSS overuse
❌ No semantic tags
❌ Fixed width layouts
❌ Ignoring mobile design

1️⃣8️⃣ Best Practices

✔ Use semantic HTML
✔ Mobile-first CSS
✔ Reusable classes
✔ Clean structure

1️⃣9️⃣ HTML + CSS Interview Questions

Difference between class & id?

What is box model?

Flex vs Grid?

Inline vs block elements?

Semantic HTML?

2️⃣0️⃣ Summary

✔ HTML = structure
✔ CSS = design
✔ Foundation of web development
✔ Strong base for React / Next.js
💙 Buddy Tip (Very Important)

HTML + CSS strong hogi → React & Next.js bahut easy lagenge.
Ye base hai, isko kabhi weak mat hone dena 🔥
`,
};