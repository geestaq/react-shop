import { connect } from 'react-redux';
import { getProductsInCart, insertProduct, removeProduct, deleteProduct } from '../../../redux/cartRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  products: getProductsInCart(state),
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: (id) => dispatch(insertProduct(id)),
  removeProductFromCart: (id) => dispatch(removeProduct(id)),
  deleteProductFromCart: (id) => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
