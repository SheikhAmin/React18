import { useState } from "react";

function Array(){
    const [tags,setTags] = useState(['happy','cheerful']);


    const handleClick = () =>{
       //Add
       setTags([...tags,'excition']);
       //Remove
       setTags(tags.filter( tag => tag !== 'happy'));
       //Update
       setTags(tags.map( tag => tag === 'happy' ? 'happiness' : tag));
    };
}

export default Array; 