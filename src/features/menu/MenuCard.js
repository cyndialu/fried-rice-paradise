import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

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
                    <button className='btn btn-sm btn-danger add-button'>
                        <i class="fa fa-plus" /> Add
                    </button>
                </div>
            </CardBody>
        </Card>
    );
};

export default MenuCard;