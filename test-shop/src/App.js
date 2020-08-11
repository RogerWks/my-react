import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";

import Navbar from "./components/Navbar";

const loading = () => (
  <div className="container">
    <button class="btn btn-primary">
      <span class="spinner-border spinner-border-sm"></span>
      Loading..
    </button>
  </div>
);
const Home = React.lazy(() => import("./pages/home"));

export default class App extends Component {
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
      <div>
        <Navbar />
        <div className="container-fluid">
          <Products products={this.state.filteredproductsData} />
          <Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}
