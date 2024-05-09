import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideBarItem from '../../SideNavbar/SideBarItem';
import BookIssueForm from '../BookIssue/BookIssueForm';
import { Navigate } from 'react-router-dom';
const BookIssue = () => {
    
    const hasToken = JSON.parse(localStorage.getItem('auth'));

    // If token is not true, navigate to '/'
    if (!hasToken) {
      return <Navigate to="/" />;
    }
    return (
        <Container fluid style={{ "margin": "0px", "padding": "0px" }}>

            <Row style={{ height: "100%",marginRight:'0px'}} className='gap-1'>
                <Col className='col-2 col-md-3' style={{ "height": "120vh"}}>
                    {/* <Sidebar onItemClick={handleItemClick} />
           */}
                    <SideBarItem />
                </Col>
                <Col className='col-8 col-md-7' style={{ "height": "100%"}}>
                    <BookIssueForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default BookIssue