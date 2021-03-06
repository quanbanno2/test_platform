# Generated by Django 2.0.6 on 2018-07-30 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100, verbose_name='名称')),
                ('describe', models.TextField(default='', verbose_name='描述')),
                ('status', models.BooleanField(default=True, verbose_name='状态：')),
                ('create_time', models.DateTimeField(auto_now=True, verbose_name='创建时间')),
            ],
        ),
    ]
