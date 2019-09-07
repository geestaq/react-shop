import React from 'react';
import { PropTypes } from 'prop-types';
import { Alert, Row, Col, Table, Button, Input } from 'reactstrap';
import CartProductsList from '../CartProductsList/CartProductsList';
import './Cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discountCode: props.cart.discountCode || '',
      showDiscountForm: false
    }
  }

  handleChangeDiscountCode = (e) => {
    this.setState({ discountCode: e.target.value });
//DEBUG
console.log({
  state: this.state
});
  }

  handleDiscountCodeForm = (e) => {
    this.setState({ showDiscountForm: true });

//DEBUG
console.log({
  state: this.state
});
  }

  handleAddDiscountCode = () => {
    const { addDiscountCode } = this.props;
    const { discountCode } = this.state;

    //zamkniecie formularza
    this.setState({
      showDiscountForm: false
    });

    addDiscountCode(discountCode);
  }

  handleRemoveDiscountCode = () => {
    const { addDiscountCode } = this.props;

    //usuniecie kodu
    this.setState({
      discountCode: ''
    });

    addDiscountCode('');
  }

  componentDidMount() {
    console.log("didMount");
//DEBUG
console.log({
  state: this.state
});

    //const { loadSingleProduct, resetRequest, match } = this.props;
    //resetRequest();
    //loadSingleProduct(match.params.id);
  }

  render() {
    const { products, cart, addProductToCart, removeProductFromCart, deleteProductFromCart } = this.props;
    const { showDiscountForm, discountCode } = this.state;

    let content = '';
    if(products.length === 0) {
      content = <Alert color="info">Koszyk jest pusty</Alert>;
    }
    else
    {
      let discountText = 'Brak';
      let discountButton = <Button onClick={(e) => this.handleDiscountCodeForm(e)} size="sm">+</Button>;
      let discountShortcut = '';

      if(showDiscountForm) {
        discountText = <Input
          type="text"
          name="discountCode"
          id="discountCode"
          placeholder="Wprowadź kod"
          onChange={(e) => this.handleChangeDiscountCode(e)}
          value={discountCode}
        />
        discountButton = <Button onClick={() => this.handleAddDiscountCode()} size="sm">Zatwierdź</Button>;
      }
      else
      {
        if(cart.discountCode && cart.discount > 0) {
          discountText = cart.discountAmount;
          discountButton = <Button onClick={() => this.handleRemoveDiscountCode()} size="sm" color="danger" title="Usuń kod rabatowy">×</Button>;
          discountShortcut = ` (${cart.discountCode} - ${cart.discount}%)`;
        }
        else
        {
          if(cart.discountCode && cart.discount === 0) {  //invalid code
            discountText = 'Nieprawidłowy kod';
          }
        }
      }

      content = <div className="cart">
        <Row>
          <Col>
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produkt</th>
                  <th className="text-right">Cena</th>
                  <th>Ilość</th>
                  <th className="text-right">Wartość</th>
                  <th></th>
                </tr>
              </thead>
              <CartProductsList
                products={products}
                addProductToCart={addProductToCart}
                removeProductFromCart={removeProductFromCart}
                deleteProductFromCart={deleteProductFromCart} />
              <tbody>
                <tr>
                  <td colSpan="4" className="text-right">RAZEM:</td>
                  <td className="text-right">{cart.total}</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="4" className="text-right">
                    KOD RABATOWY
                    {discountShortcut}
                    :
                  </td>
                  <td className="text-right">
                      {discountText}
                  </td>
                  <td className="text-right">
                    {discountButton}
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className="text-right">DO ZAPŁATY:</td>
                  <td className="text-right">{cart.total + cart.discountAmount}</td>
                  <td></td>
                </tr>
              </tbody>
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
