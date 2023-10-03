# imports 
from PyPDF2 import PdfReader


# get the chunks of uploaded pfd files

def get_pdf_text(pdf_files):
    text = ""
    for pdf in pdf_files:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
            
    return text

