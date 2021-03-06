import React from 'react';
import {connect} from 'react-redux';
import ProductShow from './product_show';
import {requestProduct, requestProducts} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    product: state.entities.products[ownProps.match.params.id],
    products: state.entities.products
  }
)};

const mapDispatchToProps = (dispatch) => ({
  requestProduct: (id) => dispatch(requestProduct(id)),
  requestProducts: () => dispatch(requestProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)