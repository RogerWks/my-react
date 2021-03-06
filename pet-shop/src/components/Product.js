import React, { Component } from "react";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <Link to={`${product.sku}`}>
            <img
              src={`products/${product.animal}.jpg`}
              width="200"
              height="200"
              alt={product.title}
            />

            <p>{product.title}</p>
          </Link>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-secondary"
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
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
            &nbsp; หยิบใส่ตะกร้า
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart })(Product);
