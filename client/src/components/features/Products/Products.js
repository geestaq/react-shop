import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import { Alert } from 'reactstrap';
import Pagination from '../../common/Pagination/Pagination';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      presentPage: props.initialPage || 1,
      perPage: props.productsPerPage || props.initialProductsPerPage
    };
  }

  onLoadProductsByPage = (page, productsPerPage) => {
    const { loadProductsByPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  }

  componentDidMount() {
    const { loadProductsByPage, resetRequest } = this.props;
    const { presentPage, perPage } = this.state;
    resetRequest();
    loadProductsByPage(presentPage, perPage);
  }

  render() {
    const { products, request, pages, initialPage } = this.props;
    const { perPage } = this.state;
    const { onLoadProductsByPage } = this;

    let { pagination } = this.props;
    if(typeof(pagination) == 'undefined') pagination = true;

    let paginationContent = '';
    if(pagination) paginationContent = <Pagination pages={pages} perPage={perPage} initialPage={initialPage} onPageChange={onLoadProductsByPage} />;

    if(!request.pending && request.success && products.length > 0)
      return (
        <div>
          <ProductsList products={products} />
          {paginationContent}
        </div>
      );
    if(request.pending || request.success === null)
      return (
        <div>
          spinner
          {paginationContent}
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
  pages: PropTypes.number.isRequired,
  loadProductsByPage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  productsPerPage: PropTypes.number,
};

export default Products;
