# Generated by Django 4.2.2 on 2023-07-13 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("epredmet", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="UnansweredQuestion",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "text",
                    models.CharField(default="A default question", max_length=1024),
                ),
                (
                    "intent",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="epredmet.intent",
                    ),
                ),
            ],
        ),
    ]
