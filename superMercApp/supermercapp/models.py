from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=150, null=False, blank=False)
    precio = models.FloatField(null=False, blank=False)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre
