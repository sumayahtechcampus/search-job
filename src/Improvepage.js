import React from 'react';


const Improvepage = (props) =>{
    // console.log(props.names)

    const allNames = props.names.map((item, index)=>{
        return <li key={index}> {item} </li>
    })
    return(
        <div>
            <h1>Help Us to improve our web page</h1>
            <ul>
            {allNames}
            </ul>
           
            <input type = "text"
        value = {props.newItem}
        onChange ={props.onTextBoxChange}
        placeholder = "Type a task here "/>
      

      <br />
        <button onClick={props.addItem}>Add Here !</button> 
        
        <button onClick={props.clearList}>Clear All </button>
        
        <button onClick={props.clearOneItem}>Clear One </button>


        </div>
    )
}
 
export default Improvepage;