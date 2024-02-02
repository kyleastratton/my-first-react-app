import './style.css'
import React, { Component } from "react"; 
import Input from './Input.jsx'
import Button from './Button.jsx'
  
class Card extends React.Component { 
    constructor() { 
        super(); 
        this.state = { 
        }; 
    } 
  
    render() { 
        return ( 
          <div className="container">
            <h3>{this.props.headingText}</h3>
            <Input inputText={this.props.inputText}/>
            <Button />
          </div>
        ) 
    } 
} 
  
export default Card; 