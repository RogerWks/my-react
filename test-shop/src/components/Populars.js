import React, { Component } from "react";
import Popular from "./Products";

export default class Populars extends Component {
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
        <Popular
          products={this.state.filteredproductsData}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
