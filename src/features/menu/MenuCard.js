import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import MenuForm from './MenuForm';


const MenuCard = ({ menu }) => {
    const { name, image, description, price } = menu;
    return (
        <Card className='my-3'>
            <CardImg width='100%' src={image} alt={name} />
            <CardBody>
                <CardTitle className='h5'>{name}</CardTitle>
                <CardText>{description}</CardText>
                <div className='d-flex justify-content-between'>
                    <p>${price}</p>
                    <MenuForm menu={menu} />
                </div>
            </CardBody>
        </Card>
    );
};

export default MenuCard;