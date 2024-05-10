import React from 'react'
import AddStudentForm from '../LibraryModule/AddStudent'
import { Container, Row, Col } from 'react-bootstrap';
import SideBarItem from '../../SideNavbar/SideBarItem';
import { Navigate } from 'react-router-dom';
const AddStudent = () => {
    const hasToken = JSON.parse(localStorage.getItem('auth'));

    // If token is not true, navigate to '/'
    if (!hasToken) {
      return <Navigate to="/" />;
    }
    return (
        <Container fluid style={{ "margin": "0px", "padding": "0px" }}>
 
            <Row style={{ "height": "100%",marginRight:'0px'}} className='gap-1'>
                <Col className='col-2 col-md-4' style={{ "height": "100%"}}>
                    
                    <SideBarItem />
                </Col>
                <Col className='col-9 col-md-7' style={{ "height": "100%"}}>
                    <AddStudentForm />
                </Col>
            </Row>
        </Container>
    )
}

export default AddStudent