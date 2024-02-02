// import './style.css'
import React, { Component } from "react"; 

class Button extends React.Component { 
  constructor() { 
      super(); 
      this.state = { 
      }; 
  }

  render() { 
      return ( 
        <button className="primary-button">Generate</button>
      ) 
  } 
} 

export default Button; 