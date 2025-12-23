import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = `
You are a professional fitness coach.

User profile:
- Gender: ${body.gender}
- Location: ${body.location}
- Goal: ${body.goal}
- Level: ${body.level}
- Duration: ${body.duration} minutes

Rules:
- Create a 1-day workout plan
- Use simple bodyweight exercises
- Return ONLY valid JSON
- No markdown
- No explanation

JSON format:
{
  "exercises": [
    {
      "name": "Push-up",
      "sets": 3,
      "reps": 12,
      "animation": "push-up.gif"
    }
  ]
}
`;

  const response = await fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
    }),
  });

  const data = await response.json();

  // 🔍 دیباگ (خیلی مهم)
  console.log("OLLAMA RESPONSE:", data);

  if (!data.response) {
    return NextResponse.json(
      { error: "Ollama returned no response", raw: data },
      { status: 500 }
    );
  }

  try {
    // حذف ```json ``` اگر وجود داشت
    const cleaned = data.response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const json = JSON.parse(cleaned);

    return NextResponse.json(json);
  } catch (err) {
    return NextResponse.json(
      {
        error: "Invalid JSON from Ollama",
        rawResponse: data.response,
      },
      { status: 500 }
    );
  }
}
