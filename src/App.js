import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import { Title } from "./components/Title";
import { NavBar } from "./components/NavBar";

class App extends Component {
  state = {
    productos: [
      { name: "tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "lechuga", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Arbejas", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carro: [
      /*{
        name: "tomate",
        price: 1500,
        img: "/productos/tomate.jpg",
        cantidad: 1,
      },*/
    ],
  };
  agregarAlCarro = (producto) => {
    const { carro } = this.state;

    if (carro.find((el) => el.name === producto.name)) {
      const newCarro = carro.map((el) => {
        return el.name === producto.name
          ? { ...el, cantidad: el.cantidad + 1 }
          : el;
      });

      return this.setState({
        carro: newCarro,
      });
    }

    return this.setState({
      carro: [...carro, { ...producto, cantidad: 1 }],
    });
  };

  render() {
    return (
      <div>
        <NavBar cartItems={this.state.carro} />
        <Layout>
          <Title title="Tienda" />
          <Productos
            addCart={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
