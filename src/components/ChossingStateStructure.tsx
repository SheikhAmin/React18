import { useState } from "react";

function State(){
  //const [firstName,SetFirstName] = useState('');
  //const [lastName,setLastName] = useState('');
  const [person,setPerson] = useState({
    firstName:'',
    lastName:''
  });
  const [isLoading,setLoading] = useState('');


}