import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import { Alert } from 'reactstrap';
import Pagination from '../../common/Pagination/Pagination';
import Sort from '../../common/Sort/Sort';
import Spinner from '../../common/Spinner/Spinner';
import './Products.scss';

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
        <section className="products">
          <Sort presentSorting={presentSorting} onSortChange={changeSorting}/>
          <ProductsList products={products} />
          {paginationContent}
        </section>
      );
    if(request.pending || request.success === null)
      return (
        <section className="products">
          <Spinner/>
        </section>
      );
    if(!request.pending && request.error !== null)
      return <section className="products">
        <Alert color="danger">{request.error}</Alert>
      </section>;
    if(!request.pending && request.success && products.length === 0)
      return <section className="products">
        <Alert color="info">Brak produktów</Alert>
      </section>;
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
