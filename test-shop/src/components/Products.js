import React, { Component } from "react";
import axios from "axios";

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map((product) => (
      <div>{product.title}</div>
    ));
    return <div>{productItems}</div>;
  }
}
