import React, { Component } from "react";

class DetallesCarro extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div style={styles.detallescarro}>
        <ul style={styles.ul}>
          {cartItems.map((el) => (
            <li key={el.name} style={styles.producto}>
              <img alt={el.name} src={el.img} width="50" />
              {el.name} <span>{el.cantidad}</span>
            </li>
          ))}
        </ul>
        <p>
          Total:{" "}
          {cartItems.reduce((acc, el) => acc + el.cantidad * el.price, 0)}
        </p>
      </div>
    );
  }
}

export default DetallesCarro;

const styles = {
  detallescarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 5,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};
