import React from "react";
import styles from '../Styles/Button.module.css'
import imageflecha from '../Assets/flecha.png'
function ButtonClick() {
  const manejarclick = () => {
    alert("Holaa, No olvides nunca sonreír!!");
  };
  return (
    <div className={styles.card}>
      <h1>Haz click en el boton</h1>
      <img className= {styles.image} src={imageflecha} alt="flecha"/>
      <button className={styles.button} onClick={manejarclick}>Haz click aquí</button>
    </div>
  );
}
export default ButtonClick;
