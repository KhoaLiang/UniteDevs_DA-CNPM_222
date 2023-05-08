import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useState } from "react";
import "../../css/quang/showProduct.css";
import myAvatar from "../../img/image1.png";
import myProduct from "../../img/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import AddEmployeeForm from "./addProductForm";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-bootstrap/Pagination";
import Nav from "react-bootstrap/Nav";

function ShowProduct(props) {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };
  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  };
  return (
    <div style={{ padding: "0px" }}>
      <div
        style={{
          backgroundColor: "#eb5b69",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
          padding: "5px 20px",
        }}
      >
        <h4>Siêu thị điện thoại</h4>

        <div class="image_notify">
          <div class="notify">
            <FontAwesomeIcon icon={faBell} class="icon-2"></FontAwesomeIcon>
          </div>
          <div class="setting">
            <FontAwesomeIcon icon={faGear} class="icon-2"></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <Container style={{ margin: "0px", maxWidth: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col md={2}>
            <div
              style={{
                backgroundColor: "rgba(243, 244, 246, 1)",
                height: "100%",
                position: "relative",
              }}
            >
              <div class="image_info_arrow">
                <div class="image_info">
                  <div class="image">
                    <img src={myAvatar} class="myAvatar" alt="mô tả hình ảnh" />
                  </div>
                  <div class="info">Hello Admin</div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    class="icon"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div class="manage-item">
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faHome}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Trang chủ
                </div>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faUser}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Quản lý thành viên
                </div>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faBars}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Sản phẩm
                </div>
                <div class="edit-item manage-product">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Đơn hàng
                </div>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Thống kê
                </div>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faUsers}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Quản lý nhân viên
                </div>
              </div>
            </div>
          </Col>
          <Col md={10}>
            <div class="manage_search">
              <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="#">Xác nhận</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Giao hàng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Đã giao thành công</Nav.Link>
                </Nav.Item>
              </Nav>
              <div class="search">
                <input
                  type="text"
                  class="fill_name"
                  placeholder="Nhập mã đơn hàng"
                />
                <button class="btn btn-primary">Tìm kiếm</button>
              </div>
            </div>

            <Container>
              <Row style={{backgroundColor: "lightgrey", marginBottom: "16px"}}>
                <Col md={6}>
                  <div>
                    Đơn hàng: #00001 <br />
                    Tên khách hàng: <br />
                    Số điện thoại:
                    <br />
                    Email: <br />
                    Địa chỉ:
                    <ul style={{ listStyleType: "none" }}>
                      <li>Số nhà</li>
                      <li>Phường/Xã</li>
                      <li>Quận/Huyện</li>
                      <li>Thành phố/Tỉnh</li>
                    </ul>
                  </div>
                </Col>

                <Col style={{ position: "relative" }}>
                  <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    style={{ textAlign: "center", marginTop: "16px", border: "1px" }}
                  >
                    <thead>
                      <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Iphone 13 Promax - Vàng</td>
                        <td>x1</td>
                        <td>31.000.000 đ</td>
                      </tr>
                      <tr>
                        <td>Samsung Galaxy A50</td>
                        <td>x1</td>
                        <td>31.000.000 đ</td>
                      </tr>
                    </tbody>
                  </Table>

                  <div style={{ position: "absolute", right: "16px" }}>
                    <p>Tổng tiền: 62.000.000 đ</p>
                    <div style={{display: "flex", flexDirection: "row"}}>
                    <Button variant="success">Xác nhận</Button>
                    <Button variant="danger">Hủy bỏ</Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row style={{backgroundColor: "lightgrey", marginBottom: "16px"}}>
                <Col md={6}>
                  <div>
                    Đơn hàng: #00001 <br />
                    Tên khách hàng: <br />
                    Số điện thoại:
                    <br />
                    Email: <br />
                    Địa chỉ:
                    <ul style={{ listStyleType: "none" }}>
                      <li>Số nhà</li>
                      <li>Phường/Xã</li>
                      <li>Quận/Huyện</li>
                      <li>Thành phố/Tỉnh</li>
                    </ul>
                  </div>
                </Col>

                <Col style={{ position: "relative" }}>
                  <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    style={{ textAlign: "center", marginTop: "16px", border: "1px"}}
                  >
                    <thead>
                      <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Iphone 13 Promax - Vàng</td>
                        <td>x1</td>
                        <td>31.000.000 đ</td>
                      </tr>
                      <tr>
                        <td>Samsung Galaxy A50</td>
                        <td>x1</td>
                        <td>31.000.000 đ</td>
                      </tr>
                    </tbody>
                  </Table>

                  <div style={{ position: "absolute", right: "16px" }}>
                    <p>Tổng tiền: 62.000.000 đ</p>
                    <div style={{display: "flex", flexDirection: "row"}}>
                    <Button variant="success">Xác nhận</Button>
                    <Button variant="danger">Hủy bỏ</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShowProduct;
