import '../styles/App.css'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, [])
  return (
    <>
      <Navigation cartItems={cartItems} />
      <Outlet context={{products, setCartItems}} />
    </>
  )
}

export default App;