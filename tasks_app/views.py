from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import Http404

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.apple.views import AppleOAuth2Adapter
from allauth.socialaccount.models import SocialAccount
from rest_auth.registration.views import SocialLoginView

from .serializer import TaskSerializer, SocialAccountSerializer
from .models import Task

class AppleLogin(SocialLoginView):
    adapter_class = AppleOAuth2Adapter

    def get_response(self):
        response = super().get_response()
        if response.status_code == status.HTTP_200_OK:
            user = self.request.user
            social_account = SocialAccount.objects.get(user=user)
            response.data.update({"user": SocialAccountSerializer(social_account).data})
        return response
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    
    def get_response(self):
        response = super().get_response()
        if response.status_code == status.HTTP_200_OK:
            user = self.request.user
            social_account = SocialAccount.objects.get(user=user)
            response.data.update({"user": SocialAccountSerializer(social_account).data})
        return response

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            all_objects = self.get_queryset()
            headers = self.get_success_headers(serializer.data)
            return Response({
                'message': '¡Tarea creada exitosamente!',
                'data': self.get_serializer(all_objects, many=True).data
            }, status=status.HTTP_201_CREATED, headers=headers)
        except Exception as e:
            return Response({'message': f'¡Error al crear la tarea! {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = get_object_or_404(self.queryset, pk=kwargs.get('pk'))
            self.perform_destroy(instance)
            return Response({'message': '¡Tarea eliminada exitosamente!'}, status=status.HTTP_200_OK)
        except Http404:
            return Response({'message': '¡Tarea no encontrada!'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'message': f'¡Error al eliminar la tarea! {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        try:
            instance = get_object_or_404(self.queryset, pk=kwargs.get('pk'))
            serializer = self.get_serializer(instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            updated_records = self.get_queryset()
            return Response({
                'message': '¡Tarea modificada exitosamente!',
                'data': self.get_serializer(updated_records, many=True).data
            }, status=status.HTTP_200_OK)
        except Http404:
            return Response({'message': '¡Tarea no encontrada!'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'message': f'¡Error al actualizar la tarea! {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
