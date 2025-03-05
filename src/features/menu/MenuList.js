import { Container, Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import MenuCard from './MenuCard';
import { selectRiceMenu, selectPastaMenu, selectSweetMenu } from './menuSlice';

const MenuList = () => {
    const riceMenu = useSelector(selectRiceMenu);
    const pastaMenu = useSelector(selectPastaMenu);
    const sweetMenu = useSelector(selectSweetMenu);
    return (
        <Container className='divMenu'>
            <h3 className='mt-5'>Fried Rice</h3>
            <hr />
            <Row className='ms-auto'>
                {
                    riceMenu.map(rice => {
                        return (
                            <Col md='4' key={rice.id}>
                                <MenuCard menu={rice} />
                            </Col>
                        );
                    })
                }
            </Row>
            <h3 className='mt-5'>Pasta</h3>
            <hr />
            <Row className='ms-auto'>
                {
                    pastaMenu.map(pasta => {
                        return (
                            <Col md='4' key={pasta.id}>
                                <MenuCard menu={pasta} />
                            </Col>
                        );
                    })
                }
            </Row>
            <h3 className='mt-5'>A Little Sweets</h3>
            <hr />
            <Row className='ms-auto'>
                {
                    sweetMenu.map(sweet => {
                        return (
                            <Col md='4' key={sweet.id}>
                                <MenuCard menu={sweet} />
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
};

export default MenuList;
