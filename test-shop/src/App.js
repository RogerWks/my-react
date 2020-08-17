/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Suspense } from "react";
import logo from "./logo_2.png";
import { Route, Link, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Basket from "./components/Basket";
import "./App.css";

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
const Popular = React.lazy(() => import("./pages/Popular"));
const New = React.lazy(() => import("./pages/New"));
const Dog = React.lazy(() => import("./pages/animal/Dog"));
const Cat = React.lazy(() => import("./pages/animal/Cat"));
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
              </div>
              <div className="dropdown dropleft">
                <ul className="navbar-nav justify-content-end">
                  <li class="nav-item dropdown mydropdowncss">
                    <Link
                      to="#"
                      class="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      ตะกร้าสินค้า &nbsp;
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-basket"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>
                    </Link>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="#">
                        <Basket />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Suspense fallback={loading()}>
            <Switch>
              <Route path="/all">
                <All />
              </Route>
              <Route path="/popular">
                <Popular />
              </Route>
              <Route path="/new">
                <New />
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
              <Route path="/dog">
                <Dog />
              </Route>
              <Route path="/cat">
                <Cat />
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
