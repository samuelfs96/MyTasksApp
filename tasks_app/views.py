import traceback
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import Http404
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            return Response({'message': '¡Tarea eliminada exitosamente!'}, status=status.HTTP_200_OK)
        except Http404:
            return Response({'message': '¡Tarea no encontrada!'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as ex:
            traceback.print_exc()
            raise ex
