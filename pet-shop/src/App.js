/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Suspense } from "react";
import logo from "./logo_2.png";
import { Route, Link, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Basket from "./components/Basket";

const loading = () => (
  <div className="container">
    <button class="btn btn-primary">
      <span class="spinner-border spinner-border-sm"></span>
      Loading..
    </button>
  </div>
);
const All = React.lazy(() => import("./pages/All"));
const Home = React.lazy(() => import("./pages/Home"));
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <br />
                <img
                  src={logo}
                  className="rounded mx-auto d-block"
                  alt=""
                  width="460"
                  height="145"
                />
              </div>
              <div className="col-sm-6 text-left">
                <div className="container p-3 my-3 rounded border border-info">
                  <p>
                    17/4 Village No.5 Bamroongrat Road, Pibulsongkram
                    Sub-district,
                    <br />
                    Muang District, Bangkok, 10400
                    <br />
                    Telephone number : 087-XXXX-XXX
                    <br />
                    Email : petshop.Test@email.com
                  </p>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
              <a className="navbar-brand" href="/">
                หน้าหลัก
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/all" className="nav-link">
                      สินค้าทั้งหมด
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link"></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link"></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link"></Link>
                  </li>
                </ul>
                <ul className="navbar-nav justify-content-end">
                  <div className="btn-group dropleft">
                    <li className="nav-item dropdown">
                      <Link
                        to="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        ตะกร้า
                      </Link>
                      <div className="dropdown-menu">
                        <a className="dropdown-item">
                          <Basket />
                        </a>
                        <hr />
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
          <Suspense fallback={loading()}>
            <Switch>
              <Route path="/all">
                <All />
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
