import { useState, useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Loader from './components/Loader/Loader';


function App() {
  const [count, setCount] = useState(1);
  const [stock,setStock]=useState(10);
  const [products,SetProducts]=useState([]);
  const [loading,SetLoading] = useState(true);


  const catalogproducts=[
    {id:'1', category:'Perfumes',name:'Guess Spray for Women', price:443, image:'https://m.media-amazon.com/images/I/51GvU7DqJfL._AC_SX522_.jpg'},
    {id:'2', category:'Perfumes',name:'Paco Rabanne Ultraviolet Spray for Women', price:1068, image:'https://m.media-amazon.com/images/I/41-fTcVhIwL._AC_.jpg'},
    {id:'3', category:'Perfumes',name:'Ariana Grande Ari Spray', price:1029, image:'https://m.media-amazon.com/images/I/81Qu0Kq05NL._AC_SX522_.jpg'},
    {id:'4', category:'Perfumes',name:'Cacharel Amor Amor Spray', price:1061, image:'https://images-na.ssl-images-amazon.com/images/I/61agGhEJMbL.__AC_SX300_SY300_QL70_ML2_.jpg'},
    {id:'5', category:'Perfumes',name:'Perry Ellis Love Spray', price:706, image:'https://m.media-amazon.com/images/I/81g3iOd3nsL._AC_SX522_.jpg'},
    {id:'6', category:'Perfumes',name:'Hugo Boss El aroma ', price:1393, image:'https://m.media-amazon.com/images/I/71ChKZ+jD5L._AC_SX522_.jpg'},
    {id:'7', category:'Perfumes',name:'Perfume 212 de Carolina Herrera ', price:1399, image:'https://m.media-amazon.com/images/I/51JSHNRabpS._AC_SX522_.jpg'},
    {id:'8', category:'Perfumes',name:'ésika Vibranza Perfume de Mujer aroma oriental dulce', price:284, image:'https://m.media-amazon.com/images/I/61BgYr3efpS._AC_SX679_.jpg'},
    {id:'9', category:'Perfumes',name:'Emporio Armani ', price:1789, image:'https://m.media-amazon.com/images/I/71SyAuqbLvL._AC_SY879_.jpg'},
];


useEffect(() => {
 getProducts()
  .then(productData=>{
    console.log("Duda por que esto lo hace 2 Veces , si en la dependencia se indica que solo lo haga en el montaje?");
    console.log(productData);
    SetProducts(productData);})
  .catch(error=>console.log(error))
  .finally(()=>{  SetLoading(false);});


}, []);


    const addCartHandler=()=>{
    console.log("Agregar al carrito");

    };
    const removeProductHandler =()=>{
     if(count>1)setCount(count-1);
    };
    const addProductHandler =()=>{
     if(count<stock)setCount(count+1);
    };
    const productQuantityChangeHandler=()=>{

      console.log("Se cambio la cantidad directamente");

    };
const getProducts = () =>{
      return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(catalogproducts);
          },3000);
        });} ;




  return (
    <>
        <NavBar/>
        {loading ? <Loader/>: 

        <>
        <ItemListContainer 
        gretting={"Hola Bienvenido a Perfumes Rosalía"} 
        productCatalog={products}
        />

        <ItemCount
        addCartHandler={addCartHandler}
        removeProductHandler={removeProductHandler}
        addProductHandler={addProductHandler}
        count={count}
        productQuantityChangeHandler={productQuantityChangeHandler}
        />
        </>

        }
    </>
  )
}

export default App

