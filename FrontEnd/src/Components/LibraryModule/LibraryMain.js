// App.js

import React, { useState } from 'react';
import Sidebar from './SideBar';
import MainContent from './MainContent';
import { Container, Row, Col } from 'react-bootstrap';
import SideBarItem from '../../SideNavbar/SideBarItem';

const LibraryMain = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          {/* <Sidebar onItemClick={handleItemClick} />
           */}
           <SideBarItem onItemClick={handleItemClick}/>
        </Col>
        <Col>
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default LibraryMain;
