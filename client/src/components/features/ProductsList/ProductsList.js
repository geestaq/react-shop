import React from 'react';
import { PropTypes } from 'prop-types';
import { Row, Col } from 'reactstrap';

const ProductsList = ({ products }) => (
  <Row>
    <Col className="products-list">
      <Row>
        {products.map(item => <Col key={item.id}>
          <div className="product-item">
            <h3>{item.name}</h3>
          </div>
        </Col>)}
      </Row>
    </Col>
  </Row>
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
