import React, { createContext,useState ,useContext,useEffect} from 'react';
const CartContext=createContext([]);
export const useCartContext =()=>useContext(CartContext);

// coponente -> estados para producir renders y que se actualize

const CartContextProvider=({children})=>{

// estados y funciones globales
const [cartList, setCartList] = useState([]);
const [totalPurchase, setTotalPurchase] = useState(0);
const [numberProducts, setNumberProducts] = useState(0);
const [orderId, setOrderId] = useState("");


useEffect(() => {
    calculateNumberProducts();
    calculateTotal();
    
   }, [cartList]);

const calculateTotal=()=>{
    let total=0;
    cartList.forEach(item=>{
                total=total+(item.price*item.quantity)
             
            });
            setTotalPurchase(total);
}

const calculateNumberProducts=()=>{
    let quantity=0;
    cartList.forEach(item=>{
                quantity+=item.quantity
             
            });
            setNumberProducts(quantity);
}


const isInCart=(prod)=>{
    let index=cartList.findIndex(item=> item.id==prod.id);
    if (index==-1) return false;
    return true;

}

const addToCart =(prod)=>{

if (isInCart(prod)){
    console.log("ya existe en el carrito.");
    let index=cartList.findIndex(item=> item.id==prod.id);
    cartList[index].quantity+=prod.quantity
    setCartList(cartList);
    calculateNumberProducts();
    calculateTotal();
    }else{
    setCartList([
            ...cartList,
            prod]);  
    }

    
};
const removeItemFromCart =(index)=>{
    let aux=[];
    cartList.splice(index,1);
    aux=[...cartList];
    setCartList([]);
    setCartList(aux);

};

const cleanCart =()=>{
setCartList([]);

}

return(
<CartContext.Provider value={{
cartList,
addToCart,
cleanCart,
totalPurchase,
removeItemFromCart,
numberProducts,
setCartList,
orderId,
setOrderId

}}>
{children}
</CartContext.Provider>

)

}


export default CartContextProvider;
