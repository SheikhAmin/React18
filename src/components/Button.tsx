import * as React from 'react';
import { Component } from 'react';

interface Props{
  children:string;
  onClick:() => void;
  color:string;
}

const Button = ({children,onClick,color}:Props) =>{
    return(
        <>
        <button type='button' className={'btn btn-primary bg-' + color} onClick={onClick} >{children}</button>
        </>
    )
}

export default Button;
