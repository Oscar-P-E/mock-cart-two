import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router'
import { CartProvider } from './cartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
    <Router />
    </CartProvider>
  </React.StrictMode>,
)
