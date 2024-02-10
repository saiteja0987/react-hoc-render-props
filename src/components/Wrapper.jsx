import React, {useState} from 'react'

export default function Wrapper(props){
    
    const [counter,setCounter]= useState(0);
    const handleIncerement = ()=>{
        setCounter(counter+1);
    }
    return(
        <div>
            {props.render(counter,handleIncerement)}
        </div>
    )
}