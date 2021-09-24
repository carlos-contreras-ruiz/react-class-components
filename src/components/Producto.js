import React, { Component } from "react";
import Button from "./Button";
const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0,0,0, 0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  image: {
    width: "100%",
  },
};

export class Producto extends Component {
  render() {
    const { addToCart, producto } = this.props;
    return (
      <div style={styles.producto}>
        <img alt={producto.name} src={producto.img} style={styles.image} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => addToCart(producto)}>Add to Cart</Button>
      </div>
    );
  }
}

export default Producto;
