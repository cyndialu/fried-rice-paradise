import { Container, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
//import '../styles/HomePage.css';
import { selectRiceMenu } from '../features/menu/menuSlice';
import MenuCard from '../features/menu/MenuCard';
const HomePage = () => {
    const riceMenu = selectRiceMenu();
    return (
        <>
            <Container fluid className='heading p-5'>
                <div className='text-center'>
                    <p className='banner'>Welcome to Fried Rice Paradise</p>
                    <h2 className='slogan'>A bowl of rice A whole of delights</h2>
                </div>
            </Container>
            <Container fluid className='story text-center my-5 p-5'>
                <h1>Our Story</h1>
                <p className='mt-4'>Inspired and named by the owner's daughter Evelyn, Fried Rice Paradise is a family-oriented business established in 2025.
                    We strike to provide fresh homemade food with healthy ingredients. We care about our daughters, we care about your kids,
                    and we care about you.</p>
                <p>If you love fried rice and want a healthier version than those you get from other restaurants, Fried Rice Paradise will be your best option.</p>
                <Link to='/about'>
                    <Button size='lg' variant='light' className='mt-3'>Read More</Button>
                </Link>
            </Container>
            <Container fluid className='menu my-5 p-5'>
                <h1>On the Menu</h1>
                <Row className='ms-auto'>
                    {
                        riceMenu.map(rice => {
                            return (
                                <Col md='4'>
                                    <MenuCard menu={rice} key={rice.id} />
                                </Col>
                            );
                        })
                    }
                </Row>
                <Link to='/menu'>
                    <Button size='lg' variant='light' className='mt-3'>
                        <i className='fa fa-cutlery' /> View Full Menu
                    </Button>
                </Link>
            </Container>
        </>
    );
};

export default HomePage;