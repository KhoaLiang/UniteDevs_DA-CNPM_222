import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
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
import axios from "axios";

function ShowProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("http://localhost/phone_shop_api/products")
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data);
      });
  }
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
                <div class="edit-item manage-product">
                  <FontAwesomeIcon
                    icon={faBars}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Sản phẩm
                </div>
                <div class="edit-item">
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
              <DropdownButton
                id="dropdown-basic-button"
                title="Danh mục sản phẩm"
              >
                <Dropdown.Item href="#">Iphone</Dropdown.Item>
                <Dropdown.Item href="#">Tablet</Dropdown.Item>
                <Dropdown.Item href="#">Watch</Dropdown.Item>
              </DropdownButton>
              <div class="search">
                <input
                  type="text"
                  class="fill_name"
                  placeholder="Nhập tên sản phẩm"
                />
                <button class="btn btn-primary">Tìm kiếm</button>
                <button class="btn btn-primary">Thêm sản phẩm</button>
              </div>
            </div>
            <Container style={{ margin: "0", maxWidth: "100%" }}>
              <Row>
                {/* <Col>
                  {products.map((product, key) => (
                    <div key={key} class="card_product">
                      <img src={myProduct} style={{width: "20%"}} />
                      <h4>{product.name}</h4>
                      <p>{product.price}</p>
                    </div>
                  ))}
                </Col> */}

                {products.map((product, key) => (
                  <Col key={key} class="card_product">
                    <img src={myProduct} style={{width: "20%"}} />
                      <h4>{product.name}</h4>
                      <p>{product.price}</p>
                  </Col>
                ))}
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
