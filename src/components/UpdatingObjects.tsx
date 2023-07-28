import React from 'react';
import { useState } from 'react';

function Obj(){
  const [drink,setDrink] = useState({
    title:"Amiricano",
    price: 5,
  });

  const handleClick = () =>{
    const newDrink = {
        ...drink,
        price:7
    }
    setDrink(newDrink);
  };

  return(
    <div>
        {drink.price}
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Obj;
