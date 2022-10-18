import React from "react";
import App from "./ruter";

import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import userico from "./icons/userico2.png";
import poweroff from "./icons/poweroff.png";
import lupa from "./icons/lupaico.png";
import crossico from "./icons/crossico.png";
import trashico from "./icons/trashico.png";
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


export default class Detalle extends React.Component {
  state = {
    tareas: [],
    usuarios: [],
    nombre: "",
  };

  componentDidMount() {
    this.cargar_pagina();
  }
 







  
  eliminar_producto = (id) => {
   
    axios
      .delete(`http://localhost:8000/cliente/eliminarproducto`, {
        data: { id_producto: id },
      })
      .then((res) => {
        this.cargar_pagina();
      });
  };



  cargar_pagina = () => {
   var elid= sessionStorage.getItem("id_pedido");







    axios.patch(`http://localhost:8000/api/frutassegunid`, {
      id: elid
      
    })
    .then((res) => {
      const pedidos = res.data.datos;
      var cont = [];
      var nombre1 = sessionStorage.getItem("nombre");
      cont.push(
        <>
          
         
         

            <ul>
              <h1 class="titulo">Detalle</h1>
              <br></br>
              <h6>Estado: En espera</h6>
              <div class="elscrol elscrol2">
                {pedidos.length != 0 ? (
                  pedidos.map((fruta, i) => (
                    <>
                      <div  class="row  colu3">
                      <div class="col">
                        <img  height={40}
              width={40} src={
                fruta.nombre.toLowerCase()=="peras"&& (pear)||
                fruta.nombre.toLowerCase()=="naranjas"&& (orange)||
                fruta.nombre.toLowerCase()=="kiwis"&& (kiwi)||
                fruta.nombre.toLowerCase()=="manzanas"&& (apple)||
                fruta.nombre.toLowerCase()=="uvas"&& (grape)||
                fruta.nombre.toLowerCase()=="moras"&& (blackberry)||
                fruta.nombre.toLowerCase()=="frutillas"&& (strawberry)||
                fruta.nombre.toLowerCase()=="duraznos"&& (peach)||
                fruta.nombre.toLowerCase()=="platanos"&& (banana)||
                fruta.nombre.toLowerCase()=="arandanos"&& (blueberry)||
                fruta.nombre.toLowerCase()=="sandia"&& (watermelon)||
                fruta.nombre.toLowerCase()=="melon"&& (melon)||
                fruta.nombre.toLowerCase()=="melon c."&& (melon2)||
                fruta.nombre.toLowerCase()=="piñas"&& (pineapple)||
                fruta.nombre.toLowerCase()=="ciruelas"&& (plum)||
                fruta.nombre.toLowerCase()=="limones"&& (lemon)||
                fruta.nombre.toLowerCase()=="mango"&& (mango)} ></img>
                        </div>
                      <div class="col">
                        <h4>{fruta.nombre}</h4>
                        </div>
                        <div class="col">
                        <h4 class="titulo">{fruta.cantidad} kgs</h4>
                        </div>
                        
                        
                      </div>
                    </>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <br></br>
      
            </ul>
            <br></br>
         
        </>
      );

      this.setState({ tareas: cont });
    });
  };

  render() {
    return this.state.tareas;
  }
}
