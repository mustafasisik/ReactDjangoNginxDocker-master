from django.contrib import admin
from .models import Company


class CompanyAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ('name', 'description')


admin.site.register(Company, CompanyAdmin)
