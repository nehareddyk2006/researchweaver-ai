import os
import json
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

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=prompt,
    )

    cleaned = (
        response.text
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(cleaned)