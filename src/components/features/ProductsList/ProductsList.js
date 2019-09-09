import React from 'react';
import { PropTypes } from 'prop-types';
import { Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProductsList.scss';

const ProductsList = ({ products }) => (
  <div className="products-list">
    <Row>
      {products.map((item, index) => <Col key={index} lg="4" md="6">
        <Link to={`/product/${item.id}`} className="product-item">
          <div className="product-image">
            <img src={`./images/products/${item.id}/${item.image}`} className="img-fluid" />
            <div className="product-markers">
              {item.new ? <div className="new">Nowość</div> : ``}
              {item.promotion ? <div className="promotion">Promocja</div> : ``}
            </div>
          </div>
          <div className="product-title">{item.name}</div>
          <div className="product-price">
            <span className="text-muted font-weight-normal">Cena: </span>{item.price} {item.currency}
            {item.oldPrice ? <span className="old-price">{item.oldPrice}</span> : ``}
          </div>
          <div className="product-data">
            <Table dark size="sm">
              <tbody>
                <tr>
                  <td>Silnik:</td>
                  <td>{item.data.engine}</td>
                </tr>
                <tr>
                  <td>Moc:</td>
                  <td>{item.data.power}</td>
                </tr>
                <tr>
                  <td>Moment obrotowy:</td>
                  <td>{item.data.torque}</td>
                </tr>
                <tr>
                  <td>Drzwi:</td>
                  <td>{item.data.doors}</td>
                </tr>
                <tr>
                  <td>Miejsca:</td>
                  <td>{item.data.seats}</td>
                </tr>
              </tbody>
            </Table>
          </div>
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
