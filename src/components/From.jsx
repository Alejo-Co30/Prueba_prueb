import { useState } from "react";


function Form() {
  const [selectedValue, setSelectedValue] = useState("");
  const [errorSelect, setErrorSelect] = useState("");

  function handleSubtmit(e) {
    e.preventDefault();

    if (selectedValue === "") {
      alert("No elegiste nada");
      return;
    }

  }

  function onChangeSelect(event) {
    setSelectedValue(event.target.value);
    if (event.target.value) {
      const name = this.event.target.value.lengt;
      // eslint-disable-next-line no-unused-expressions
      name > 3;
      setErrorSelect({selectedValue});
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta");
    }
    
  }

  return (
    <div >
      <h2>Formulario</h2>
        <form onSubmit={handleSubtmit}>
        <label >Cual es tu nombre</label><br></br>
          <input type="text" onChange={onChangeSelect} value={selectedValue}
          required minlength="3"/><br></br>
        <label required minlength="6" 
        >Cual es tu apellido</label><br></br>
        <input type="text"/><br></br>
        <input type="submit" value="Enviar"
          disabled={Boolean(errorSelect)}
        />
      </form>
    </div>
  );
}

export default Form;

