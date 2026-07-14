from app.services.gemini_service import analyze_paper

text = """
Attention Is All You Need introduces the Transformer architecture,
replacing recurrent neural networks with self-attention.
"""

print(analyze_paper(text))