# import sereliazers from the REST framework
from rest_framework import serializers
  
# import the todo data model
from .models import Pedido, Usuario,Fruta
  
# create a sereliazer class

class UsuarioSerializer(serializers.ModelSerializer):
  
    # create a meta class
    class Meta:
        model = Usuario
        fields = ('Rut','Password','rol')    

class FrutaSerializer(serializers.ModelSerializer):
  
    # create a meta class
    class Meta:
        model = Fruta
        fields = ('id','nombre','cantidad','pedido_id')   
class PedidoSerializer(serializers.ModelSerializer):
  
    # create a meta class
    class Meta:
        model = Pedido
        fields = ('id','fecha','direccion')                    