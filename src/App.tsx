import React from "react";
import { useState } from "react";
import "./App.css";
//import Alert from "./components/Alert";
//import Exercise1 from "./components/Exercise1";
//import Button from "./components/Exercise1";
//import Button from "./components/Button";
//import AlertFunc from "./components/AlertMe";
//import ButtonEx from "./components/ButtonForExercise";
import { AiOutlineHeart } from "react-icons/ai";
import Icon from "./components/ReactIcon";
//import NavBar from "./components/NavBar";
//import Cart from "./components/Cart";
//import UpdatingObjects from "./components/UpdatingObjects";
//import ExpandableText from "./components/ExpandableText";
import Form from './components/Form';
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
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
 const [selectedCategory,setSelectedCategory] = useState('');
 const [expenses,setExpenses] = useState([
   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
   { id: 2, description: "bbb", amount: 10, category: "Utilities" },
   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
   { id: 4, description: "ddd", amount: 10, category: "Utilities" },
 ]);
  //const [cartItems,setCartItems] = useState(['Product 1','Product 2']);
  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, {...expense,id:expenses.length+1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) =>setSelectedCategory(category)}/>
      </div>
      
     <ExpenseList expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter((e) => e.id !== id))} />
    </div>
  );
}

export default App;
