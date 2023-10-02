from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers
from .views import UploadViewSet, QuestionView

router = routers.DefaultRouter()
router.register(r'upload', UploadViewSet, basename="upload")

# Wire up our API using automatic URL routing.
urlpatterns = [
    path('', include(router.urls)),
    path('submit-question/', QuestionView.as_view(), name='submit-question'),
]