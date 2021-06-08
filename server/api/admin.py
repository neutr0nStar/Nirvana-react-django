from django.contrib import admin

from .models import Place, Package

# Register your models here.

class PackageAdmin(admin.ModelAdmin):
    list_display = ['owner', 'destination']
    fields = ('owner', 'destination','starting_date', ('no_of_people', 'no_of_days'), 'price')

admin.site.register(Place)
admin.site.register(Package, PackageAdmin)
