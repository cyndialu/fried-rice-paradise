import { Container } from "reactstrap";
import MenuList from "../features/menu/MenuList";

const MenuPage = () => {
    return (
        <>
            <Container fluid className='menuPageHeading'>
                <p className='menuPageHeadingTxt'>Taste of Our Homemade Food</p>
            </Container>
            <MenuList />
        </>

    )
};

export default MenuPage;