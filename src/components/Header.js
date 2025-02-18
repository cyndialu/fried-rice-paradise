import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <Navbar dark color='dark' sticky='top' expand='md'>
            <NavbarBrand className='ms-5 col-4' href='/'>
                {/* <img src={NucampLogo} alt='nucamp logo' className='float-start' /> */}
                <h3 className='mt-1'>Fried Rice Paradise</h3>
            </NavbarBrand>
            <div className='d-flex justify-content-end ms-5 col-3'>
                <a className='btn' href='/cart'>
                    <i className='fa fa-shopping-cart' style={{ color: 'white' }} />
                </a>
            </div>
            <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
            <Collapse isOpen={navbarOpen} navbar className='col'>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/menu'>Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>About us</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;