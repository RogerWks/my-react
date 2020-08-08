import React, { Component } from "react";
import Alls from "../components/Alls";
import Filter from "../components/Filter";
import store from "../store";
import { Provider } from "react-redux";

export default class All extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <br />
          <div className="row">
            <div className="col">
              <p className="font-weight-bolder">
                สินค้าทั้งหมด
                <hr />
              </p>
            </div>
            <div className="col">
              <Filter />
            </div>
          </div>
          <div className="">
            <Alls />
          </div>
        </div>
      </Provider>
    );
  }
}
