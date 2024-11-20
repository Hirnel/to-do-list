import React, { useState } from "react";
import ToDoItem from './ToDoItem'
import index from "./index"
import data from "./data";


const ToDoList = () => {

  const [items, setItems] = useState(data)
  const [error, setError] = useState(""); // Estado para el mensaje de error. Ahora puedo añadir error a las lineas que me puedan fallar y ya hacer un tipo de regex (aprox?)
  const [values, setValues] = useState({  // Values es el estado del formulario
    title: '',
  });
  const [showMessage, setShowMessage] = useState(false);
  // const [timeOut, setTimeOut] = useState(null); //esto lo voy a usar para el de los 20segs

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  //Recuerda que e es Evento
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title.trim().length < 4) { //El .trim lo uso para que no me pongan un texto vacio entre " "
      alert('Minimo introduce 4 caracteres');
      return;
    }

    console.log(values)
    addItem(values)
    setValues({ title: '' });

    // setShowMessage(true);
    // console.log(showMessage);
    // setTimeOut(() => {
    //   console.log("hola");
    //   setShowMessage(false);
    // }, 3000);


    // Muestra el mensaje
    setShowMessage(true);

    setTimeout(() => { //Recuerda que setTimeout es con la o minuscula, no es setTimeOut.
      setShowMessage(false); 
      console.log("Mensaje ocultado después de 3 segundos");
    }, 3000);

  }


  const renderItems = () => {
    return items.map((item, i) => <ToDoItem data={item} key={i} remove={() => removeItem(i)} />) // Se envia por props estas variables
  }
  const addItem = (new_item) => {
    setItems([...items, new_item]) // Puedo cambiar el orden en el que pinta los items cambiando el orden en esta linea, en este caso lo pinta al final
  }
  const removeAllItem = () => {
    setItems([]) // actualiza el estado items
  }
  const resetItems = () => {
    setItems(data) // cargar con datos iniciales de nuevo
  }

  const removeItem = (i) => {
    const remainingItems = items.filter((item, index) => index !== i)
    setItems(remainingItems)
    alert(`¿Seguro que quieres borrar? ${items[i].title} `)
    setItems(remainingItems);
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Anota en la lista:</label>
        <input
          type="text"
          name="title"
          value={values.title} //Ahora usamos values.title
          onChange={handleChange}
          placeholder="Apunta que te leo"
        />
        {/* agregar un ternario para si hay texto en el input agregar el button + */}
        <button type="submit">➕</button> 
      </form>
      {showMessage && <p style={{ color: 'green' }}>¡Tarea añadida!</p>}
      {renderItems()}

      <button onClick={removeAllItem}>❌</button>
      <button onClick={resetItems}>♻️</button>
    </article>
  );


};

export default ToDoList;
