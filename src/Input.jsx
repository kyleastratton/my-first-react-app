import React, { Component } from "react"; 
  
class Input extends React.Component { 
    constructor() { 
        super(); 
        this.state = { 
        }; 
    }
  
    render() { 
        return ( 
          <input value={this.props.inputText}></input>
        ) 
    } 
} 
  
export default Input; 