import React from 'react';
import { PropTypes } from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProductsList.scss';

const ProductsList = ({ products }) => (
  <div className="products-list">
    <Row>
      {products.map((item, index) => <Col key={index} md="4">
        <Link to={`/product/${item.id}`} className="product-item">
          <div className="product-image">
            <img src={`./images/products/${item.id}/${item.image}`} className="img-fluid" />
          </div>
          <div className="product-title">{item.name}</div>
          <div className="product-price">{item.price}</div>
        </Link>
      </Col>)}
    </Row>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default ProductsList;
