import React from 'react';
import { PropTypes } from 'prop-types';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Spinner from '../../common/Spinner/Spinner';
import { Grid } from 'svg-loaders-react';
import { Alert, Row, Col, Button } from 'reactstrap';
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
    const { singleProduct, request, location } = this.props;
    const product = singleProduct;

    let content = '';
    if(!request.pending && request.success && product !== null)
      content = <article id={`product-${product.id}`}>
        <div className="single-product">
          <h3>{product.name}</h3>
          <Row>
            <Col md="6">
              <img src={`/images/products/${product.id}/${product.image}`} className="img-fluid"/>
            </Col>
            <Col>
              <div className="markers">aaa</div>
            </Col>
            <Col>
              <div className="buttons">
                <Button color="success" size="lg" block onClick={() => this.onAddToCart()}>
                  Dodaj do koszyka
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <HtmlBox>{singleProduct.description}</HtmlBox>
            </Col>
          </Row>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Informacja</ModalHeader>
          <ModalBody>
            Produkt został dodany do koszyka
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>Zamknij</Button>
          </ModalFooter>
        </Modal>
      </article>;
    if(request.pending || request.success === null)
      content = <Spinner/>;
    if(!request.pending && request.error !== null)
      content = <Alert color="error">{request.error}</Alert>;
    if(!request.pending && request.success && singleProduct === null)
      content = <Alert color="info">Produkt nie istnieje</Alert>;

    return (
      <div>
        {content}
      </div>
    );
  }

};

SingleProduct.propTypes = {
  singleProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  loadSingleProduct: PropTypes.func.isRequired,
};

export default SingleProduct;
