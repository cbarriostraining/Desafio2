import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import NavBar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  const [count, setCount] = useState(1)
const [stock,setStock]=useState(10);

  const addCartHandler=()=>{
    console.log("Agregar al carrito");

    }
    const removeProductHandler =()=>{
     if(count>1)setCount(count-1);
    }
    const addProductHandler =()=>{
     if(count<stock)setCount(count+1);
    }
    const productQuantityChangeHandler=()=>{

      console.log("Se cambio la cantidad directamente");

    }



  return (
    <>
        <NavBar/>
        <ItemListContainer gretting={"Hola Bienvenido a Perfumes Rosalía"}/>
        <ItemCount
        addCartHandler={addCartHandler}
        removeProductHandler={removeProductHandler}
        addProductHandler={addProductHandler}
        count={count}
        productQuantityChangeHandler={productQuantityChangeHandler}
        />
    </>
  )
}

export default App
