import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import { Alert, Row, Col, Button, Table } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './SingleProduct.scss';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    const { loadSingleProduct, resetRequest, match } = this.props;
    resetRequest();
    loadSingleProduct(match.params.id);
  }

  onAddToCart = () => {
    const { addProductToCart, match } = this.props;
    addProductToCart(match.params.id);
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { singleProduct, request } = this.props;
    const product = singleProduct;

    let content = '';
    if(!request.pending && request.success && product !== null)
      content = <div className="single-product">
          <div className="product-title">
            <h3>{product.name}</h3>
          </div>
          <Row>
            <Col lg="6">
              <img src={`/images/products/${product.id}/${product.image}`} className="img-fluid" alt=""/>
            </Col>
            <Col lg="3">
              <div className="product-markers">
                {singleProduct.new ? <div className="new">Nowość</div> : ``}
                {singleProduct.promotion ? <div className="promotion">Promocja</div> : ``}
              </div>
              <div className="product-data">
                <Table dark size="sm">
                  <tbody>
                    <tr>
                      <td>Silnik:</td>
                      <td>{singleProduct.data.engine}</td>
                    </tr>
                    <tr>
                      <td>Moc:</td>
                      <td>{singleProduct.data.power}</td>
                    </tr>
                    <tr>
                      <td>Moment obrotowy:</td>
                      <td>{singleProduct.data.torque}</td>
                    </tr>
                    <tr>
                      <td>Drzwi:</td>
                      <td>{singleProduct.data.doors}</td>
                    </tr>
                    <tr>
                      <td>Miejsca:</td>
                      <td>{singleProduct.data.seats}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col lg="3">
              <div className="product-price">
                <span className="text-muted font-weight-normal">Cena: </span>{singleProduct.price} {singleProduct.currency}
              </div>
              {singleProduct.oldPrice ? <div className="product-old-price">{singleProduct.oldPrice}</div> : ``}
              <div className="buttons">
                <Button color="success" size="lg" block onClick={() => this.onAddToCart()}>
                  Dodaj do koszyka
                </Button>
              </div>
            </Col>
          </Row>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Informacja</ModalHeader>
            <ModalBody>
              Produkt został dodany do koszyka
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>Zamknij</Button>
            </ModalFooter>
          </Modal>
        </div>;
    if(request.pending || request.success === null)
      content = <Spinner/>;
    if(!request.pending && request.error !== null)
      content = <Alert color="error">{request.error}</Alert>;
    if(!request.pending && request.success && singleProduct === null)
      content = <Alert color="info">Produkt nie istnieje</Alert>;

    return (
      <div className="content">
        {content}
      </div>
    );
  }

};

SingleProduct.propTypes = {
  singleProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  loadSingleProduct: PropTypes.func.isRequired,
};

export default SingleProduct;
