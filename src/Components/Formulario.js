import React, { useState } from "react";

const Formulario = (props) => {
  const [texto, setTexto] = useState("");

  return (
    <form style={styles.form}>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder={props.placeHolder} name="name" style={styles.input}/>
    </form>
  );
};

const styles = {
  input:{
    width: '40%',
    padding: '.7%',
    marginTop: '2%',
    marginLeft:' 5%',
    borderRadius: '5px',
    border: '1.8px solid rgb(159, 165, 168)',

    "&:focus": {
      border: '2px solid',
      borderColor:'rgb(22, 117, 172)',
      outline:'0 none',
    }
  }
}

export default Formulario;
