import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'reactstrap';

class CartProductsList extends React.Component {

  onItemAdd = (id) => {
    const { addProductToCart } = this.props;
    addProductToCart(id);
  }

  onItemRemove = (id) => {
    const { removeProductFromCart } = this.props;
    removeProductFromCart(id);
  }

  onItemDelete = (id) => {
    const { deleteProductFromCart } = this.props;
    deleteProductFromCart(id);
  }

  render() {
    const { products } = this.props;
    return (
      <tbody>
        {products.map((item, index) => <tr key={index}>
          <th scope="row">{index}</th>
          <td>{item.product.name}</td>
          <td>{item.product.price}</td>
          <td>
            <Button onClick={() => this.onItemAdd(item.product.id)} size="sm">+</Button>
            <span className="px-2">{item.quantity}</span>
            <Button onClick={() => this.onItemRemove(item.product.id)} size="sm">-</Button>
          </td>
          <td>{Math.round(parseFloat(item.quantity) * parseFloat(item.product.price) / 100) * 100}</td>
          <td>
            <Button onClick={() => this.onItemDelete(item.product.id)} color="danger" size="sm" title="Usuń z koszyka">×</Button>
          </td>
        </tr>)}
      </tbody>
    );
  }
}

CartProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.object.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

export default CartProductsList;
