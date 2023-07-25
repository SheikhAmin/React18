import React from "react";
import { useState } from "react";
import "./App.css";
//import Alert from "./components/Alert";
//import Exercise1 from "./components/Exercise1";
//import Button from "./components/Exercise1";
import Button from "./components/Button";
import AlertFunc from "./components/AlertMe";
import ButtonEx from "./components/ButtonForExercise";
import { AiOutlineHeart } from "react-icons/ai";
import Icon from "./components/ReactIcon";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

/*
  {
    alertVisible && (
      <Alert onClose={() => setVisibility(false)}>My alert</Alert>
    );
  }

  <Exercise1
    onClick={() => {
      setVisibility(true);
    }}
    color="secondary"
  >
    My Button
  </Exercise1>;

  */
 //const [alertVisible, setVisibility] = useState(false);
 //const [alertVisible, setVisibility] = useState(false);
 /*
{alertVisible && (
        <AlertFunc onClose={() => setVisibility(false)}>Alert</AlertFunc>
      )}
      <Button
        color="primary"
        onClick={() => {
          setVisibility(true);
        }}
        children="Hello"
      />
      <ButtonEx onClick={() => {}}>My Button</ButtonEx>
      <Icon onClick={()=>console.log("Clicked")}/>
 */
function App() {
  
  /*let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  const handleSelectItem = (item:string) => {
    console.log(item);
  }*/
/*<ListGroup items={items} heading={'Cities'} onSelectItem={handleSelectItem} />*/


  const [cartItems,setCartItems] = useState(['Product 1','Product 2']);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart onClear={() => setCartItems([])} cartItems={cartItems}/>
    </div>
  );
}

export default App;
