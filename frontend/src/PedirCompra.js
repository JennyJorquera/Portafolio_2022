import React from "react";
import App from "./ruter";

import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import LogoCiberFruit from "./icons/LogoCiberFruit.png";
import poweroff from "./icons/poweroff.png";
import lupa from "./icons/lupaico.png";
import crossico from "./icons/crossico.png";
import trashico from "./icons/trashico.png";
import addtask from "./icons/addtaskico.png";
import pear from "./icons/pear.png";
import orange from "./icons/orange.png";
import peach from "./icons/peach.png";
import mango from "./icons/mango.png";
import strawberry from "./icons/strawberry.png";
import grape from "./icons/grape.png";
import banana from "./icons/banana.png";
import kiwi from "./icons/kiwi.png";
import apple from "./icons/apple.png";
import blackberry from "./icons/berry.png";
import plum from "./icons/plum.png";
import blueberry from "./icons/blueberry.png";
import melon from "./icons/melon.png";
import melon2 from "./icons/melon2.png";
import lemon from "./icons/lemon.png";
import pineapple from "./icons/pineapple.png";
import watermelon from "./icons/watermelon.png";


export default class PedirCompra extends React.Component {
  state = {
    tareas: [],
    usuarios: [],
    nombre: "",
  };

  componentDidMount() {
    this.cargar_pagina();
  }
 



  ira_listapedidos = () => {
    window.location.href = "/mispedidos";
  };





  anadirproducto = () => {
    var nombre = document.getElementById("input_nombre").value;
    var cantidad = document.getElementById("input_cantidad").value;
    axios
      .post(`http://localhost:8000/cliente/crearproducto`, {
        nombre: nombre,
        cantidad: cantidad,
        pedido_id:null
      })
      .then((res) => {
        this.cargar_pagina();
        document.getElementById("input_cantidad").value="";
        
      });
  };

  Crear_pedido = () => {
    var fecha = document.getElementById("input_date").value;
    var direccion = document.getElementById("input_direccion").value;
    axios
      .post(`http://localhost:8000/cliente/crearpedido`, {
        fecha: fecha,
        direccion: direccion
      })
      .then((res) => {
        this.cargar_pagina();

        document.getElementById("input_date").value="";
     document.getElementById("input_direccion").value="";
      });
  };

  eliminar_producto = (id) => {
   
    axios
      .delete(`http://localhost:8000/cliente/eliminarproducto`, {
        data: { id_producto: id },
      })
      .then((res) => {
        this.cargar_pagina();
      });
  };

  actualizar_producto = (id) => {
   
    
    var nombre = document.getElementById("combonombre" + id).value;
    axios
      .patch(`http://localhost:8000/cliente/actualizarnombre`, {
        id: id,
        nombre: nombre,
      })
      .then((res) => {
        this.cargar_pagina();
      });
  };



