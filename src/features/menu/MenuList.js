import { Container, Col, Row } from 'reactstrap';
import MenuCard from './MenuCard';
import { selectRiceMenu, selectPastaMenu, selectSweetMenu } from './menuSlice';

const MenuList = () => {
    const riceMenu = selectRiceMenu();
    const pastaMenu = selectPastaMenu();
    const sweetMenu = selectSweetMenu();
    return (
        <Container className='divMenu'>
            <h3 className='mt-5'>Fried Rice</h3>
            <hr />
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
            <h3 className='mt-5'>Pasta</h3>
            <hr />
            <Row className='ms-auto'>
                {
                    pastaMenu.map(pasta => {
                        return (
                            <Col md='4'>
                                <MenuCard menu={pasta} key={pasta.id} />
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
                            <Col md='4'>
                                <MenuCard menu={sweet} key={sweet.id} />
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
};

export default MenuList;
