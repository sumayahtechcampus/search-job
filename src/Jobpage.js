import React from 'react';



const Jobpage = (props) =>{
    return(
    <div>
        <label> Search :  
        <input type = "text"
        value = {props.newItem}
        onChange ={props.onTextBoxChange}
        placeholder = "Type here "/>
      
        <button > Send </button>



        </label>

    </div>
    )
}

export default Jobpage;