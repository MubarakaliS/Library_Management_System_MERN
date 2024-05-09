import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideBarItem from '../../SideNavbar/SideBarItem';
import BookIssueReturnReportForm from '../IssueReport/BookReturnReportForm';
import { Navigate } from 'react-router-dom';
const ReturnBook = () => {
    const hasToken = JSON.parse(localStorage.getItem('auth'));

    // If token is not true, navigate to '/'
    if (!hasToken) {
      return <Navigate to="/" />;
    }
    return (
        <Container fluid style={{ "margin": "0px", "padding": "0px" }}>

            <Row style={{ "height": "100%",marginRight:'0px' }}>
                <Col className='col-2 col-md-4 col-lg-3' style={{ "height": "100%"}}>
                    {/* <Sidebar onItemClick={handleItemClick} />
           */}
                    <SideBarItem />
                </Col>
                <Col className='col-9 col-md-7 col-lg-8' style={{ "height": "100%"}}>
                    <BookIssueReturnReportForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default ReturnBook