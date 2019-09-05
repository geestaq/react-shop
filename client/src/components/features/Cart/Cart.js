import React from 'react';
import { PropTypes } from 'prop-types';
import { Alert, Row, Col, Table } from 'reactstrap';
import CartProductsList from '../CartProductsList/CartProductsList';
//import './Cart.scss';

class Cart extends React.Component {

  componentDidMount() {
    console.log("didMount");
    //const { loadSingleProduct, resetRequest, match } = this.props;
    //resetRequest();
    //loadSingleProduct(match.params.id);
  }

  render() {
    const { products, addProductToCart, removeProductFromCart, deleteProductFromCart } = this.props;

    let content = '';
    if(products.length === 0) {
      content = <Alert color="info">Koszyk jest pusty</Alert>;
    }
    else
    {
      content = <div className="cart">
        <Row>
          <Col>
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produkt</th>
                  <th>Cena</th>
                  <th>Ilość</th>
                  <th>Wartość</th>
                  <th></th>
                </tr>
              </thead>
              <CartProductsList
                products={products}
                addProductToCart={addProductToCart}
                removeProductFromCart={removeProductFromCart}
                deleteProductFromCart={deleteProductFromCart} />
            </Table>
          </Col>
        </Row>
      </div>
    }
/*
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
*/
    return (
      <div>
        {content}
      </div>
    );
  }

};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.number,
};

export default Cart;
