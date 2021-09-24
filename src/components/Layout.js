import React, { Component } from "react";

export class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.conatiner}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;

const styles = {
  layout: {
    backgroundColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  conatiner: {
    width: "1200px",
  },
};
