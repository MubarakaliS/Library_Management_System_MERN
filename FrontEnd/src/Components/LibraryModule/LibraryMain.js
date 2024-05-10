
import React, { useState } from 'react';
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
