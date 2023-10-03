from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .serializers import UploadSerializer, QuestionSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from dotenv import load_dotenv
import os
from .mainApp.app import get_pdf_text

load_dotenv()
# ViewSets define the view behavior.
class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        files = request.FILES.getlist('file')
        
        # Extract all text from PDF
        raw_text = get_pdf_text(files)
        return JsonResponse({"raw" : raw_text}, safe=False)

class QuestionView(APIView):
       def post(self, request, *args, **kwargs):
        serializer = QuestionSerializer(data=request.data)
        token = os.environ.get("HUGGING_FACE_TOKEN")
        if serializer.is_valid():
            question = serializer.validated_data['question']
            return Response({'message': question, "token" : token}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
