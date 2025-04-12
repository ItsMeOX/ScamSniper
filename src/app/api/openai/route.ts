// src/app/api/openai/route.ts
import { OpenAI } from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, model = "gpt-4", temperature = 0.7 } = body;

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature,
    });

    return new Response(
      JSON.stringify({ response: response.choices[0].message }),
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      { status: 500 }
    );
  }
}