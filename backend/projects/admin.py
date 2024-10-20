from django.contrib import admin

from .models import *


# Register your models here.
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1


class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'link', 'start_date', 'end_date']
    inlines = [ProjectImageInline]
    search_fields = ['title', 'description']
    list_filter = ['technologies', 'start_date', 'end_date']


class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['name', 'category']
    search_fields = ['name']
    list_filter = ['category']


admin.site.register(Project, ProjectAdmin)
admin.site.register(Technology, TechnologyAdmin)
admin.site.register(ProjectImage)
