from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .serializers import UploadSerializer, QuestionSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from dotenv import load_dotenv
import os
from .mainApp.app import get_pdf_text, make_chunks_of_raw_text, create_vectorstore, create_conversation_chain

load_dotenv()
# ViewSets define the view behavior.
chain = None
globalVectorStore = None
class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        try :
            global chain, globalVectorStore
            files = request.FILES.getlist('file')
            
            # Extract all text from PDF
            raw_text = get_pdf_text(files)

            # Make chunks of raw text
            chunks = make_chunks_of_raw_text(rawText=raw_text)

            # create vector store
            globalVectorStore = create_vectorstore(chunks)

            # Create chat session for conversation
            create_conversation_chain(globalVectorStore)

            return Response({'message': "Conversation Chain Created", "success" : True, "raw_text" : raw_text, "chunks" : chunks}, status=status.HTTP_201_CREATED)
        except Exception:
            return Response({'message': "Something Went Wrong", "success" : False}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class QuestionView(APIView):
       def post(self, request, *args, **kwargs):
        global chain
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            question = serializer.validated_data['question']
            response = chain.run({'question': question})
            ans = response['chat_history']
            print({ans})
            return Response({'message': question, "chatHistory" : response}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
