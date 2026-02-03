import { NextResponse } from "next/server";
import { staticChatData } from "@/lib/staticChatData";
import { tutorials } from "@/lib/tutorials";
import { careerGuides } from "@/lib/careerGuides";

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
    // 1️⃣ FULL TUTORIAL CHECK (LONG LESSONS)
    // ===============================
    const tutorialMatch = tutorials.find(t =>
      t.triggers.some(trigger => lowerMsg.includes(trigger))
    );

    if (tutorialMatch) {
      return NextResponse.json({
        reply: tutorialMatch.content,
      });
    }

    // ===============================
    // 2️⃣ CAREER GUIDES (ROADMAPS)
    // ===============================
    const careerMatch = careerGuides.find(g =>
      g.triggers.some(trigger => lowerMsg.includes(trigger))
    );

    if (careerMatch) {
      return NextResponse.json({
        reply: careerMatch.content,
      });
    }

    // ===============================
    // 3️⃣ NORMAL STATIC CHAT (SHORT ANSWERS)
    // ===============================
    for (const item of staticChatData) {
      if (item.patterns.some(p => lowerMsg.includes(p))) {
        return NextResponse.json({
          reply: getRandom(item.responses),
        });
      }
    }

    // ===============================
    // 4️⃣ GPT-LIKE FALLBACK (SMART DEFAULT)
    // ===============================
    const unknown = staticChatData.find(i => i.intent === "unknown");

    return NextResponse.json({
      reply: getRandom(unknown!.responses),
    });

  } catch (error) {
    // ===============================
    // 5️⃣ SAFETY NET
    // ===============================
    return NextResponse.json({
      reply:
        "Let’s think about this step by step and understand the core idea behind it.",
    });
  }
}
