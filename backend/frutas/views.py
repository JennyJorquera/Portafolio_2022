from django.shortcuts import render

# import view sets from the REST framework
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
# import the TodoSerializer from the serializer file
from .serializers import PedidoSerializer, UsuarioSerializer,FrutaSerializer
  
# import the Todo model from the models file
from .models import Fruta, Pedido, Usuario
  
# create a class for the Todo model viewsets
class UsuarioView(viewsets.ModelViewSet):
  
    # create a sereializer class and 
    # assign it to the TodoSerializer class
    serializer_class = UsuarioSerializer
  
    # define a variable and populate it 
    # with the Todo list objects
    queryset = Usuario.objects.all()

@ api_view(['POST'])
def login(request):
    if request.method == 'POST':
        rut= request.data.get('usu_rut')
        rut = request.data["usu_rut"]
        rut = rut.replace("-","")
        rut = rut.replace(".","")
        rut = rut.lower()
        
        contraseña= request.data.get('usu_contraseña')
        usu = Usuario.objects.filter(Rut= rut).first()
        if usu!= None:
            if usu.Password ==contraseña:
                return Response({'cargo' :usu.rol,'estado':1,'rut':usu.Rut,"nombre":usu.nombre})
            else:
                return Response({'cargo' :usu.rol,'estado':2})
        else:
            return Response({'estado':3}) 


@ api_view(['POST'])
def crear_producto(request):
    if request.method == 'POST':
        serializer = FrutaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=200)
        else:   
            print(serializer.errors)
 
            return Response(status=400) 

@ api_view(['POST'])
def crear_pedido(request):
    if request.method == 'POST':
        serializer = PedidoSerializer(data=request.data)
        frutas= Fruta.objects.all().filter(pedido_id = None)
        if serializer.is_valid():
            serializer.save()
            el_id = serializer.data["id"]
            el_pedido= Pedido.objects.all().filter(id= el_id).first()
            for d in frutas:
                d.pedido_id= el_pedido
                d.save()
                frutasaeliminar= Fruta.objects.all().filter(pedido_id=None)
                frutasaeliminar.delete()
            return Response(status=200)

        else:   
            print(serializer.errors)
 
            return Response(status=400)             

@ api_view(['GET'])
def pedidos(request):
    if request.method == 'GET':
        respuesta = {}
        
        queryset = Pedido.objects.all().values("id","direccion","fecha").order_by('id')
        respuesta["datos"]=queryset
        return Response(respuesta)

@ api_view(['GET'])
def frutas(request):
    if request.method == 'GET':
        respuesta = {}
        
        queryset = Fruta.objects.all().values("id","nombre","cantidad").order_by('id').filter(pedido_id=None)
        respuesta["datos"]=queryset
        return Response(respuesta)



@ api_view(['PATCH'])
def frutas_por_id_pedido(request):
    if request.method == 'PATCH':
        respuesta = {}
        elid= request.data.get('id')
        queryset = Fruta.objects.all().values("id","nombre","cantidad").order_by('id').filter(pedido_id=elid)
        respuesta["datos"]=queryset
        return Response(respuesta)

@ api_view(['PATCH'])
def actualizar_nombre_fruta(request):
    if request.method == 'PATCH':
        elid= request.data.get('id')
        nombre= request.data.get('nombre')
        

        fruit= Fruta.objects.all().filter(id= elid).first()
       
        
            

        serializer = FrutaSerializer(fruit, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=200) 

        else:
             return Response(status=400) 

@ api_view(['GET'])
def pedidos_todos(request):
    if request.method == 'GET':
        respuesta = {}
        
        queryset = Fruta.objects.all().values("id","nombre","cantidad").order_by('id')
        respuesta["datos"]=queryset
        return Response(respuesta)           


@ api_view(['DELETE'])
def borrar_producto(request):
    if request.method == 'DELETE':
        elid= request.data.get('id_producto')
       
        ped= Fruta.objects.filter(id = elid).first()
        ped.delete()
        return Response(status=200)
    else:
        return Response(status=400)                                    