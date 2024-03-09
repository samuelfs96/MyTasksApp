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
        except Exception:
            traceback.print_exc()
            return Response({'message': '¡Error al eliminar la tarea!'}, status=status.HTTP_400_BAD_REQUEST)
    def update(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            updated_records = self.get_queryset()
            return Response({'message': '¡Tarea modificada exitosamente!', 'data': self.get_serializer(updated_records, many=True).data}, status=status.HTTP_200_OK)
        except Http404:
            return Response({'message': '¡Tarea no encontrada!'}, status=status.HTTP_404_NOT_FOUND)
        except Exception:
            traceback.print_exc()
            return Response({'message': '¡Error al actualizar la tarea!'}, status=status.HTTP_400_BAD_REQUEST)
