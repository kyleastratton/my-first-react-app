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
          sortCodeInput: "10-20-30",
          accountNumberInput: "00000001",
          ibaccountNumberInput: "GB29RBOS10203000000001",
          swiftInput: "RBOSGB2LXXX"
        }; 
    } 
  
    render() { 
      const name = {headingText: "Name", inputText: this.state.nameInput};
      const address = {headingText: "Address", inputText: this.state.addressInput};
      const mobile = {headingText: "Mobile Number", inputText: this.state.mobileInut};
      const bank = {headingText: "Bank", inputText: this.state.bankInput};
      const sortcode = {headingText: "Sort Code", inputText: this.state.sortCodeInput};
      const accountnumber = {headingText: "Acount Number", inputText: this.state.accountNumberInput};
      const iban = {headingText: "IBAN", inputText: this.state.ibaccountNumberInput};
      const swiftcode = {headingText: "SWIFT Code", inputText: this.state.swiftInput};
      const card = [name, address, mobile, bank, sortcode, accountnumber, iban, swiftcode];
        return ( 
          <div className="main-container">
            <>
            {card.map(card => (
              <Card headingText={card.headingText} inputText={card.inputText}/>
            ))}
            </>
       </div>
        ) 
    } 
} 
  
export default App; 
