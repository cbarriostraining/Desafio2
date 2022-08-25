import React, { createContext,useState ,useContext,useEffect} from 'react';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import { CONSTANTS } from "../common/constants";
const  {ORDERS_COLLECTION} = CONSTANTS;
const CartContext=createContext([]);
export const useCartContext =()=>useContext(CartContext);
const CartContextProvider=({children})=>{
const [cartList, setCartList] = useState([]);
const [totalPurchase, setTotalPurchase] = useState(0);
const [numberProducts, setNumberProducts] = useState(0);
const [orderId, setOrderId] = useState("");
const [proceedToBuy, setProceedToBuy]= useState(false);
const [concludePurchase, setConcludePurchase] = useState(true);
const [totalValidatedFields,setTotalValidatedFields] = useState(0);
const [buyerData,setBuyerData] = useState({});


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



const saveOrder  =async ()=>{
    const {email,fullName,phone}=buyerData;
    const today = new Date();
    
    const orderData={
      buyer:{
        email,
        name:fullName,
        phone
      },
      items:cartList.map(product=>{
            return{
            product:product.name,
            id:product.id,
            price:product.price
             }
            }),
      total:totalPurchase,
      purchaseDate:today.toLocaleString()
    }
    const db=getFirestore();
    const  queryOrders=collection(db, ORDERS_COLLECTION);
    addDoc(queryOrders,orderData)
    .then(resp=>{ 
      cleanCart();
      setOrderId(resp.id);
      setProceedToBuy(false);
    });

    
    }

const cleanCart =()=>{
setCartList([]);
setConcludePurchase(false);

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
setOrderId,
saveOrder,
proceedToBuy, 
setProceedToBuy,
concludePurchase, 
setConcludePurchase,
totalValidatedFields,
setTotalValidatedFields,
buyerData,
setBuyerData
}}>
{children}
</CartContext.Provider>

)

}


export default CartContextProvider;
