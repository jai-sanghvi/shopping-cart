import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from '../styles/Product.module.css'

function Product({ product }) {
  const { setCartItems } = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
      setCartItems((prevCartItems) => {
        let newCartItems = [...prevCartItems];

        for (let i = 0; i < quantity; i++) {
          newCartItems.push(product.id);
        }
        
        return newCartItems;
      })
    }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className={styles.product}>
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>category: {product.category}</p>
      <input type="number" name="quantity" id={'quantity-' + product.id} min="1" value={quantity} onChange={handleQuantityChange} />
      <button type="button" onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default Product;