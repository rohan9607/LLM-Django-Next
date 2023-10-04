# 1) Open Bash Terminal and write command
$ git clone https://github.com/rohan9607/Quantive_Assignment.git

# Frontend
1) Go to Quantive_Assignment\frontend
2) run command : npm install --force
3) run command : npm run dev

# Backend 
Pre-requesite : python 3.11.x 
1) Go to Quantive_Assignment\backend\backend
   
2)Install required packages
$ pip install django langchain dotenv django-cors-headers PyPDF2 python-dotenv openai faiss-cpu altair tiktoken huggingface-hub InstructorEmbedding sentence-transformers

3) Create .env file where manage.py is located (root folder)
paste the following keys :

SECRET_KEY=3kg27f1*jrue6)$26!a6-gmoz_k7^6$0(ig*tjo_u@#fwx2^oe

OPENAI_API_KEY=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

HUGGINGFACEHUB_API_TOKEN=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


# Run Server
$python manage.py runserver




