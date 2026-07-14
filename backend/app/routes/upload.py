from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File

from app.extraction.pdf_reader import extract_text
from app.services.paper_service import create_paper_response
from app.services.gemini_service import analyze_paper

router = APIRouter(prefix="/upload", tags=["Upload"])

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/")
async def upload_pdf(file: UploadFile = File(...)):

    if file.content_type != "application/pdf":
        return {"error": "Only PDF files are allowed."}

    file_path = UPLOAD_DIR / file.filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    pdf_data = extract_text(str(file_path))

    paper = create_paper_response(file.filename, pdf_data)

    try:
        analysis = analyze_paper(pdf_data["text"])
        paper["analysis"] = analysis

    except Exception as e:
        print("Gemini Error:", e)

        paper["analysis"] = {
            "summary": "AI analysis unavailable.",
            "research_problem": "",
            "methodology": "",
            "datasets": [],
            "models": [],
            "metrics": [],
            "limitations": [],
            "future_work": [],
            "keywords": []
        }

    return paper