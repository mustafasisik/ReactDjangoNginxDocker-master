from django.shortcuts import render, HttpResponse
from django.core.files.storage import FileSystemStorage
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Company


def index(request):
    context = {}
    companies = Company.objects.all()
    if companies.count() > 0:
        company = companies.first()
        context["current_name"] = company.name
    else:
        context["current_name"] = "No Name Yet"
    return render(request, "index.html", context)


def company_name(request):
    name = "empty name"
    if request.method == "POST":
        name = request.POST.get("name").strip()
    return HttpResponse(name)


class SaveCompanyNameAPI(APIView):
    # authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        context = {}
        name = request.POST.get("name")
        companies = Company.objects.all()
        if companies.count() > 0:
            company = companies.first()
            company.name = name
            company.description = name
            company.save()
            context["status"] = "success"
            context["company_name"] = name
        else:
            company = Company()
            company.name = name
            company.description = name
            company.save()
            context["status"] = "success"
            context["company_name"] = name
        return Response(context)

    def get(self):
        context = {}
        name = "name is not defined!"
        companies = Company.objects.all()
        if companies.count() > 0:
            company = companies.first()
            name = company.name
        context["company_name"] = name
        return Response(context)
