from rest_framework.serializers import Serializer, FileField, ListField

# Serializers define the API representation.
class UploadSerializer(Serializer):
    file_uploaded = ListField(
        child=FileField()
    )
    class Meta:
        fields = ['files']