import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Beauty from './components/Beauty/Beauty';
import News from './components/News/News';
import SeasonalSpecials from './components/SeasonalSpecials/SeasonalSpecials';
import CartContextProvider from './context/CartContext';

function App() {





  return (
    <>
    
        <BrowserRouter>
          <CartContextProvider>
                <NavBar/>
                <Routes>
                    <Route  path='/' element={<ItemListContainer  gretting={"Hola Bienvenido a Perfumes Rosalía"} />}/>
                    <Route  path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route  path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route  path='/cart' element={<Cart/>}/>
                    <Route  path='/belleza' element={<Beauty/>}/>
                    <Route  path='/novedades' element={<News/>}/>
                    <Route  path='/temporada' element={<SeasonalSpecials/>}/>
                    <Route  path='*' element={<Navigate to='/'/>}/>
                </Routes>
          </CartContextProvider>
        </BrowserRouter>
 

    </>
  )
}

export default App
