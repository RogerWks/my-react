import React, { Component } from "react";
import Populars from "../components/Populars";
import News from "../components/News";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="">
          <img
            src="https://www.commartthailand.com/wp-content/uploads/2020/01/1140X170-PROMOTION-1.jpg"
            width="900"
            heigh="150"
          />
        </div>
        <br />
        <div className="">
          <img
            src="https://www.commartthailand.com/wp-content/uploads/2020/01/1140X170-PROMOTION-1.jpg"
            width="900"
            heigh="150"
          />
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://fg.lnwfile.com/_/fg/_raw/fr/6s/yt.jpg"
                    alt=""
                    width="500"
                    height="300"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://fitsmallbusiness.com/wp-content/uploads/2018/05/23-Best-Sales-Promotion-Ideas.png"
                    alt=""
                    width="500"
                    height="300"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/178/023/original/vector-modern-sale-and-promotion-banner-design-template.jpg"
                    alt=""
                    width="500"
                    height="300"
                  />
                </div>
              </div>
              <div className="text-center">
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Link to="/promotion75">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/279/608/original/sale-poster-for-shopping-discount-retail-product-promotion-vector-illustration-sale-banner-template.jpg"
                width="420"
                height="300"
              />
            </Link>
          </div>
        </div>
        <br />
        <p className="font-weight-bolder">
          สินค้ามาใหม่
          <hr />
        </p>
        <News />
        <br />
        <p className="font-weight-bolder">
          สินค้าขายดี
          <hr />
        </p>
        <Populars />
        <hr />
      </div>
    );
  }
}
