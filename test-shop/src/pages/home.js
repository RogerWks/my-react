import React, { Component } from "react";
import Products from "../components/Products";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredproductsData: [] };
  }
  componentDidMount() {
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
      <div className>
        <div className="row">
          <div className="col-sm-3">
            <div className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center active">
                เมนูลัด
              </li>
              <a href="#" className="list-group-item list-group-item-action">
                สินค้าทั้งหมด
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                สินค้าใหม่
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                สินค้าขายดี
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                สุนัข
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                แมว
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                นก
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                สัตว์น้ำ
              </a>
            </div>
          </div>
          <div className="col-sm-9">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg">Fake Image</div>
            <br />
            <h5>
              สินค้าใหม่
              <hr />
            </h5>

            <Products products={this.state.filteredproductsData} />
            <h5>
              สินค้าขายดี
              <hr />
            </h5>
          </div>
        </div>
        <br />
        <div class="jumbotron text-center" style={{ marginBottom: "0" }}>
          <p>Footer</p>
        </div>
      </div>
    );
  }
}
