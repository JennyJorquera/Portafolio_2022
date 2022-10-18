from django.urls import path,include 
from frutas import views 
from django.contrib import admin
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/usuarios/',views.UsuarioView ,name="usuarios"),
    path('logear/',views.login ,name="login"),
    path('cliente/crearpedido',views.crear_pedido ,name="crear pedido"),
    path('cliente/crearproducto',views.crear_producto ,name="crear pedido"),
    path('cliente/actualizarnombre',views.actualizar_nombre_fruta ,name="actualizar_fruta"),
    path('cliente/eliminarproducto',views.borrar_producto ,name="borrar pedido"),
    path('api/frutas',views.frutas ,name="pedidos"),
    path('api/pedidos',views.pedidos ,name="pedidos"),
    path('api/frutassegunid',views.frutas_por_id_pedido ,name="frutasporidpedido"),
]

