import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import { Alert } from 'reactstrap';
//import Pagination from '../../common/Pagination/Pagination';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //presentPage: props.initialPage || 1,
      //perPage: props.postsPerPage || props.initialPostsPerPage
    };
  }

  componentDidMount() {
    const { loadProducts, resetRequest } = this.props;
    //const { presentPage, perPage } = this.state;
    resetRequest();
    loadProducts();
  }

  render() {
    const { products, request } = this.props;

    if(!request.pending && request.success && products.length > 0)
      return (
        <div>
          <ProductsList products={products} />
        </div>
      );
    if(request.pending || request.success === null)
      return (
        <div>
          spinner
        </div>
      );
    if(!request.pending && request.error !== null)
      return <Alert color="danger">{request.error}</Alert>;
    if(!request.pending && request.success && products.length === 0)
      return <Alert color="info">Brak produktów</Alert>;
  }

};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  //pages: PropTypes.number.isRequired,
  //loadPostsByPage: PropTypes.func.isRequired,
  //initialPage: PropTypes.number,
  //postsPerPage: PropTypes.number,
};

export default Products;
