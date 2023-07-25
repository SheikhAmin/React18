import { useState } from "react";

function Bug(){
    const [bugs,setBugs] = useState([
        { id:1, title: 'Bug 1', fixed: false},
        { id:2, title: 'Bug 2', fixed:false},
    ]);

    const handleClick = () =>{
        setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed:true}:bug))
    }
}

export default Bug;