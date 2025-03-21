import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

    const totalAmount = cartItems.reduce((sum, item) => sum + item.itemPrices, 0);

    console.log('Cart items: ', cartItems)

    const tax = totalAmount * 0.06;

    return (
        <Container className='my-5'>
            <h1>Your Cart</h1>
            {cartItems && cartItems.length > 0 ? (
                <Container className='my-5'>
                    {
                        cartItems.map((cartItem) => (
                            <Row key={cartItem.itemId} className='my-3 p-3 border rounded'>
                                <Col md={4}>
                                    <h5>{cartItem.itemName}</h5>
                                    {cartItem.instruction && (
                                        <p className='text-muted small'>
                                            Special instructions: {cartItem.instruction}
                                        </p>
                                    )}
                                </Col>
                                <Col md={3}>
                                    <div className='d-flex align-items-center'>
                                        <Button
                                            size='sm'
                                            color='light'
                                            onClick={() => updateQuantity(cartItem.itemId, cartItem.itemQuantity - 1)}
                                            disabled={cartItem.itemQuantity <= 1}
                                        >
                                            <i className="fa fa-minus" />
                                        </Button>
                                        <span className='mx-3'>{cartItem.itemQuantity}</span>
                                        <Button
                                            size='sm'
                                            color='light'
                                            onClick={() => updateQuantity(cartItem.itemId, cartItem.itemQuantity + 1)}
                                        >
                                            <i className="fa fa-plus" />
                                        </Button>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <p>${cartItem.itemPrices}</p>
                                </Col>
                                <Col md={2}>
                                    <Button
                                        color='secondary'
                                        size='sm'
                                        className='rounded-pill'
                                        onClick={() => removeFromCart(cartItem.itemId)}
                                    >
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        ))
                    }
                    <div className="d-flex justify-content-center mb-5">
                        <Link to='/menu'>
                            <Button color='danger' className='mx-2 rounded-pill'>
                                Add Item
                            </Button>
                        </Link>
                        <Button color='danger' className='mx-2 rounded-pill' onClick={clearCart}>
                            Clear Cart
                        </Button>
                    </div>
                    <hr />
                    <div className="my-5">
                        <h4>Your Total</h4>
                        <div className="mt-4" style={{ maxWidth: '500px' }}>
                            <div className="d-flex justify-content-between">
                                <p>Subtotal</p>
                                <p>${totalAmount.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <p>Tax</p>
                                <p>${tax.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <b>Total</b>
                                <p>${(totalAmount + tax).toFixed(2)}</p>
                            </div>
                            <Button
                                color='danger'
                                size='md'
                                className='rounded-pill my-3 float-end'>Proceed to Checkout</Button>
                        </div>
                    </div>
                </Container>
            ) : (
                <div className="text-center">
                    <h4>-- Your cart is empty --</h4>
                    <Link to='/menu'>
                        <Button color='danger'
                            className='rounded-pill mt-3'
                            size='md'
                        >
                            Add Item
                        </Button>
                    </Link>
                </div>

            )}
        </Container>
    );
};

export default Cart;