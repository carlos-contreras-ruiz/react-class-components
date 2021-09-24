import { Component } from "react";

class Bubble extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    return (
      <span style={styles.bubble}>{this.getNumber(this.props.value)}</span>
    );
  }
}

export default Bubble;

const styles = {
  bubble: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    color: "#fff",
    fontSize: "0.9rem",
    width: "20px",
    padding: "5px 10px",
  },
};
