import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react";
import styles from '../styles/Navigation.module.css'

function Navigation({ cartItems }) {
  return (
    <header className={styles.header}>
      <h1>FakeStore</h1>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart" data-cart-items={cartItems.length}><ShoppingCart /></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;