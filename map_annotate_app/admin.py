"""
This is the C{admin.py} file for C{map_annotate_app}.
For more details, see the documentation for C{map_annotate_app}.
"""

from django.contrib import admin

from .models import Crime
from .models import CrimeType
from .models import Location
from .models import Sansad

admin.site.register(Location)
admin.site.register(Crime)
admin.site.register(CrimeType)
admin.site.register(Sansad)
