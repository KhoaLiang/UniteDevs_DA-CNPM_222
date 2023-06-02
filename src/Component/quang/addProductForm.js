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
  const [form, setForm] = useState({
    code: '',
    name: '',
    category_id: '',
    color: '',
    sale_percent: '',
    price: '',
    manualfacturer: '',
    html: '',
    image: '',
    key: [],
    value: []
  });
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    setShowWarning(true);
  };

  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedAccountType(eventKey);
  };
  const handleChangeText = async (event) => {
    await setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    await console.log(form);
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
              <Form.Control type="text" placeholder="Product code" name="code" onChange={handleChangeText} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" onChange={handleChangeText}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="3">
              <Dropdown onSelect={handleChangeText} onSelect={handleSelect} name="category_id">
                <Dropdown.Toggle variant="dark" id="account-type-dropdown">
                  {selectedAccountType || "Category"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Phone</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Tablet</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Laptop</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Watch</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm="3">
              <Form.Control type="text" placeholder="Price" name="price" onChange={handleChangeText}/>
            </Col>
            <Col sm="3">
              <Form.Control type="text" placeholder="Sale Percent" name="sale_percent" onChange={handleChangeText}/>
            </Col>
            <Col sm="3">
              <Dropdown onSelect={handleChangeText}>
                <Dropdown.Toggle variant="dark" id="account-type-dropdown" name="color" onChange={handleChangeText}>
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
              <Form.Control type="text" placeholder="Manufacturer" name="manufacturer" onChange={handleChangeText}/>
            </Col>
            <Col sm="7">
              <Form.Control type="file" placeholder="Description Html" name="html" onChange={handleChangeText} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Image" name="image" onChange={handleChangeText}/>
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
