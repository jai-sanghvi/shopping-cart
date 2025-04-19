import { Fragment } from "react";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const products = useOutletContext();

  return (
    <>
      <h1>Shop page</h1>
      {products && products.map((product) => {
        return (
          <Fragment key={product.id}>
            <p>{product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>category: {product.category}</p>
            <img src={product.image} />
          </Fragment>
        )
      })}
    </>
  )
}

export default Shop;