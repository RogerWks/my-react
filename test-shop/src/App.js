/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import logo from "./logo_2.png";
import { Provider } from "react-redux";
import Basket from "./components/Basket";
import store from "./store";

const loading = () => (
  <div className="container">
    <button class="btn btn-primary">
      <span class="spinner-border spinner-border-sm"></span>
      Loading..
    </button>
  </div>
);

const Home = React.lazy(() => import("./pages/Home"));
const All = React.lazy(() => import("./pages/All"));
const Cat = React.lazy(() => import("./pages/animal/Cat"));
const Dog = React.lazy(() => import("./pages/animal/Dog"));
const Bird = React.lazy(() => import("./pages/animal/Bird"));
const Aqua = React.lazy(() => import("./pages/animal/Aqua"));
const Promotion1 = React.lazy(() => import("./pages/promotion75%"));
const Pic101 = React.lazy(() => import("./PicPage/Pic101"));
const Pic102 = React.lazy(() => import("./PicPage/Pic102"));
const Pic103 = React.lazy(() => import("./PicPage/Pic103"));
const Pic104 = React.lazy(() => import("./PicPage/Pic104"));
const Pic105 = React.lazy(() => import("./PicPage/Pic105"));
const Pic106 = React.lazy(() => import("./PicPage/Pic106"));
const Pic107 = React.lazy(() => import("./PicPage/Pic107"));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="">
          <Navbar />

          <Suspense fallback={loading()}>
            <Switch>
              <Route path="/all">
                <All />
              </Route>
              <Route path="/cat">
                <Cat />
              </Route>
              <Route path="/dog">
                <Dog />
              </Route>
              <Route path="/aqua">
                <Aqua />
              </Route>
              <Route path="/bird">
                <Bird />
              </Route>
              <Route path="/101">
                <Pic101 />
              </Route>
              <Route path="/102">
                <Pic102 />
              </Route>
              <Route path="/103">
                <Pic103 />
              </Route>
              <Route path="/104">
                <Pic104 />
              </Route>
              <Route path="/105">
                <Pic105 />
              </Route>
              <Route path="/106">
                <Pic106 />
              </Route>
              <Route path="/107">
                <Pic107 />
              </Route>
              <Route path="/promotion75">
                <Promotion1 />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
          <div className="jumbotron text-center" style={{ marginBottom: "0" }}>
            <p>ติดต่อเรา</p>
            <p>
              17/4 Village No.5 Bamroongrat Road, Pibulsongkram Sub-district,
              <br />
              Muang District, Bangkok, 10400
              <br />
              Telephone number : 087-XXXX-XXX
              <br />
              Email : petshop.Test@email.com
            </p>
          </div>
        </div>
      </Provider>
    );
  }
}
