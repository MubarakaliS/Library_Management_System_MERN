import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideBarItem from '../../SideNavbar/SideBarItem';
import AddBookForm from '../AddBook/AddBook';
import { Navigate } from 'react-router-dom';
const AddBook = () => {

    const hasToken = JSON.parse(localStorage.getItem('auth'));

    // If token is not true, navigate to '/'
    if (!hasToken) {
      return <Navigate to="/" />;
    }
    return (
        <Container fluid style={{ "margin": "0px", "padding": "0px" }}>

            <Row style={{ "height": "100%",marginRight:'0px' }} className='gap-1'>
                <Col className='col-2 col-md-4' style={{ "height": "100%"}}>
                    {/* <Sidebar onItemClick={handleItemClick} />
           */}
                    <SideBarItem />
                </Col>
                <Col className='col-9 col-md-7' style={{ "height": "100%"}}>
                    <AddBookForm/>
                </Col>
            </Row>
        </Container>
        
    )
}

export default AddBook