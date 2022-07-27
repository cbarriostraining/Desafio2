import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { useState } from 'react';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import Cart from './components/Cart/Cart';
import Beauty from './components/Beauty/Beauty';
import News from './components/News/News';
import SeasonalSpecials from './components/SeasonalSpecials/SeasonalSpecials';
import Cases from './components/Cases/Cases';


function App() {





  return (
    <>
    
        <BrowserRouter>
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
        </BrowserRouter>


    </>
  )
}

export default App
