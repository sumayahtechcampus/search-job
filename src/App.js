import React, { Component } from "react";
import "./App.css";
import Homepage from './Homepage';
import Jobpage from './Jobpage';
// import Search from './Search';
import Improvepage from "./Improvepage";
import axios from 'axios';
import logo from './logo.jpg';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';



const improvelist = [
  'Make Site Responsive !',
  'Change Design of the Web site',
  'Try if it is Work'
  ]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDoItem : improvelist,
      newItem : '',
      clearItem : [],
      jobs :[]
  }
  }
  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true&location=sf')
    .then(res => {
      this.setState({
        jobs : res.data
      })
    
    })
    .catch(err => {
      console.log(err)
    })
  }
  clearList = (e) => {
    this.setState ({
        toDoItem : []
    });
}
clearOneItem = (toDoItem) =>{
  console.log (' Item Clear !')
  const clearItems = this.state.toDoItem.pop(function(){
    return clearItems.pop();
  })
 
         
  this.setState({
      toDoItem: [ ...this.state.toDoItem, this.state.newItem], 
      clearItem: clearItems
  });
}
// clearOneItem = (toDoItem) => {
//   console.log(toDoItem);
  
//   const clearItem = [...this.state.clearItem];
//   const findIndex = clearItem.indexOf(toDoItem)
//   if ( findIndex !== -1){
//     clearItem.splice(findIndex , 1)
//   }
//   else {
//     clearItem.push(toDoItem)
//   }
//   this.setState({clearItem})
// }

  onTextBoxChange = (e) =>{
    console.log('on Text Change', e.target.value);  
    this.setState ({
        newItem : e.target.value
    }); 
  } 

  addItem = (e) =>{
    console.log ('Add Item')
    this.setState({
        toDoItem: [...this.state.toDoItem, this.state.newItem], 
        newItem: ''
    });
}
  
  render(){
    console.log(this.state.jobs)
    return(
      <div>
      <Router>
        {/* <ul>
        <nav>
        <li> <Link  to='/' > Home Page </Link> {' '} </li>
        <li> <Link to='/Jobpage'>Job Page </Link> {' '}</li>
        <li> <Link to='/Improvepage'>Improve Page </Link> {' '} </li>
        </nav>
        </ul> */}
        {/* ///////////// */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <img src={logo} alt="logo" className ="img-circle"/>   */}

        <button className="navbar-toggler" type="button" data-toggle="collapse" 
       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
   
   
      <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link  className="nav-link"  to='/' > Home Page </Link>
      </li>
      <li className="nav- active">
      <Link className="nav-link" to='/Jobpage'>Job Page </Link>
      </li>
      <li className="nav- active">
      <Link className="nav-link" to='/Improvepage'>Improve Page </Link>
      </li>
     
     
    </ul>
   
  </div>
</nav>


        {/* //////////// */}
        
      <Route exact path="/" component = {Homepage} /> 

      <Route  path="/Jobpage" component = {() => <Jobpage jobs={this.state.jobs}/>}/>
      
      {/* <Route  path="/Search" component = {() => <Search alljob={this.state.jobs} />}/> */}

      <Route path ="/Improvepage" render ={(...props) =>
       <Improvepage newItem={this.state.newItem} addItem={this.addItem}
       onTextBoxChange = {this.onTextBoxChange} names= {this.state.toDoItem} 
        clearList={this.clearList} clearOneItem={this.clearOneItem}/>} />
    </Router>
      </div>
    )
    
  }
}

export default App;
