import { useState } from "react";

function Obj(){
    const [customer,setCustomer] = useState({
        name:'John',
        address:{
            city:'San Francisco',
            zipCode:94111
        }
    });

    const handleClick = () =>{
         setCustomer({...customer,address:{...customer.address,zipCode:94222}})
    };
}

export default Obj;