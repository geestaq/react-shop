import { connect } from 'react-redux';
import { getProducts, getRequest, resetRequest, loadProductsByPageWithSortRequest, getPages, getProductsPerPage, getSort, changeSortingRequest } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialProductsPerPage: getProductsPerPage(state),
  presentSorting: getSort(state),
})

const mapDispatchToProps = dispatch => ({
  //loadProducts: () => dispatch(loadProductsRequest()),
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageWithSortRequest(page, productsPerPage)),
  resetRequest: () => dispatch(resetRequest()),
  changeSorting: (newSort) => dispatch(changeSortingRequest(newSort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
