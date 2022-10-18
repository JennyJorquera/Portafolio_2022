from django.db import models
  
class Usuario(models.Model):
    Rut=models.CharField(max_length=150)
    Password=models.CharField(max_length=500)
    nombre=models.CharField(max_length=500,default="None",null=True)
    rol=models.IntegerField(default=False)
  
    # string representation of the class
    def __str__(self):
  
        #it will return the title
        return self.Rut 
class Pedido(models.Model):
    id = models.BigAutoField(primary_key=True)
    fecha=models.DateField()
    direccion=models.CharField(max_length=500)
  
    # string representation of the class
    def __str__(self):
  
        #it will return the title
        return self.id      
           
class Fruta(models.Model):
    id = models.BigAutoField(primary_key=True)
    nombre=models.CharField(max_length=500)
    cantidad=models.IntegerField(default=False)
    pedido_id = models.ForeignKey(Pedido, on_delete=models.CASCADE,null=True)
    # reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE)
    # string representation of the class
    def __str__(self):
  
        #it will return the title
        return self.id 


