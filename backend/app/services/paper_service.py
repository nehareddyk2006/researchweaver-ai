import uuid


def create_paper_response(filename: str, pdf_data: dict):
    text = pdf_data["text"].strip()

    lines = [line.strip() for line in text.split("\n") if line.strip()]

    title = lines[0] if lines else filename

    word_count = len(text.split())

    reading_time = max(1, round(word_count / 200))

    return {
        "id": str(uuid.uuid4()),
        "filename": filename,
        "title": title,
        "pages": pdf_data["pages"],
        "word_count": word_count,
        "reading_time": reading_time,
        "preview": text[:500],
    }