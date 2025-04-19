import { useOutletContext } from "react-router-dom";
import styles from '../styles/Shop.module.css'
import Product from "../components/Product";

function Shop() {
  const { products } = useOutletContext();

  return (
    <>
      <h1>Shop page</h1>
      <div className={styles.products}>
        {products && products.map((product) => {
          return (
            <Product key={product.id} product={product} />
          )
        })}
      </div>
    </>
  )
}

export default Shop;