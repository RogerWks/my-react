import React, { Component } from "react";
import Flys from "../../components/Products";

export default class Fly extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredproductsData: [] };
  }
  componentWillMount() {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
          filteredproductsData: data,
        })
      );
  }
  render() {
    return (
      <div className="row">
        <Flys
          products={this.state.filteredproductsData}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
