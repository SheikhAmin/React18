import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm} from 'react-hook-form';
import { date } from "zod";
//import {z} from 'zod';

const Form = () => {
  /*const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = {name:'',age: 0};*/
  const { register, handleSubmit } = useForm();
  console.log(register('name'));
  const onSubmit = (data:FieldValues) => console.log(data);
  /*const [person, setPerson] = useState({
    name: "",
    age: '',
  });*/
 /* const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
     if (nameRef.current !== null){
            person.name = nameRef.current.value;
         }
        if(ageRef.current !== null){
            person.age = parseInt(ageRef.current.value);
        }*/
    //console.log(person);
  //};
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          {...register('name')}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          {...register('age')}
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
