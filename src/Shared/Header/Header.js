import { signOut } from 'firebase/auth';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user.displayName);

  const handleSignOut=()=>{
    signOut(auth);
  }

    return (
    
            <>

 
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about">
                About
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user?
                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out -  {user?.displayName}</button>
              :
              <Nav.Link as={Link} to ="login">
              Login
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            </>
        );
    
};

export default Header;