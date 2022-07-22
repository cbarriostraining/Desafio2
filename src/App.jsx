import { useState, useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {

  const [stock,setStock]=useState(10);
  const [initialCount,setInitialCount]=useState(1);


    const addCartHandler=()=>{
    console.log("Agregar al carrito");
    };

  return (
    <>
        <NavBar/>
        <ItemListContainer 
        gretting={"Hola Bienvenido a Perfumes Rosalía"} 
        />
        <ItemCount
        initialCount={initialCount}
        stock={stock}
        addCartHandler={addCartHandler}
        />
    </>
  )
}

export default App

