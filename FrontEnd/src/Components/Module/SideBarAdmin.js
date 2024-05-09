import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SideBarItem from '../../SideNavbar/SideBarItem';
import MainContent from '../LibraryModule/MainContent';
import { Navigate } from 'react-router-dom';
const SideBarAdmin = () => {
    const hasToken = JSON.parse(localStorage.getItem('auth'));

    // If token is not true, navigate to '/'
    if (!hasToken) {
      return <Navigate to="/" />;
    }
    return (
        <Container fluid style={{ "margin": "0px", "padding": "0px" }}>

            <Row style={{ "height": "100%",marginRight:'0px' }}>
                <Col className='col-3' style={{ "height": "100%"}}>
                    {/* <Sidebar onItemClick={handleItemClick} />
           */}
                    <SideBarItem />
                </Col>
                <Col className='col-7' style={{ "height": "100%"}}>
                    <MainContent/>
                </Col>
            </Row>
        </Container>
        
    )
}

export default SideBarAdmin