import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalFooter, FormGroup, Label, Container, Col } from 'reactstrap';
import { Formik, Field, Form } from "formik";
import { CartContext } from "../../components/CartContext";

const MenuForm = ({ menu }) => {
    const { addToCart } = useContext(CartContext);
    const { id, name, description, price } = menu;
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const increment = () => {
        setQuantity(quantity + 1);
        setTotalPrice((quantity + 1) * price);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice((quantity - 1) * price);
        }
    };

    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = (values) => {
        const order = {
            itemId: id,
            itemName: name,
            instruction: values.instructionTxt,
            itemQuantity: quantity,
            itemPrice: price,
            itemPrices: totalPrice
        };

        console.log('Submitting order: ', order);
        addToCart(order);
        setModalOpen(false);
        setQuantity(1);
    };

    return (
        <>
            <Button className='btn-danger add-button rounded-pill btn-sm'
                onClick={() => setModalOpen(true)}
            >
                <i className="fa fa-plus" /> Add
            </Button>
            <Modal size='lg' isOpen={modalOpen}>
                <Container className='p-3'>
                    <ModalHeader toggle={() => setModalOpen(false)}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </ModalHeader>
                    <Formik
                        initialValues={{
                            instructionTxt: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='instructionTxt'>Special Instructions:</Label>
                                <Field
                                    name='instructionTxt'
                                    as='textarea'
                                    rows='5'
                                    className='form-control'
                                    placeholder='We will try to accommodate any special requests but do not guarantee it will meet your needs.Extra Charges may apply.'
                                />
                            </FormGroup>
                            <ModalFooter>
                                <Col xs='3'>
                                    <button
                                        type='button'
                                        className='btn btn-sm'
                                        onClick={decrement}
                                    >
                                        <i className="fa fa-minus" />
                                    </button>
                                    <span className="mx-2 rounded-pill" >{quantity}</span>
                                    <button
                                        type='button'
                                        className='btn btn-sm'
                                        onClick={increment}
                                    >
                                        <i className="fa fa-plus" />
                                    </button>
                                </Col>
                                <Col>
                                    <Button
                                        type='submit'
                                        color='danger'
                                        className='rounded-pill col-12 d-flex justify-content-between'
                                    >
                                        <span>Add to Cart</span>
                                        <span>${totalPrice}</span>
                                    </Button>
                                </Col>
                            </ModalFooter>
                        </Form>
                    </Formik>
                </Container>
            </Modal>
        </>
    )
}

export default MenuForm;