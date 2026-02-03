import { NextResponse } from "next/server";
import { staticChatData } from "@/lib/staticChatData";
import { tutorials } from "@/lib/tutorials";

export const runtime = "nodejs";

// helper: random reply (GPT feel)
function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase();

    // ===============================
    // 1️⃣ FULL TUTORIAL CHECK (HIGHEST PRIORITY)
    // ===============================
    const tutorialMatch = tutorials.find(t =>
      t.triggers.some(trigger => lowerMsg.includes(trigger))
    );

    if (tutorialMatch) {
      return NextResponse.json({
        answer: tutorialMatch.content,
      });
    }

    // ===============================
    // 2️⃣ NORMAL CHAT (STATIC Q&A)
    // ===============================
    for (const item of staticChatData) {
      if (item.patterns.some(p => lowerMsg.includes(p))) {
        return NextResponse.json({
          answer: getRandom(item.responses),
        });
      }
    }

    // ===============================
    // 3️⃣ SILENT GPT-LIKE FALLBACK
    // ===============================
    const unknown = staticChatData.find(i => i.intent === "unknown");

    return NextResponse.json({
      answer: getRandom(unknown!.responses),
    });

  } catch (error) {
    // ===============================
    // 4️⃣ SAFETY NET (NEVER EXPOSE ERRORS)
    // ===============================
    return NextResponse.json({
      answer:
        "Let’s think about this step by step and understand the core idea behind it.",
    });
  }
}
