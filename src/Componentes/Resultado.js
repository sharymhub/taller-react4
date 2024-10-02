import React from "react";
import Styles from '../Styles/Formulario.module.css'

function Resultado({ numero }) {
  return (
    <div className={Styles.cardR}>
      <h2>El numero es:</h2>
      <h3 className={Styles.numero}>{numero}</h3>
    </div>
  );
}
export default Resultado; 