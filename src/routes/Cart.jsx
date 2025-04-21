import { useOutletContext } from "react-router-dom";

function Cart() {
  const { products, cartItems } = useOutletContext();
  const cart = {}

  cartItems.forEach(item => {
    cart[item] = (cart[item] || 0) + 1;
  })

  const cartTotal = cartItems.reduce((total, item) => total + products[item - 1].price, 0).toFixed(2);
  
  return (
    <>
      <h1>Cart Page</h1>
      {Object.keys(cart).map(item => {
        return (
          <div key={item}>
            <h2 >{products[item - 1].title}</h2>
            <p>{products[item - 1].price} x {cart[item]}</p>
          </div>
        )
      })}
      <p>Total $ {cartTotal}</p>
    </>
  );
}

export default Cart;