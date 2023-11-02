import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/Main.css'
import './Styles/Media.css'


export const Context = createContext();

const AppWrapper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <App />
    </Context.Provider>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AppWrapper />

  </React.StrictMode>,
)
