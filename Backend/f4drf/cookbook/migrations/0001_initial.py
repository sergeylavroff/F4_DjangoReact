# Generated by Django 4.0.2 on 2022-02-19 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('context', models.CharField(blank=True, max_length=1023)),
                ('picture', models.ImageField(blank=True, upload_to='media')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('about', models.CharField(max_length=1023)),
                ('recipy', models.ManyToManyField(to='cookbook.Recipy')),
            ],
        ),
    ]
