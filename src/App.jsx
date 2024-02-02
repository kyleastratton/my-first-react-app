import React, { Component } from "react"; 
import Card from './Card.jsx'
  
class App extends React.Component { 
    constructor() { 
        super(); 
        this.state = { 
          nameInput: "John Doe",
          addressInput: "123 Main Street",
          mobileInput: "07912345678",
          bankInput: "Example Bank",
          scInput: "10-20-30",
          anInput: "00000001",
          ibanInput: "GB29RBOS10203000000001",
          swiftInput: "RBOSGB2LXXX"
        }; 
    } 
  
    render() { 
        return ( 
          <div className="main-container">
            <Card headingText={"Name"} inputText={this.state.nameInput}/>
            <Card headingText={"Address"} inputText={this.state.addressInput}/>
            <Card headingText={"Mobile Number"} inputText={this.state.mobileInput}/>
            <Card headingText={"Bank"} inputText={this.state.bankInput}/>
            <Card headingText={"Sort Code"} inputText={this.state.scInput}/>
            <Card headingText={"Account Number"} inputText={this.state.anInput}/>
            <Card headingText={"IBAN"} inputText={this.state.ibanInput}/>
            <Card headingText={"SWIFT Code"} inputText={this.state.swiftInput}/>
       </div>
        ) 
    } 
} 
  
export default App; 
