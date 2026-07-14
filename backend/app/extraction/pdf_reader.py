import fitz  # PyMuPDF

def extract_text(pdf_path: str):
    document = fitz.open(pdf_path)

    page_count = len(document)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return {
        "pages": page_count,
        "text": text,
    }