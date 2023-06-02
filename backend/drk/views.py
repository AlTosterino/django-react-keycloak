from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from drk.authentication import KeyCloakAuthentication

class SampleResource(ViewSet):
    authentication_classes = [KeyCloakAuthentication]

    def list(self, request):
        return Response(request.user.user_info)
