from django.contrib import admin
from .models import Intent, Question, Answer, UnansweredQuestion


admin.site.register(Intent)
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(UnansweredQuestion)
