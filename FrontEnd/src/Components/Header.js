import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar from './LibraryModule/SideBar';
import LibraryMain from './LibraryModule/LibraryMain';
import { Navigate, useNavigate } from 'react-router-dom';
import AdminLogin from './Login/AdminLogin';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminFromServer } from '../Slice/AdminSlice';
import UserLogin from './Login/UserLogin';

function Header() {
    const navigate = useNavigate();
    const LibraryMain = () => {
        navigate('/sideBar');
        console.log("Library");
    }
    const Admin = () => {
        console.log("admin click")
        setModalShow(true)
        // navigate('/adminSignIn')
    }
    const User = () => {
        console.log("User click")
        
        setUserModalShow(true)
        // navigate('/adminSignIn')
    }

    const [modalShow, setModalShow] = useState(false);
    const [userModalShow, setUserModalShow] = useState(false);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary sticky">
                <Container fluid>
                    <Navbar.Brand href="#">MCA Library</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 mx-5 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <NavDropdown title="Modules" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={LibraryMain}>Library Module</NavDropdown.Item>
                                <NavDropdown.Item onClick={Admin} >
                                    Admin Login
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={User}>
                                    User Login
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" >
                                Faculties
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            {/* <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            /> */}
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <AdminLogin
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
             <UserLogin
                show={userModalShow}
                onHide={() => setUserModalShow(false)}
            />
           
        </>
    );
}

export default Header;