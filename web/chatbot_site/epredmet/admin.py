from django.contrib import admin
from .models import Intent, Question, Answer, UnansweredQuestion


class EpredmetAnnotationAdminSite(admin.AdminSite):
    site_header = "ePredmet Annotation"
    site_title = "ePredmet Annotation Portal"
    index_title = "Dobrodošli na Portal za Označavanje"


epredmet_annotation_admin_site = EpredmetAnnotationAdminSite(
    name="epredmet_annotation_admin"
)

epredmet_annotation_admin_site.register(Intent)
epredmet_annotation_admin_site.register(UnansweredQuestion)

admin.site.register(Intent)
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(UnansweredQuestion)
