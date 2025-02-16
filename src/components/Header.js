import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <Navbar dark color='dark' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
            {/* <img src={NucampLogo} alt='nucamp logo' className='float-start' /> */}
            <h3 className='mt-1'>Fried Rice Paradise</h3>
            </NavbarBrand>

            <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
            <Collapse isOpen={navbarOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>About us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/menu'>Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;