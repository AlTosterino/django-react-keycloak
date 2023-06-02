"""
URL configuration for drk project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.http import HttpResponse, JsonResponse
from django.urls import path
from keycloak import KeycloakOpenID

KEYCLOAK_OPENID = KeycloakOpenID(server_url="http://localhost:8080/",
                   client_id="backend",
                   realm_name="master",
                   client_secret_key="secret")
def some_view(request):
    token = request.headers.get("Authorization")
    if not token:
        return HttpResponse("Unathorized", status=401)
    bearer, token = token.split(" ")
    return JsonResponse(data=KEYCLOAK_OPENID.userinfo(token))

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", some_view)
]
