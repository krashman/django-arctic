# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-11-21 11:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_auto_20171113_1527'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='order',
            field=models.IntegerField(blank=True, null=True, verbose_name='Order'),
        ),
    ]
