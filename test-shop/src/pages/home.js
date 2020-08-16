import React, { Component } from "react";
import { Link } from "react-router-dom";

import Basket from "../components/Basket";
import News from "../components/News";
import Populars from "../components/Populars";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <br />
            <Basket />
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
              <Link
                to="/popular"
                className="list-group-item list-group-item-action"
              >
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

            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://www.commartthailand.com/wp-content/uploads/2020/01/1140X170-PROMOTION-1.jpg"
                    class="d-block w-100"
                    alt="..."
                    width="460"
                    height="145"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://hoonhoonbeauty.com/wp-content/uploads/2017/04/AdobeStock_262035364_Promotion-1024x382.jpeg"
                    class="d-block w-100"
                    alt="..."
                    width="460"
                    height="145"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.caggioni.com/media/catalog/category/240_F_119977157_IyhBdygWnp30FWRkKGldoOQ4t8YFo4Sw.jpg"
                    class="d-block w-100"
                    alt="..."
                    width="460"
                    height="145"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
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
