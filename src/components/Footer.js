import { Container, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Container fluid className='footer p-5 my-5' id='footer'>
                <Row>
                    <Col sm='3' className='p-3'>
                        <h6>NAVIGATION</h6>
                        <ul className='list-unstyled'>
                            <li>
                                <Link className='link-style' to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='link-style' to='/menu'>Menu</Link>
                            </li>
                            <li>
                                <Link className='link-style' to='/about'>About us</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col className='p-3'>
                        <h6>CONTACT</h6>
                        <p>
                            <a href='tel:+16462407587' className='link-dark'>
                                <i className='fa fa-phone' /> 646-240-7587
                            </a>
                        </p>
                        <p>
                            <a className='link-dark' href='mailto:cyndialu@gmail.com'>
                                <i className='fa fa-envelope-o' /> cyndialu@gmail.com
                            </a>
                        </p>
                    </Col>
                    <Col sm='5' className='p-3'>
                        <h6>OPEN HOURS</h6>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>Tuesday - Thursday</td>
                                    <td>11am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Friday - Saturday</td>
                                    <td>11am - 10pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>12pm - 9pm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
            </Container>
            <Container fluid className='text-white bg-dark text-center p-2'>
                <p>&copy; 2025 Fried Rice Paradise. All Rights Reserved.</p>
                <p>Designed by Xinheng Lu</p>
            </Container>
        </>
    );
};

export default Footer;