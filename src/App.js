import React, { useState } from 'react';
import ButtonClick from "../src/Componentes/ButtonClick";
import FormularioUsuario from "./Componentes/FormularioUsuario";
import Resultado from './Componentes/Resultado';
import Formulario from './Formulario';
import Styles from './Styles/Formulario.module.css'

// Ejercicio 1: Manejo de eventos 
function App() {
  return (
    <div>
      <ButtonClick />
    </div>
  );
}
export default App


// Ejercicio 2: Creación y gestión de formularios 
function App2() {
  return (
    <div>
      <FormularioUsuario />
    </div>
  );
}
//export default App2;

function App3() {
  const [numero, setnumero] = useState('');

  const manejarCambio = (nuevonumero) => {
    setnumero(nuevonumero);
  };

  return (
    <div className={Styles.title}>
      <h1>App Lifting state-up</h1>
      <div className={Styles.container}>
      <Formulario manejarCambio={manejarCambio} />
      <Resultado numero={numero} />
      </div>
    </div>
  );
}
//export default App3; 