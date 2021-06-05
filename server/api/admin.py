from django.contrib import admin

from .models import Place, Package

# Register your models here.

class PackageAdmin(admin.ModelAdmin):
    list_display = ['owner', 'destination', 'price']
    fields = ('owner', 'destination', ('no_of_people', 'no_of_days'))

admin.site.register(Place)
admin.site.register(Package, PackageAdmin)
