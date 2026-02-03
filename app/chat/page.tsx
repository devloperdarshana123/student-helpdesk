"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type Message = {
  role: "user" | "bot";
  text: string;
  time: string;
};

export default function ChatPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  // Protect route
  useEffect(() => {
    if (isLoaded && !user) router.push("/sign-in");
  }, [isLoaded, user, router]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function getTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      text: input,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();

      const botMessage: Message = {
        role: "bot",
       text: data.answer || "🤖 I’m here to help! Try asking about MongoDB, React, or Next.js.",
        time: getTime(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      alert("Chatbot error ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex justify-center items-center p-4">

      {/* Chat Card */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-lg">🎓 Student Help Desk AI</h1>
            <p className="text-xs opacity-80">Ask anything. I'm here to help.</p>
          </div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
            🟢 Online
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50">

          {messages.length === 0 && (
            <div className="text-center text-gray-400 text-sm mt-16">
              👋 Start by asking about exams, coding, careers or college rules.
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-2 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Avatar */}
              {msg.role === "bot" && (
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">
                  🤖
                </div>
              )}

              {/* Bubble */}
              <div
                className={`px-4 py-3 rounded-2xl max-w-[72%] text-sm leading-relaxed shadow-sm whitespace-pre-wrap animate-fadeIn ${
                  msg.role === "user"
                    ? "bg-emerald-600 text-white rounded-br-sm"
                    : "bg-white text-gray-800 rounded-bl-sm border"
                }`}
              >
                <div>{msg.text}</div>
                <div className="text-[10px] opacity-60 mt-1 text-right">
                  {msg.time}
                </div>
              </div>

              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                  🙂
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="text-gray-400 text-xs animate-pulse">
              🤖 AI is typing...
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white flex gap-3 items-center">

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            rows={1}
            className="
              flex-1 resize-none rounded-2xl px-4 py-3
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-emerald-500
              text-gray-900 placeholder-gray-400
            "
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className={`
              px-5 py-3 rounded-2xl font-medium shadow
              transition active:scale-95
              ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }
            `}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
