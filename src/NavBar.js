import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        NAVI
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="./">Home</Nav.Link>
                        <Nav.Link href="./Request">Raise Request</Nav.Link>
                        <Nav.Link href="./RequestManagement">Request Management</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

