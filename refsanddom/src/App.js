//Refloows to access one element from another element within a DOM

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//A stateless component
//to use that component in aother component we need to create
//another reference within the component, which we are using within
//the other component we are using component inside
const MyInput = (props) => {
  return (
    <input ref={props.inputRef} type="text"/>
  )
}

const FuncCustomComp = () => {
  //since it is stateless functional component we
  //have to make a reference
  let inputRef = null;  //gives the reference to that input

  const onClick = () => {
    inputRef.focus();
  }

  return(
    <div>
      <div>
        <span>My Input</span>
        <MyInput inputRef={(input)=>{inputRef = input}} />
        <input type="submit" value="submit" onClick={onClick}/>
      </div>
    </div>
  )
}

class App extends Component {

  onClick = () => {
    console.log(this.firstName);
    alert(`yay : ${this.firstName.value} | ${this.lastName.value} submitted! :)`);
  }

  onKeyUp = (target, e) => {
    if(e.keyCode === 13){ //upon ENTER
      //this.lastName.focus();
      switch(target) {
        case 'firstName':
            this.lastName.focus();
            break;
        case 'lastName':
            this.age.focus();
            break;
        case 'age':
            this.submit.focus();
            break;
        default:
            this.firstName.focus();
      }
    }
    //it tells which key was pressed
  }

  render() {
    return (
      <div className="App">
        <FuncCustomComp />
        <div>
          <span>First Name: </span>
          <input ref={(input)=>{this.firstName = input}}
                 onKeyUp={this.onKeyUp.bind(this,'firstName')}
                 type="text" />
        </div>
        <div>
          <span>Last Name: </span>
          <input ref={(input)=>{this.lastName = input}}
                 onKeyUp={this.onKeyUp.bind(this,'lastName')}
                 type="text" />
        </div>
        <div>
          <span>Age: </span>
          <input ref={(input)=>{this.age = input}}
                 onKeyUp={this.onKeyUp.bind(this,'age')}
                 type="text" />
        </div>
        <div>
          <input type="submit"
                 value="submit"
                 onKeyUp={this.onKeyUp.bind(this,'submit')}
                 ref={(input)=>{this.submit = input}}
                 onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;

//Refloows to access one element from another element within a DOM
//we need to add ref={(input)=>{this.firstname = input}}
//"this is a reference " to that input a call back function that sets property for this class
// we also need to use property "onKeyUp={this.onKeyUp}"
// we can use switch statement to go through the entire form and
// in the <div> we need to bind it.
// It is different in functional component and see above..
