import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          {`พบ ${this.props.filteredProducts.length} รายการ`}
        </div>
        <div className="col-md-4">
          <label>
            ราคา
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">ทั้งหมด</option>
              <option value="lowestprice">ราคาต่ำ-ราคาสูง</option>
              <option value="highestprice">ราคาสูง-ราคาต่ำ</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {" "}
            ประเภทของสัตว์เลี้ยง
            <select
              className="form-control"
              value={this.props.type}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">ทั้งหมด</option>
              <option value="แมว">แมว</option>
              <option value="สุนัข">สุนัข</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  type: state.products.type,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);
