const interfaceData = {
FIRST_ELEMENT:0,
SECOND_ELEMENT:1,
THIRD_ELEMENT:2,
WELCOME_MESSAGE:"Hola Bienvenido a Perfumes Rosalía",
FIRE_BASE_CONFIG:{
       apiKey: "AIzaSyCaqI2bacI7GXD5BgAi_A-qxlko8BQ4YqY",
       authDomain: "perfumesrosalia.firebaseapp.com",
       projectId: "perfumesrosalia",
       storageBucket: "perfumesrosalia.appspot.com",
       messagingSenderId: "105635333133",
       appId: "1:105635333133:web:c608cf3cae6df4ec540144"
     },
imageformat: {
       height: 300,
       width: 250
     },
logoImageFormat: {
       height: 115,
       width: 109,
     },
listImageFormat: {
      height: 75,
      width: 80
    },
containerStyle:{
    width:300,
    borderStyle:"solid",
    borderWidth:"thin",
    borderColor:"pink",
    borderRadius:25
},
 WITHOUT_ORDERID:"",
 EMPTY_PRODUCT_LIST:0,   
 GOTO_THE_MAIN_SHOPPING_PAGE:"Ir a la pagina principal de compras." ,
 PURCHASE_END_MESSAGE:"Gracias por su compra, su Id de la compra es : ",
 INITIALIZE_STRING:"",
 THERE_ARE_NO_PRODUCTS:"",
 PRODUCTS_COLLECTION:"products",
 ORDERS_COLLECTION:"orders",
 RETURN_TO_THE_MAIN_SHOPPING_PAGE:"Volver a la pagina principal de compras.",
 THERE_ARE_NO_PRODCUTS_IN_THE_SHOPPING_CART:"No hay productos en el carrito de compras",
 regexFullName : /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
 regexPhone : /^[0-9]{10,12}$/,
 regexEmail : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
 regexStringGood : /^\s+$/,
 EMPTY:"",
 THERE_IS_NOT_ARTICLE:"No existe el  id del articulo especificado.",
 CONCLUDE_PURCHASE:"Concluir su Compra"

  
  };
  
  export const CONSTANTS = Object.freeze(interfaceData);