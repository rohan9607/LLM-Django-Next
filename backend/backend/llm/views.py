from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .serializers import UploadSerializer, QuestionSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status


# ViewSets define the view behavior.
class UploadViewSet(ViewSet):
    serializer_class = UploadSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        files = request.FILES.getlist('file')
        text=""
        for file in files:
            text += file.name + " "
        return JsonResponse({"name" : text}, safe=False)

class QuestionView(APIView):
       def post(self, request, *args, **kwargs):
        serializer = QuestionSerializer(data=request.data)

        if serializer.is_valid():
            question = serializer.validated_data['question']
            # Do something with the question (e.g., process it, save it to the database)
            return Response({'message': question}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
