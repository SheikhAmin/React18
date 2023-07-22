//<>means fragment it's a shortcut</>
// in jsx we use {} to render javaScript code dynamically
//import styles from "./ListGroup.module.css"
import { MouseEvent, useState } from "react";
interface Props{
   items:string[];
   heading:string;
   onSelectItem: (item:string) => void;
}
function ListGroup({items,heading,onSelectItem}:Props) {
  
  //Hook(useState()--> called with an initial value & returns an array with two elements:the current state value & a function to update the state)=(declaring a state variable called selectIndex with initial value of -1 )
  const [selectedIndex, setSelectedIndex] = useState(-1);
  


//Event Handler
  const handleClick = (event:MouseEvent) => console.log(event);
  //items = [];

  /*const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };*/
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
