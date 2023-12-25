# imports 
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings, HuggingFaceInstructEmbeddings
from langchain.vectorstores import FAISS
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain.chat_models import ChatOpenAI
from langchain.llms import HuggingFaceHub
from langchain.agents import initialize_agent

# get the chunks of uploaded pfd files

chain = None

def get_pdf_text(pdf_files):
    text = ""
    for pdf in pdf_files:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
            
    return text

# Split the text into chunks
def make_chunks_of_raw_text(rawText):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
        )
    return text_splitter.split_text(rawText)

def create_vectorstore(chunksOfText):
    embeddings = HuggingFaceInstructEmbeddings(model_name="hkunlp/instructor-xl")
    vectorstore = FAISS.from_texts(texts=chunksOfText, embedding=embeddings)
    return vectorstore

def create_conversation_chain(vectorstore):
    global chain
    llm = HuggingFaceHub(repo_id="google/flan-t5-xxl", model_kwargs={"temperature":0.2, "max_length":2000})
    # llm = ChatOpenAI(temperature=0, model_name='gpt-3.5-turbo-0301')
    memory = ConversationBufferMemory(
        memory_key='chat_history', return_messages=True, output_key='answer' , input_key="question")
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    
    #Here you can add any question regarding to your pdf file for testing
    return conversation_chain
