import { useState } from 'react';


function Exerc(){
const [game, setGame] = useState({
  id:1,
  player:{
    name:'John',
  },
});

/*const handleClick = () =>{
    setGame({...game, player:{...game.player,name:'bob'}});
}*/
}

const Food = () =>{
    const [pizza,setPizza] = useState({
        name:'Spicy Pepperoni',
        toppings: ['Mushroom']
    });

    /*const handleClick = () =>{
        setPizza({...pizza,toppings:[...pizza.toppings,'Butter']});
    }*/
}

const Cart = () =>{
    const [cart,setCart] = useState({
        discount:.1,
        items:[
            { id:1, title:'Product 1' , quantity:1},
            { id:2, title:'Product 2', quantity:1}
        ]
    });

    const handleClick = () =>{
        setCart({...cart,items:cart.items.map( item => item.id === 1 ?{...item,quantity:2} : item)})
    }
}

export default Exerc;