  cargar_pagina = () => {
    axios.get(`http://localhost:8000/api/frutas`).then((res) => {
      const pedidos = res.data.datos;
      var cont = [];
      var nombre1 = sessionStorage.getItem("nombre");
      cont.push(
        <>
          <div class=" cajauser rounded-pill">
            <img
              class="rounded-pill"
              height={40}
              width={40}
              src={LogoCiberFruit}
            ></img>

            <h6 class="titulo_bienvenida">bienvenid@ :{nombre1}</h6>
            
          </div>
         
          <br></br>
          <br></br>
          <br></br>
          <div id="caja" class="container caja alto70">
            <ul>
              <h1 class="titulo">Hacer pedido</h1>
              <br></br>
              <div class="row">
                <div class="col contener">
                  <select class="form-control" id="input_nombre">
                    <option value={"Manzanas"}>Manzanas</option>
                    <option value={"Peras"}>Peras</option>
                    <option value={"Naranjas"}>Naranjas</option>
                    <option value={"Platanos"}>Platanos</option>
                    <option value={"Uvas"}>Uvas</option>
                    <option value={"Moras"}>Moras</option>
                    <option value={"Frutillas"}>Frutillas</option>
                    <option value={"Duraznos"}>Duraznos</option>
                    <option value={"Mango"}>Mango</option>
                    <option value={"Kiwis"}>Kiwis</option>
                    <option value={"Sandia"}>Sandia</option>
                    <option value={"Melon"}>Melon</option>
                    <option value={"Melon C."}>Melon C.</option>
                    <option value={"Ciruelas"}>Ciruelas</option>
                    <option value={"Arandanos"}>Arandanos</option>
                    <option value={"Piñas"}>Piñas</option>
                    <option value={"Limones"}>Limones</option>
                  
                  </select>
                 
                  <button
                    hidden={true}
                    id="btnequis"
                    type="button"
                    class="botoncerrarslide  rounded-circle fontblanco "
                  >
                    <img height={23} width={23} src={crossico}></img>
                  </button>
                </div>
                <div class="col">
                    <button class="btn btnaddpedido fontblanco"
                      onClick={this.ira_listapedidos.bind()}>
                      ver mis pedidos
                    </button>
                  </div>
              </div>
              <br></br>
              <div class="row">
                
                <div class="col contener">
                  <input
                    type="number"
                    class="form-control inputregistro marginiz input_cantidad"
                    id="input_cantidad"
                    min="1"
                    max="1000"
                    aria-describedby="emailHelp"
                    placeholder="Cantidad (kgs)"
                    name="nombre"
                  ></input>
                </div>
                <div class="col">
                  <button
                    id="btnbuscar"
                    type="button"
                    class="btn btnaddpedido "
                    onClick={this.anadirproducto.bind()}
                  >
                    <img height={23} src={addtask}></img>
                  </button>
                </div>
              </div>
              <hr className="lineahr"></hr>
              <br></br>
              {pedidos.length != 0 ? (     <><div class="row">
              <div class="col">
                  
                </div>
                <div class="col">
                  <h3 class="titulo">Nombre</h3>
                </div>
                <div class="col">
                  <h3 class="titulo">Cantidad</h3>
                </div>
                <div class="col">
                  <h3 class="titulo">Eliminar</h3>
                </div>
              </div><div class="elscrol col">
                  {pedidos.length != 0 ? (
                    pedidos.map((pedido, i) => (
                      <>
                        <div  class="row  colu2">
                        <div class="col">
                           <img height={40} width={40} src={
              pedido.nombre.toLowerCase()=="peras"&& (pear)||
              pedido.nombre.toLowerCase()=="naranjas"&& (orange)||
              pedido.nombre.toLowerCase()=="kiwis"&& (kiwi)||
              pedido.nombre.toLowerCase()=="manzanas"&& (apple)||
              pedido.nombre.toLowerCase()=="uvas"&& (grape)||
              pedido.nombre.toLowerCase()=="moras"&& (blackberry)||
              pedido.nombre.toLowerCase()=="frutillas"&& (strawberry)||
              pedido.nombre.toLowerCase()=="duraznos"&& (peach)||
              pedido.nombre.toLowerCase()=="platanos"&& (banana)||
              pedido.nombre.toLowerCase()=="arandanos"&& (blueberry)||
              pedido.nombre.toLowerCase()=="sandia"&& (watermelon)||
              pedido.nombre.toLowerCase()=="melon"&& (melon)||
              pedido.nombre.toLowerCase()=="melon c."&& (melon2)||
              pedido.nombre.toLowerCase()=="piñas"&& (pineapple)||
              pedido.nombre.toLowerCase()=="ciruelas"&& (plum)||
              pedido.nombre.toLowerCase()=="limones"&& (lemon)||
              pedido.nombre.toLowerCase()=="mango"&& (mango)} ></img>
                          </div>
                          <div class="col">
                          <select id={"combonombre" + pedido.id}   onChange={this.actualizar_producto.bind(
                                this,
                                pedido.id
                              )} class="form-control input_lista" >
                    <option selected={pedido.nombre =="Manzanas" ? true :false} value={"Manzanas"}>Manzanas</option>
                    <option selected={pedido.nombre =="Peras" ? true :false} value={"Peras"}>Peras</option>
                    <option selected={pedido.nombre =="Naranjas" ? true :false} value={"Naranjas"}>Naranjas</option>
                    <option selected={pedido.nombre =="Platanos" ? true :false} value={"Platanos"}>Platanos</option>
                    <option selected={pedido.nombre =="Uvas" ? true :false} value={"Uvas"}>Uvas</option>
                    <option selected={pedido.nombre =="Moras" ? true :false} value={"Moras"}>Moras</option>
                    <option selected={pedido.nombre =="Frutillas" ? true :false} value={"Frutillas"}>Frutillas</option>
                    <option selected={pedido.nombre =="Duraznos" ? true :false} value={"Duraznos"}>Duraznos</option>
                    <option selected={pedido.nombre =="Mango" ? true :false} value={"Mango"}>Mango</option>
                    <option selected={pedido.nombre =="Kiwis" ? true :false} value={"Kiwis"}>Kiwis</option>
                    <option selected={pedido.nombre =="Sandia" ? true :false}  value={"Sandia"}>Sandia</option>
                    <option selected={pedido.nombre =="Melon" ? true :false}  value={"Melon"}>Melon</option>
                    <option selected={pedido.nombre =="Melon C." ? true :false}  value={"Melon C."}>Melon C.</option>
                    <option selected={pedido.nombre =="Ciruelas" ? true :false}  value={"Ciruelas"}>Ciruelas</option>
                    <option selected={pedido.nombre =="Arandanos" ? true :false}  value={"Arandanos"}>Arandanos</option>
                    <option selected={pedido.nombre =="Piñas" ? true :false}  value={"Piñas"}>Piñas</option>
                    <option selected={pedido.nombre =="Limones" ? true :false}  value={"Limones"}>Limones</option>
                  
                  </select>
                          </div>
                          <div class="col">
                            <input
                              type="number"
                              min="1"
                              class="form-control  input_lista"
                              aria-describedby="emailHelp"
                              placeholder={pedido.cantidad}
                            ></input>
                          </div>
                          <div class="col">
                            <button
                              id="btneliminar"
                              type="button"
                              class="btn btn-danger "
                              onClick={this.eliminar_producto.bind(
                                this,
                                pedido.id
                              )}
                            >
                              <img
                                height={23}
                                src={trashico}
                              ></img>
                            </button>
                          </div>
                        </div>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div><br></br><div class="row wid10">
                  <div class="col">
                    <input
                      type="email"
                      class="form-control"
                      id="input_direccion"
                      aria-describedby="emailHelp"
                      placeholder="Direccion"
                    ></input>
                  </div>
                  <div class="col">
                    <input
                      type="date"
                      
                      id="input_date"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>

                  <div class="col">
                    <button class="btn btnaddpedido fontblanco"
                      onClick={this.Crear_pedido.bind()}>
                      Crear pedido
                    </button>
                  </div>
                  
                </div></> ) : (
                  <></>
                )}
         
            </ul>
            <br></br>
          </div>
        </>
      );

      this.setState({ tareas: cont });
    });
  };

  render() {
    return this.state.tareas;
  }
}
