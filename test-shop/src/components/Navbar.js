import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand" href="/">
            หน้าหลัก
          </a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                สินค้า
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                แบรนด์
              </a>
            </li>
            <ul className="navbar-nav justify-content-end">
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Dropdown link
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Link 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Link 2
                  </a>
                  <a class="dropdown-item" href="#">
                    Link 3
                  </a>
                </div>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    );
  }
}
