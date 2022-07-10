import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import NavBar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>
        <ItemListContainer gretting={"Hola Bienvenido a Perfumes Rosalía"}/>
    </>
  )
}

export default App
