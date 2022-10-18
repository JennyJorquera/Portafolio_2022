import React from "react";
import axios from "axios";
import secureicon from "./icons/secureicon.png";
import userico from "./icons/userloginico.png";
import frutita from "./icons/durazno.png";
import LogoCiberFruit from "./icons/LogoCiberFruit.png";

export default class Login extends React.Component {
  state = {
    tareas: [],
  };

  render() {
    function redirigir() {
      var rut = document.getElementById("input_nombre").value;
      var pass = document.getElementById("input_pass").value;

      console.log(rut);
      axios
        .post(`http://localhost:8000/logear/`, {
          usu_rut: rut,
          usu_contraseña: pass,
        })
        .then((res) => {
          console.log(res);

          if (res.data.estado != 3) {
            if (res.data.estado == 1) {
              document.getElementById("texto_error").innerHTML = "";
              if (res.data.cargo == 1) {
                sessionStorage.setItem("rut", res.data.rut);
                sessionStorage.setItem("nombre", res.data.nombre);
                sessionStorage.setItem("estado_sesion", 1);
                sessionStorage.setItem("busquedatarea", "");
                window.location.href = "/Cliente";
              }
              if (res.data.cargo == 2) {
                sessionStorage.setItem("rut", res.data.rut);
                sessionStorage.setItem("nombre", res.data.nombre);
                sessionStorage.setItem("usu_id", res.data.usu_id);
                sessionStorage.setItem("estado_sesion", 1);
                sessionStorage.setItem("busquedatarea", "");
                window.location.href = "/tablaadmin";
              }
            } else {
              if (document.getElementById("input_pass").value == "") {
                document.getElementById("texto_error").innerHTML =
                  "Ingrese una contraseña";
              }
              if (document.getElementById("input_pass").value != "") {
                document.getElementById("texto_error").innerHTML =
                  "Contraseña incorrecta";
              }
            }
          } else {
            document.getElementById("texto_error").innerHTML =
              "El usuario no existe";
          }
        });
    }

    return (
      <>
        <br></br>
        <br></br>
        
        <div id="caja" class="container caja rounded rounded-lg">
          <br></br>
          <br></br>
     
          <div class="spantitulo container" id="basic-addon1">
                <img height={50} width={100} src={LogoCiberFruit} />
                <h3 class="titulo" id="titulo">
            Cyber fruit
          </h3>
              </div>
         
          <br></br>

          <div class="container input-group mb-3 inputico">
            <div class="input-group-prepend">
              <span class="input-group-text spa1" id="basic-addon1">
                <img height="25" width="25" src={userico} />
              </span>
            </div>
            <input
              id="input_nombre"
              type="text"
              class="form-control inputlogin"
              placeholder="Rut"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <br></br>

          <div class="container input-group mb-3 inputico">
            <div class="input-group-prepend">
              <span class="input-group-text spa1" id="basic-addon1">
                <img height="25" width="25" src={secureicon} />
              </span>
            </div>
            <input
              id="input_pass"
              type="password"
              class="form-control inputlogin"
              placeholder="Contraseña"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <br></br>
          <br></br>
          <p id="texto_error"> </p>
          <button
            id="botonsub"
            type="submit"
            class="btn btn-danger botonsub"
            onClick={redirigir.bind()}
          >
            <b>Ingresar</b>
          </button>
          
          <br></br>
          <br></br>
          <br></br>
        </div>
      </>
    );
  }
}
