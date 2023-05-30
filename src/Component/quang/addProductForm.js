import React, { useState } from "react";
import "../../css/quang/addProductForm.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Dropdown } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function AddProductForm() {
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    setShowWarning(true);
  };

  const [showForm, setShowForm] = useState(false);

  const handleHideForm = () => {
    setShowForm(false);
  };
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedAccountType(eventKey);
  };

  return (
    <div className="background">
      <div className="form">
        <div className="form_header">
          <h3>Thêm sản phẩm</h3>
          <FontAwesomeIcon
            icon={faX}
            class="icon"
            onClick={handleHideForm}
          ></FontAwesomeIcon>
        </div>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Tên sản phẩm" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Mô tả sản phẩm" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Form.Control type="text" placeholder="Giá bán" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="dark" id="account-type-dropdown">
                  {selectedAccountType || "Chọn loại sản phẩm"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Phone">Phone</Dropdown.Item>
                  <Dropdown.Item eventKey="Tablet">Tablet</Dropdown.Item>
                  <Dropdown.Item eventKey="Watch">Watch</Dropdown.Item>
                  <Dropdown.Item eventKey="Laptop">Laptop</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm="6">
              <Form.Control type="text" placeholder="Nhãn hàng" />
            </Col>
          </Form.Group>
          <Form.Group>
            <button class="btn btn-success" onClick={handleHideForm}>
              Lưu thông tin
            </button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AddProductForm;
