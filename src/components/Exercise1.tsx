interface Props{
    children:string;
    //? means this property is optional
    color?:'primary' | 'secondary' | 'danger';
    onClick:() => void;
}


const Button = ({children,onClick,color="danger"}:Props) =>{
    return (
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    );
}
export default Button;