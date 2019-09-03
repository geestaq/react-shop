import { connect } from 'react-redux';
import { getProducts, getRequest, resetRequest, loadProductsByPageRequest, getPages, getProductsPerPage } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialProductsPerPage: getProductsPerPage(state),
})

const mapDispatchToProps = dispatch => ({
  //loadProducts: () => dispatch(loadProductsRequest()),
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
