import React, { useState } from "react";
import "./addProductForm.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Dropdown } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { getAllCategory } from "../../api/userApi";
function AddProductForm(props) {
  const [form, setForm] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    setShowWarning(true);
  };

  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedAccountType(eventKey);
  };

  return (
    <div className="background">
      <div className="form">
        <div className="form_header">
          <h3>Add Product</h3>
          <FontAwesomeIcon
            className="icon"
            icon={faX}
            onClick={() => props.setShowForm(false)}
          ></FontAwesomeIcon>
        </div>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Product code" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="3">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="dark" id="account-type-dropdown">
                  {selectedAccountType || "Category"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Phone">Phone</Dropdown.Item>
                  <Dropdown.Item eventKey="Tablet">Tablet</Dropdown.Item>
                  <Dropdown.Item eventKey="Watch">Watch</Dropdown.Item>
                  <Dropdown.Item eventKey="Laptop">Laptop</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm="3">
              <Form.Control type="text" placeholder="Price" />
            </Col>
            <Col sm="3">
              <Form.Control type="text" placeholder="Sale Percent" />
            </Col>
            <Col sm="3">
              <Dropdown onSelect={() => {}}>
                <Dropdown.Toggle variant="dark" id="account-type-dropdown">
                  {selectedAccountType || "Color"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
                  <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="Pink">Pink</Dropdown.Item>
                  <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="Grey">Grey</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="5">
              <Form.Control type="text" placeholder="Manufacturer" />
            </Col>
            <Col sm="7">
              <Form.Control type="file" placeholder="Description Html" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Image" />
            </Col>
          </Form.Group>
          <Form.Group>
            <button
              class="btn btn-success"
              onClick={() => props.setShowForm(false)}
            >
              Save
            </button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AddProductForm;
