import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import { Alert } from 'reactstrap';
import Pagination from '../../common/Pagination/Pagination';
import Sort from '../../common/Sort/Sort';
import Spinner from '../../common/Spinner/Spinner';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      presentPage: props.initialPage,
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
    const { products, request, pages, initialPage, presentSorting, changeSorting } = this.props;
    const { perPage } = this.state;
    const { onLoadProductsByPage } = this;

    let { pagination } = this.props;
    if(typeof(pagination) == 'undefined') pagination = true;

    let paginationContent = '';
    if(pagination) paginationContent = <Pagination pages={pages} perPage={perPage} initialPage={initialPage} onPageChange={onLoadProductsByPage} />;

    if(!request.pending && request.success && products.length > 0)
      return (
        <div>
          <Sort presentSorting={presentSorting} onSortChange={changeSorting}/>
          <ProductsList products={products} />
          {paginationContent}
        </div>
      );
    if(request.pending || request.success === null)
      return (
        <div>
          <Spinner/>
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
