import React, { Component } from "react";
import "../App.css";
import Products from "../components/Products";
import Filter from "../components/Filter";
import Basket from "../components/Basket";
import { Provider } from "react-redux";
import store from "../store";

export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
