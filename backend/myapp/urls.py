from django.urls import path

from . import views

app_name = 'myapp'

urlpatterns = [
    path("", views.index, name="home"),
    #path("upload", views.image_upload, name="upload"),
    path("company_name", views.company_name, name="company_name"),

    # api endpoints
    path('api/save_company_name', views.SaveCompanyNameAPI.as_view(), name='save_company_name'),
]
