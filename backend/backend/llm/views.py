from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .serializers import UploadSerializer
from django.http import JsonResponse

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