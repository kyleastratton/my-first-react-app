import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './style.css'
// import Greeting from './Greeting.jsx'
import Card from './Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    {/* <App />
    <Greeting /> */}
  </React.StrictMode>,
)
