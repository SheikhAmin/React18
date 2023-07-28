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
import UpdatingObjects from "./components/UpdatingObjects";
import ExpandableText from "./components/ExpandableText";

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
     <ExpandableText maxChars={20}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis omnis eaque, cupiditate totam laudantium nihil? Autem porro quibusdam, laborum voluptatem blanditiis itaque illum impedit nihil aperiam molestiae, animi pariatur similique doloremque vero culpa neque beatae? Labore quisquam tempore alias ex accusantium animi sed tempora laboriosam molestias incidunt error, distinctio quas quidem repudiandae blanditiis laborum perspiciatis officiis earum harum numquam tenetur eius? Voluptate soluta nisi iste, accusantium laudantium nostrum adipisci doloremque sunt exercitationem perferendis iusto corrupti. Consectetur odit animi quidem nulla laboriosam ut est officiis, nemo suscipit iure autem iusto quos atque vel esse architecto cum saepe delectus, minima rerum? Recusandae?
     </ExpandableText>
    </div>
  );
}

export default App;
