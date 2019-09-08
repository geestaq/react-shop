import { connect } from 'react-redux';
import { getProductsInCart, getCart, insertProduct, removeProduct, deleteProduct, addDiscountCode, clearCart } from '../../../redux/cartRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  products: getProductsInCart(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: (id) => dispatch(insertProduct(id)),
  removeProductFromCart: (id) => dispatch(removeProduct(id)),
  deleteProductFromCart: (id) => dispatch(deleteProduct(id)),
  addDiscountCode: (code) => dispatch(addDiscountCode(code)),
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
