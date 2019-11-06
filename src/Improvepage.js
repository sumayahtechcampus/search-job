import React from 'react';
import {Button} from 'react-bootstrap'


const Improvepage = (props) => {
    // console.log(props.names)

    const allNames = props.names.map((item, index) => {
        return (
            <div>
                <li key={index}> {item} </li> 
            </div>
        )
    })
    return (
        <div>
            <h1>Help Us to improve our web page</h1>
            <ul>
                {allNames}
            </ul>
            <div class="input-group">
            <div class="input-group-prepend">
         
         </div>
         <textarea class="form-control" aria-label="With textarea"
         type="text"
         value={props.newItem}
         onChange={props.onTextBoxChange}
         placeholder="Type Here "
         ></textarea>
        </div>
            {/* <input type="text"
                value={props.newItem}
                onChange={props.onTextBoxChange}
                placeholder="Type a task here " /> */}


            <br />
            <Button variant="primary" onClick={props.addItem} >Add Here </Button>
            <Button variant="primary" onClick={props.clearList}>Clear All</Button>
            <Button variant="primary" onClick={props.clearOneItem}>Clear One</Button>

 
        </div>
    )
}

export default Improvepage;