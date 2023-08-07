import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <button className="linkGithub" onClick={() => {window.open("https://github.com/yulelily/memory-card")}} >yulelily</button>
  </React.StrictMode>,
)
