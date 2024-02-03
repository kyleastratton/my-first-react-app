import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
)
