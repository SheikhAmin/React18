import React from "react";
import { useState } from "react";
import "./App.css";
//import Alert from "./components/Alert";
//import Exercise1 from "./components/Exercise1";
//import Button from "./components/Exercise1";
import Button from "./components/Button";
import AlertFunc from "./components/AlertMe";
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
function App() {
  const [alertVisible,setVisibility] = useState(false);
  /*let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  const handleSelectItem = (item:string) => {
    console.log(item);
  }*/
/*<ListGroup items={items} heading={'Cities'} onSelectItem={handleSelectItem} />*/
  return (
    <div>
      {
        alertVisible && <AlertFunc onClose={() =>setVisibility(false)}>Alert</AlertFunc> 
      }
      <Button color="primary" onClick={() =>{setVisibility(true)}} children="Hello" />
    
    </div>
  );
}

export default App;
