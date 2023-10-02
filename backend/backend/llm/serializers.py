from rest_framework.serializers import Serializer, FileField, ListField, CharField

# Serializers define the API representation.
class UploadSerializer(Serializer):
    file_uploaded = ListField(
        child=FileField()
    )
    class Meta:
        fields = ['files']

class QuestionSerializer(Serializer):
    question = CharField(max_length=255)  # Adjust the max_length as needed