import React, { useState } from "react";
import Styles from "../Styles/FormularioUsuario.module.css";

function FormularioUsuario() {
  const [name, setname] = useState(""); //Queda vacio el useState porque lo vamos a llenar con el texto que se ingrese en el input
  const [mensaje, setmensaje] = useState(""); //se ingresa otro estado para poder manejar el envio del mensaje
  const manejarCambio = (evento) => {
    //Actualiza el estado cada vez que el usuario escribe en el campo de texto
    setname(evento.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setmensaje(`Hola ${name} espero que tengas un lindo Dia!!`); //se escribe el mensaje que quiere que se muestre
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <form onSubmit={manejarEnvio}>
          <label className={Styles.label}>
            Ingresa tu nombre:
            <input
              className={Styles.imput}
              type="text"
              value={name}
              onChange={manejarCambio}
            />
          </label>
          <button className={Styles.boton} type="submit">
            Enviar
          </button>
        </form>
      </div>
      <h1 className={Styles.mensaje}>{mensaje}</h1>
    </div>
  );
  // OnSubmit recoje los datos del formulario y los lleva a manejarEnvio
  //Inpi+ut es una caj de texto en la cual se escribe el texto
  //se llama en un h1 al mensaje
}
export default FormularioUsuario;
