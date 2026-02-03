export type StaticIntent = {
  intent: string;
  patterns: string[];
  responses: string[];
};

export const staticChatData: StaticIntent[] = [
  {
    intent: "greeting",
    patterns: ["hi", "hello", "hey", "hii", "hola"],
    responses: [
      "👋 Hey! How can I help you today?",
      "Hello 😊 What would you like to know?",
      "Hi there! Ask me anything.",
    ],
  },
  {
    intent: "nextjs",
    patterns: ["next", "nextjs", "next.js"],
    responses: [
      "Next.js is a React framework used for building fast web apps with routing and SSR.",
      "Next.js helps you build full-stack React apps with APIs and server rendering.",
    ],
  },
  {
    intent: "react",
    patterns: ["react"],
    responses: [
      "React is a JavaScript library for building UI using components.",
      "React makes UI reusable and state-driven.",
    ],
  },
  {
  intent: "unknown",
  patterns: [],
  responses: [
    "That’s an interesting question. Let’s break it down step by step 🙂",
    "Good question! The answer can depend on the context. Could you share a bit more?",
    "There are a few ways to look at this. In general, it works like this…",
    "This topic is usually handled differently based on requirements, but here’s the common approach.",
    "That’s something many students ask. Let me explain the general idea.",
  ],
}

];
