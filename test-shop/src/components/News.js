import React, { Component } from "react";
import New from "./Products";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredproductsData: [] };
  }
  componentWillMount() {
    fetch("http://localhost:5000/products?animal=cat")
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
      <div className="">
        <New
          products={this.state.filteredproductsData}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
