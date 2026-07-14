import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("🚀 Proxy called");

    const formData = await request.formData();

    const response = await fetch(
      "http://127.0.0.1:8000/upload/",
      {
        method: "POST",
        body: formData,
      }
    );

    console.log("Backend Status:", response.status);
    console.log("Backend Headers:", Object.fromEntries(response.headers.entries()));

    const text = await response.text();

    console.log("Backend Body:", text);

    return new NextResponse(text, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (err) {
    console.error("Proxy Error:", err);

    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}