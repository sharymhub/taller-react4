import React from "react";
import Styles from '../src/Styles/Formulario.module.css'

function Formulario({ manejarCambio }) { //esta el propiedad que permitira compartir el numero recibido con el componente padre 
    
    const manejarSubmit = (e) => { //funcion que será llamada cuando el formulario cuando se cambie el valor en el input
        e.preventDefault(); //permite que la pagina no se recargue
        const valor = e.target.value; // Obtener el valor directamente del campo de texto
        manejarCambio(valor); // Envía el valor al componente padre
      };
    
      return (  
        <div className={Styles.card}>
          <h2 className={Styles.titulo}>Formulario</h2>
          <form>
            <input className={Styles.imput}
              type="number"
              name="numero"
              placeholder="Escribe un número"
              onChange={manejarSubmit} //actualiza el valor en cada cambio
            />
          </form>
        </div>
      );
}
export default Formulario;
