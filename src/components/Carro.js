import React, { Component } from "react";
import Bubble from "./Bubble";
import DetallesCarro from "./DetallesCarro";

class Carro extends Component {
  state = {
    showCart: false,
  };
  render() {
    const { cartItems } = this.props;
    const cantidad = cartItems.reduce((acc, el) => acc + el.cantidad, 0);
    console.log(cantidad);
    console.log(cantidad);
    return (
      <div>
        {cantidad ? (
          <span style={styles.bubble}>
            <Bubble value={cantidad} />
          </span>
        ) : null}

        <button
          style={styles.carro}
          onClick={() =>
            this.setState({
              showCart: !this.state.showCart,
            })
          }
        >
          Carro
        </button>
        {this.state.showCart && cantidad ? (
          <DetallesCarro cartItems={cartItems} />
        ) : null}
      </div>
    );
  }
}

export default Carro;

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};
