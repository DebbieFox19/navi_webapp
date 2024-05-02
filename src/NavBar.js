
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth';
import useUser from './hooks/useUser';


function NavBar() {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="./">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        NAVI
                    </Navbar.Brand>
                    <Nav className="ml-auto" style={{ padding: '0 10px' }}>
                        <Nav.Link href="./">Home</Nav.Link>
                        <span style={{ padding: '0 10px' }}></span> {/* Add padding here */}
                        <Nav.Link href="./Request">Raise Request</Nav.Link>
                        <span style={{ padding: '0 10px' }}></span>
                        <Nav.Link href="./RequestManagement">Request Management</Nav.Link>
                        <span style={{ padding: '0 10px' }}></span>
                        {user
                        ? <button style={{backgroundColor: '#BED3AB', borderColor: '#BED3AB', color: '#06040A', fontWeight: 'bold'}} className="btn btn-outline-success" onClick={() => {
                            signOut(getAuth());
                        }}>Log Out</button>
                        : <button style={{backgroundColor: '#BED3AB', borderColor: '#BED3AB', color: '#06040A', fontWeight: 'bold'}} className="btn btn-outline-success" onClick={() => {
                            navigate('/signin');
                        }}>Log In</button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;
