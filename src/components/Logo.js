import React, { Component } from "react";

class Logo extends Component {
  render() {
    return <div style={styles.logo}>Shop</div>;
  }
}

export default Logo;

const styles = {
  logo: {
    fontSize: "2rem",
    fontWeight: "700",
  },
};
