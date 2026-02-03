export const reactTutorial = {
  topic: "react",
  triggers: [
    "react tutorial",
    "react complete",
    "react full course",
    "react sikhao",
    "react explain properly",
  ],
  content: `
#1️⃣ React kya hai?

React ek JavaScript library hai jo User Interfaces (UI) banane ke liye use hoti hai.
Isse Facebook (Meta) ne develop kiya hai.

React ka main kaam:
👉 UI ko components me todna
👉 Fast rendering using Virtual DOM

2️⃣ React kyun use karein?

Component-based architecture

Reusable UI

Fast performance

Easy state management

Huge community support

Perfect for large applications

React aaj ke time me:

Dashboards

Admin panels

E-commerce

SaaS apps
me extensively use hota hai.

3️⃣ React ka basic concept: Components

React app components se banti hai.

Example:
function Welcome() {
  return <h1>Hello React</h1>;
}


👉 Component ek normal JavaScript function hota hai jo JSX return karta hai.

4️⃣ JSX (JavaScript + HTML)

JSX JavaScript ka extension hai jisme hum HTML jaisa code likhte hain.

const name = "Rohii";
<h1>Hello {name}</h1>


Rules:

JSX me ek hi parent element hota hai

JavaScript {} ke andar likhte hain

5️⃣ React App ka Structure

Typical React app:

src/
 ├── components/
 ├── App.jsx
 ├── main.jsx

6️⃣ Props (Parent → Child data)

Props ka use data pass karne ke liye hota hai.

function Student(props) {
  return <h2>{props.name}</h2>;
}

<Student name="Rohii" />


👉 Props read-only hote hain.

7️⃣ State (Dynamic data)

State component ka internal data hota hai jo change ho sakta hai.

useState Hook:
import { useState } from "react";

const [count, setCount] = useState(0);


Update state:

setCount(count + 1);

8️⃣ Event Handling
<button onClick={() => setCount(count + 1)}>
  Increment
</button>

9️⃣ Conditional Rendering

Condition ke basis pe UI show/hide karna.

{isLoggedIn ? <Dashboard /> : <Login />}

🔟 Lists & Keys
{students.map((s, index) => (
  <li key={index}>{s}</li>
))}


👉 key React ko efficiently re-render karne me help karta hai.

1️⃣1️⃣ useEffect Hook (VERY IMPORTANT)

Side effects handle karta hai:

API calls

Subscriptions

Timers

useEffect(() => {
  console.log("Component mounted");
}, []);


Dependency array:

[] → run once

[state] → state change pe run

1️⃣2️⃣ Forms Handling
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

1️⃣3️⃣ Lifting State Up

State ko parent me rakhna jab multiple children use karein.

1️⃣4️⃣ useContext (Global State)
const ThemeContext = createContext();


Avoids prop drilling.

1️⃣5️⃣ useRef Hook

DOM elements access karne ke liye.

const inputRef = useRef();

inputRef.current.focus();

1️⃣6️⃣ Custom Hooks

Reusable logic ko hook me convert karna.

function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}

1️⃣7️⃣ React Lifecycle (Functional way)

Mount → useEffect

Update → useEffect

Unmount → cleanup function

1️⃣8️⃣ Performance Optimization

React.memo

useCallback

useMemo

Example:

const MemoComponent = React.memo(MyComponent);

1️⃣9️⃣ API Integration (Fetch / Axios)
useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => setData(data));
}, []);

2️⃣0️⃣ Routing (React Router)
<Route path="/login" element={<Login />} />

2️⃣1️⃣ React Best Practices

✔ Small components
✔ Meaningful names
✔ Avoid inline logic
✔ Proper folder structure
✔ Controlled components

2️⃣2️⃣ Common React Mistakes

❌ Mutating state directly
❌ Missing dependency array
❌ Using index as key (bad practice)
❌ Too many re-renders

2️⃣3️⃣ React + Next.js

React = UI
Next.js = Framework (SSR, routing, APIs)

👉 Next.js React ko aur powerful banata hai.

2️⃣4️⃣ Interview Questions (Bonus)

What is Virtual DOM?

Props vs State?

useEffect lifecycle?

useMemo vs useCallback?

Controlled vs uncontrolled components?

2️⃣5️⃣ Summary

✔ React is component-based
✔ Uses hooks for logic
✔ Perfect for scalable UI
✔ Backbone of modern frontend
`,
};
