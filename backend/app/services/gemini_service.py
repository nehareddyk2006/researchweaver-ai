import os
import json
import time

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_paper(text: str):

    prompt = f"""
You are an expert academic research assistant.

Analyze the following research paper.

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.

Schema:

{{
"title":"",
"summary":"",
"research_problem":"",
"methodology":"",
"datasets":[],
"models":[],
"metrics":[],
"limitations":[],
"future_work":[],
"keywords":[]
}}

Paper:

{text[:25000]}
"""

    response = None

    for _ in range(3):
        try:
            response = client.models.generate_content(
                model="gemini-flash-latest",
                contents=prompt,
            )
            break

        except Exception:
            time.sleep(2)

    if response is None:
        raise Exception("Gemini unavailable")

    try:
        cleaned = (
            response.text
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        return json.loads(cleaned)

    except Exception:
        print("Gemini Raw Response:")
        print(response.text)

        return {
            "title": "",
            "summary": response.text,
            "research_problem": "",
            "methodology": "",
            "datasets": [],
            "models": [],
            "metrics": [],
            "limitations": [],
            "future_work": [],
            "keywords": [],
        }