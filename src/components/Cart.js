import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

    const totalAmount = cartItems.reduce((sum, item) => sum + item.itemPrices, 0);

    console.log('Cart items: ', cartItems)

    return (
        <Container className='m-5'>
            <h2>Your Cart</h2>
            {cartItems && cartItems.length > 0 ? (
                <>
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
                                            color='secondary'
                                            size='sm'
                                            onClick={() => updateQuantity(cartItem.itemId, cartItem.itemQuantity - 1)}
                                            disabled={cartItem.itemQuantity <= 1}
                                        >
                                            -
                                        </Button>
                                        <span className='mx-2'>{cartItem.itemQuantity}</span>
                                        <Button
                                            color='secondary'
                                            size='sm'
                                            onClick={() => updateQuantity(cartItem.itemId, cartItem.itemQuantity + 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <p>${cartItem.itemPrices}</p>
                                </Col>
                                <Col md={2}>
                                    <Button
                                        color='danger'
                                        size='sm'
                                        onClick={() => removeFromCart(cartItem.itemId)}
                                    >
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        ))
                    }
                    <Row className='mt-4'>
                        <Col md={8}>
                            <Link to='/menu'>
                                <Button color='danger' className='mx-2'>
                                    Add Item
                                </Button>
                            </Link>
                            <Button color='danger' className='mx-2' onClick={clearCart}>
                                Clear Cart
                            </Button>
                        </Col>
                        <Col md={4}>
                            <h4>Your Total: ${totalAmount.toFixed(2)}</h4>
                        </Col>
                    </Row>
                </>
            ) : (
                <p>Your cart is empty</p>
            )}
        </Container>
    );
};

export default Cart;