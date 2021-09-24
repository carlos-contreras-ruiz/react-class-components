import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

export class NavBar extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro cartItems={cartItems} />
      </nav>
    );
  }
}

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0px 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};
