import React from "react";
import axios from "axios";

export default class Pedidosrecibidos extends React.Component {
    state = {
    treas: [],
    usuarios: [],
    nombre: "",
    };

    componentDidMount() {
    this.cargar_pagina();
    }

    cargar_pagina = () => {
        axios.get(`http://localhost:8000/api/pedidos`).then((res) => {
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
                  src={userico}
                ></img>
    
                <h6 class="titulo_bienvenida">bienvenid@ :{nombre1}</h6>
                
              </div>
             
              <br></br>
              <br></br>
              <br></br>
              <dialog id="modal" class="caja dialogdetalle" >
              {this.state.listadofrutas}
                <button class="btn btnaddpedido fontblanco"  onClick={this.cerrarmodal.bind()} >Cerrar</button>
              </dialog>
              <div id="caja" class="container caja alto70">
                <ul>
                  <h1 class="titulo">Lista de mis pedidos</h1>
                  <br></br>
                 
                  <div class="elscrol elscrol2">
                    {pedidos.length != 0 ? (
                      pedidos.map((pedido, i) => (
                        <>
                          <div class="row  colu3">
                           
                          <div class="col">
                            <h6>{pedido.id}</h6>
                            </div><div class="col">
                            <h6>{pedido.direccion}</h6>
                            </div>
                            <div class="col">
                            <h6>{pedido.fecha}</h6>
                            </div>
                            <div class="col">
                                <button
                                  id="btneliminar"
                                  type="button"
                                  class="btn btn-light "
                                  onClick={this.verdetalle.bind(this,pedido.id)}
                                >
                                  <img
                                    height={23}
                                    src={eyeico}
                                  ></img>
                                </button>
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
    


