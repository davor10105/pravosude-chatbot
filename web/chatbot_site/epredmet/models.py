from django.db import models


class Intent(models.Model):
    name = models.CharField(max_length=200, default="A default intent")

    def __str__(self):
        return self.name


class Answer(models.Model):
    intent = models.ForeignKey(Intent, on_delete=models.CASCADE)
    text = models.CharField(max_length=1024, default="A default question")

    def __str__(self):
        return self.text


class Question(models.Model):
    intent = models.ForeignKey(Intent, on_delete=models.CASCADE)
    text = models.CharField(max_length=1024, default="A default answer")

    def __str__(self):
        return self.text


class UnansweredQuestion(models.Model):
    intent = models.ForeignKey(Intent, on_delete=models.SET_NULL, blank=True, null=True)
    text = models.CharField(max_length=1024, default="A default question")

    def __str__(self):
        return self.text
