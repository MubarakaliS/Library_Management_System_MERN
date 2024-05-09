import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import UserAccount from '../UserAccount/UserAccount';
import SideBarItemUser from '../../SideNavbar/SideBarItemUser';
import { Navigate } from 'react-router-dom';

const UserAccountModule = () => {
    const hasToken = JSON.parse(localStorage.getItem('user'));

    // If token is not true, navigate to '/'
    if (!hasToken) {
      return <Navigate to="/" />;
    }
    return (
        <Container fluid style={{ "margin": "0px", "padding": "0px" }}>

            <Row style={{ "height": "100%",marginRight:'0px' }}>
                <Col className='col-3' style={{ "height": "100%"}}>
                   <SideBarItemUser/>
                </Col>
                <Col className='col-7 mt-5' style={{ "height": "100%",backgroundColor:'#D9EDBF',borderRadius:'30px'}} >
                    <UserAccount/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAccountModule