import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">
                <h3>หน้าหลัก</h3>
              </a>
            </li>
          </ul>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              สินค้า
            </a>
            <div
              class="dropdown-menu dropright mydropdowncss shadow"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                สุนัข
              </a>

              <div
                className="dropdown-menu mydropdowncss shadow"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  อาหารสุนัข
                </a>
                <a class="dropdown-item" href="#">
                  ของเล่นสุนัข
                </a>
              </div>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                แมว
              </a>

              <div
                className="dropdown-menu shadow "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  อาหารแมว
                </a>
                <a className="dropdown-item" href="#">
                  ของเล่นแมว
                </a>
              </div>
            </div>
          </li>
        </nav>
      </div>
    );
  }
}
