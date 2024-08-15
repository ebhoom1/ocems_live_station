import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';

const FlowChart = () => {
  const [components, setComponents] = useState([]);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showDropdown , setShowDropdown] = useState(false)

  const handleAddComponent = (type, index) => {
    const newComponents = [...components];
    newComponents.splice(index + 1, 0, { type, id: components.length });
    setComponents(newComponents);
    setDropdownIndex(null);  // Close the dropdown after selection
  };

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center" >
        {!components.length && (
          <div className="tank border border-solid p-5 w-25 text-primary text-center">
            {/* Updated onClick handler */}
            <Button variant="primary" onClick={() => setShowDropdown(true)}>Add Tank</Button>          </div>
        )}
      </div>
      {showDropdown && (
        <DropdownButton id="dropdown-basic-button" title="Select Component">
          <Dropdown.Item onClick={() => handleAddComponent('tank')}>Tank</Dropdown.Item>
          <Dropdown.Item onClick={() => handleAddComponent('pump')}>Pump</Dropdown.Item>
          <Dropdown.Item onClick={() => handleAddComponent('filter')}>Filter</Dropdown.Item>
        </DropdownButton>
      )}

      <Row className="mt-3">
        {components.map((component, index) => (
          <React.Fragment key={component.id}>
            {component.type === 'tank' && <Tank />}
            {component.type === 'pump' && <Pump />}
            {component.type === 'filter' && <Filter />}
            
            {/* Show dropdown if dropdownIndex matches the current index */}
            {dropdownIndex === index ? (
              <Col>
                <DropdownButton id="dropdown-basic-button" title="Select Component" className="mt-2" onSelect={(type) => handleAddComponent(type, index)}>
                  <Dropdown.Item eventKey="tank">Tank</Dropdown.Item>
                  <Dropdown.Item eventKey="pump">Pump</Dropdown.Item>
                  <Dropdown.Item eventKey="filter">Filter</Dropdown.Item>
                </DropdownButton>
              </Col>
            ) : (
              /* Show + button if no dropdown is visible at this index */
              <Col className="d-flex align-items-center">
                <Button variant="outline-primary" onClick={() => setDropdownIndex(index)}>+</Button>
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

const Tank = () => (
    <Col>
    <div className="tank-container">
      <div className="tank">
        <div className="water level-75"></div> {/* 75% water level */}
        <div className="water level-50"></div> {/* 50% water level */}
        <div className="water level-25"></div> {/* 25% water level */}
      </div>
    </div>
  </Col>
);

const Pump = () => (
    <Col><div><img src="https://static.vecteezy.com/system/resources/thumbnails/003/216/422/small/vacuum-pump-icon-doodle-hand-drawn-or-outline-icon-style-vector.jpg" alt="" /></div></Col>
);

const Filter = () => (
    <Col><div><img src="https://thumbs.dreamstime.com/b/modern-water-filter-purifying-tap-drinking-outline-icon-representing-promoting-clean-safe-hydration-328038327.jpg" alt="" width='200px' /></div></Col>
);

export default FlowChart;
