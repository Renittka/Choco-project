# Generated by Django 3.0.5 on 2020-04-16 15:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=300)),
                ('email', models.CharField(max_length=300)),
                ('phone_number', models.CharField(max_length=300)),
                ('product_number', models.IntegerField()),
                ('total_cost', models.FloatField()),
                ('comments', models.TextField(default='')),
                ('product', models.ForeignKey(default='', editable=False, on_delete=django.db.models.deletion.CASCADE, to='api.Product')),
            ],
        ),
    ]
