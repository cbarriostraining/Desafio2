const interfaceData = {
FIRST_ELEMENT:0,
SECOND_ELEMENT:1,
THIRD_ELEMENT:2,
imageformat: {
       height: 300,
       width: 250
     },
products:[
        {id:'1', category:'perfumes',name:'Guess Spray for Women', price:443, image:'https://m.media-amazon.com/images/I/51GvU7DqJfL._AC_SX522_.jpg'},
        {id:'2', category:'perfumes',name:'Paco Rabanne Ultraviolet Spray for Women', price:1068, image:'https://m.media-amazon.com/images/I/41-fTcVhIwL._AC_.jpg'},
        {id:'3', category:'perfumes',name:'Ariana Grande Ari Spray', price:1029, image:'https://m.media-amazon.com/images/I/81Qu0Kq05NL._AC_SX522_.jpg'},
        {id:'4', category:'perfumes',name:'Cacharel Amor Amor Spray', price:1061, image:'https://images-na.ssl-images-amazon.com/images/I/61agGhEJMbL.__AC_SX300_SY300_QL70_ML2_.jpg'},
        {id:'5', category:'perfumes',name:'Perry Ellis Love Spray', price:706, image:'https://m.media-amazon.com/images/I/81g3iOd3nsL._AC_SX522_.jpg'},
        {id:'6', category:'perfumes',name:'Hugo Boss El aroma ', price:1393, image:'https://m.media-amazon.com/images/I/71ChKZ+jD5L._AC_SX522_.jpg'},
        {id:'7', category:'perfumes',name:'Perfume 212 de Carolina Herrera ', price:1399, image:'https://m.media-amazon.com/images/I/51JSHNRabpS._AC_SX522_.jpg'},
        {id:'8', category:'perfumes',name:'ésika Vibranza Perfume de Mujer aroma oriental dulce', price:284, image:'https://m.media-amazon.com/images/I/61BgYr3efpS._AC_SX679_.jpg'},
        {id:'9', category:'perfumes',name:'Emporio Armani ', price:1789, image:'https://m.media-amazon.com/images/I/71SyAuqbLvL._AC_SY879_.jpg'},
      ],
PRODUCTS:[
    {id:'1', 
    category:'perfumes',
    name:'Guess Spray for Women', 
    price:443, 
    image:['https://m.media-amazon.com/images/I/51GvU7DqJfL._AC_SX522_.jpg',
           'https://m.media-amazon.com/images/I/71MBKvOiiXL._AC_SY450_.jpg'
          ],
    title:'Guess Spray for Women, 2.5 Fluid Ounce',
    brand:'GUESS',
    form:'Spray',
    about:['Todas nuestras fragancias son 100% originales de sus diseñadores originales.',
           'No vendemos copias o imitaciones', 
           'El embalaje de este producto puede variar del que se muestra en la imagen de arriba']  
    },
    {id:'2', 
    category:'perfumes',
    name:'Paco Rabanne Ultraviolet Spray for Women',
    price:1068, 
    image:['https://m.media-amazon.com/images/I/41-fTcVhIwL._AC_.jpg',
            'https://m.media-amazon.com/images/I/41-fTcVhIwL._AC_.jpg',
          ],
    title:'Paco Rabanne Ultraviolet Spray for Women, 2.7 Ounce',
    brand:'Paco Rabanne',
    form:'Spray',
    about:['Eau De Parfum.',
           'All our fragrances are 100% originals by their original designers.', 
           'We do not sell any knockoffs or immitations.']  
    },
    {id:'3', 
     category:'perfumes',
     name:'Ariana Grande Ari Spray', 
     price:1029, 
     image:['https://m.media-amazon.com/images/I/81Qu0Kq05NL._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/611VHk0v+LS._AC_SY450_.jpg'
           ],
     title:'Ariana Grande Ari Spray for Women, 3.4 Ounce',
     brand:'Ariana Grande',
     form:'Spray',
     about:['Eau De Parfum.',
            'Ari by Ariana Grande for Women.', 
            '3.4 oz Eau de Parfum Spray.']        
    },
    {id:'4', 
     category:'perfumes',
     name:'Cacharel Amor Amor Spray', 
     price:1061, 
     image:['https://images-na.ssl-images-amazon.com/images/I/61agGhEJMbL.__AC_SX300_SY300_QL70_ML2_.jpg',
            'https://m.media-amazon.com/images/I/71cPV4k7BYL._AC_SX450_.jpg'
          ],
     title:'Cacharel Amor Amor Spray, 3.4 Fl Oz',
     brand:'Cacharel',
     form:'Spray',
     about:['Eau De Toilette.',
            'Amor Amor 3.4 fl. oz. Eau de Toilette spray.', 
            'Notes: mandarin, precious jasmine, soothing vanilla.'
           ]       
    },
    {id:'5', 
     category:'perfumes',
     name:'Perry Ellis Love Spray', 
     price:706, 
     image:['https://m.media-amazon.com/images/I/81g3iOd3nsL._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/71HFS77EVgL._AC_SX466_.jpg'
           ],
     title:'Perry Ellis Love Spray For Women, 3.4 Ounce',
     brand:'Perry Ellis',
     form:'Sólido',
     about:['Eau De Parfum.',
            'Eau De Parfume Spray.', 
            'For Women.']        
    },
    {id:'6', 
     category:'perfumes',
     name:'Hugo Boss El aroma', 
     price:1393, 
     image:['https://m.media-amazon.com/images/I/71ChKZ+jD5L._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/61uyi-cLDiL._AC_SX522_.jpg'
           ],
     title:'Hugo Boss El aroma para ella Eau de Parfum',
     brand:'Hugo Boss',
     form:'Líquido',
     about:['The scent.',
            'Oriental.', 
            'Sin efectos secundarios..']        
    },
    {id:'7', 
     category:'perfumes',
     name:'Perfume 212 de Carolina Herrera', 
     price:1399, 
     image:['https://m.media-amazon.com/images/I/51JSHNRabpS._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/61MVmqMZ+wL._AC_SY450_.jpg'
           ],
     title:'Perfume 212 de Carolina Herrera, Mujer',
     brand:'Carolina Herrera',
     form:'Líquido',
     about:['Eau de Toilette.',
            '100% original.', 
            'Spray 100 ml.']        
    },
    {id:'8', 
     category:'perfumes',
     name:'ésika Vibranza Perfume de Mujer aroma oriental dulce', 
     price:284, 
     image:['https://m.media-amazon.com/images/I/61BgYr3efpS._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/51FNceDt1pL._AC_SX569_.jpg'
           ],
     title:'ésika Vibranza Perfume de Mujer aroma oriental dulce, 45 ml',
     brand:'ésika',
     form:'Solido',
     about:['Aroma Oriental Dulce - Concentración muy alta..',
            'Es un perfume oriental dulce de muy alta concentración y muy larga duración, en cuyo corazón resalta la orquídea de vainilla y flor de café, creando un aroma de encanto irresistible.', 
            'Ingredientes: Orquídea de vainilla y flor de café.']        
    },
    {id:'9', 
     category:'perfumes',
     name:'Emporio Armani ', 
     price:1789, 
     image:['https://m.media-amazon.com/images/I/71SyAuqbLvL._AC_SY879_.jpg',
            'https://m.media-amazon.com/images/I/719f2YN3DLL._AC_SX569_.jpg'
           ],
     title:'Emporio Armani Because Its You 3.4 Ounce / 100 ml',
     brand:'GIORGIO ARMANI',
     form:'Líquido',
     about:['Eau De Parfum.',
            'Emporio Armani.', 
            'Eau De Parfum.'
            ]        
    },
    {id:'10', 
     category:'estuches',
     name:'Kipling Estuche Freedom', 
     price:503, 
     image:['https://m.media-amazon.com/images/I/81-p9iWlZyL._AC_UL320_.jpg',
            'https://m.media-amazon.com/images/I/81Pf+3pyuXL._AC_SX679_.jpg'
           ],
     title:'Kipling Estuche Freedom, Una talla, Estuche para lápices Freedom',
     brand:'Kipling',
     form:'Nailon',
     about:['Revestimiento de Polister.',
            'Cierre de Cremallera.', 
            'Freedom es nuestra pequeña bolsa con cremallera perfecta ideal para guardar bolígrafos, lápices, gomas de borrar, brochas de cosméticos, tus pequeños artículos esenciales diarios y mucho más.'
            ]        
    },
    {id:'11', 
     category:'estuches',
     name:'MAGEFY Bolsa de maquillaje', 
     price:220, 
     image:['https://m.media-amazon.com/images/I/81ixISr+BbL._AC_SY450_.jpg',
            'https://m.media-amazon.com/images/I/71dTpyBzTFL._AC_SY450_.jpg'
           ],
     title:'MAGEFY Bolsa de maquillaje 3 Estilos Cosmetiquera de Viaje Portátil Para Mujeres Cosmetiquera para Maquillaje de Cremallera con Patrones de Flores Estuche de maquillaje para Niñas Bolsas de Mujer (3 Paquetes)',
     brand:'MAGEFY',
     form:'Poliester',
     about:['MAGEFY bolsa para maquillaje son duraderas y ligeras.',
            'Hermosos patrones diferentes.', 
            'Están hechas de cremalleras confiables y materiales duraderos.'
            ]        
    },
    {id:'12', 
     category:'estuches',
     name:'Cosmetiquera para Maquillaje', 
     price:339, 
     image:['https://m.media-amazon.com/images/I/61hwkOLhm7L._AC_SY450_.jpg',
            'https://m.media-amazon.com/images/I/51V7V6dS7VL._AC_SY450_.jpg'
           ],
     title:'Cosmetiquera para Maquillaje 3Pcs Portátil Bolsa de Maquillaje Impermeable PU Multifuncional para Mujer Cosméticos Organizador Estuche Maquillaje (Mármol blanco)',
     brand:'MAANGE',
     form:'Poliester',
     about:['3 estilos y tamaños diferentes.',
            'Bolsa de cosméticos de material premium.', 
            'Bolsa de maquillaje multifuncional.'
            ]        
    },
    {id:'13', 
     category:'estuches',
     name:'Coach Estuche para tarjetas', 
     price:1649, 
     image:['https://m.media-amazon.com/images/I/61TKTE1kNJL._AC_SY450_.jpg',
            'https://m.media-amazon.com/images/I/514CZh0ldGL._AC_SY450_.jpg'
           ],
     title:'Coach Estuche para tarjetas de fijación para mujer, Negro, OS, Estuche para tarjetas',
     brand:'COACH',
     form:'Piel',
     about:['Coach Estuche para tarjetas de fijación para mujer.',
            'Negro.', 
            'Estuche para tarjetas.'
            ]        
    },
    {id:'14', 
     category:'estuches',
     name:'JSBelle Bolsa de maquillaje de viaje', 
     price:169, 
     image:['https://m.media-amazon.com/images/I/61rkhoxKRXL._AC_SY450_.jpg',
            'https://m.media-amazon.com/images/I/718CM3UZ6HL._AC_SY450_.jpg'
           ],
     title:'JSBelle Bolsa de maquillaje de viaje, Pequeño organizador de estuches cosméticos para mujer (Negro)',
     brand:'JSBelle',
     form:'Nailon',
     about:['El material exterior es de tela de nylon negro de buena calidad.',
            'El compartimento principal puede almacenar cosméticos.', 
            'Multifuncional.'
            ]        
    }






  ]
  
  };
  
  export const CONSTANTS = Object.freeze(interfaceData);