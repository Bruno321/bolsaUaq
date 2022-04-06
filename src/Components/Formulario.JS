import React, { useState } from "react";

const Formulario = (props) => {
  const [texto, setTexto] = useState("");

  return (
    <form style={styles.form}>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder={props.placeHolder} name="name" style={styles.input}/>
    </form>
  );
};

export default Formulario;
