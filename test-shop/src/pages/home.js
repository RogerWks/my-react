import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../logo_2.png";
import Basket from "../components/Basket";
import Filter from "../components/Filter";
import News from "../components/News";
import Populars from "../components/Populars";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredproductsData: [] };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <br />
            <Basket />
            <Filter />
            <div className="list-group shadow">
              <li className="list-group-item d-flex justify-content-between align-items-center active">
                เมนูลัด
              </li>
              <Link
                to="/all"
                className="list-group-item list-group-item-action"
              >
                สินค้าทั้งหมด
              </Link>
              <Link
                to="/new"
                className="list-group-item list-group-item-action"
              >
                สินค้าใหม่
              </Link>
              <Link to="#" className="list-group-item list-group-item-action">
                สินค้าขายดี
              </Link>
              <Link
                to="/dog"
                className="list-group-item list-group-item-action"
              >
                สุนัข
              </Link>
              <Link
                to="/cat"
                className="list-group-item list-group-item-action"
              >
                แมว
              </Link>
              <Link
                to="/bird"
                className="list-group-item list-group-item-action"
              >
                นก
              </Link>
              <Link
                to="/aqua"
                className="list-group-item list-group-item-action"
              >
                สัตว์น้ำ
              </Link>
            </div>
          </div>
          <div className="col-sm-9">
            <br />
            <img
              src={logo}
              className="rounded mx-auto d-block"
              alt=""
              width="460"
              height="145"
            />
            <br />
            <h5>
              สินค้าใหม่
              <hr />
            </h5>

            <News />
            <h5>
              สินค้าขายดี
              <hr />
              <Populars />
            </h5>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
