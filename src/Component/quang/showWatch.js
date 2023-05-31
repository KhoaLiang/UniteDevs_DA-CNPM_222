import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import "../../css/quang/showProduct.css";
import React, { useState } from 'react';
import myAvatar from "../../img/image1.png";
import productImage15 from "../../img/applewatch.png";
import productImage16 from "../../img/smartwatch.png";
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
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function ShowWatch() {
  const [links, setLinks] = useState([
    { title: "Phone", url: "./phone" },
    { title: "Laptop", url: "./laptop" },
    { title: "Watch", url: "./watch" },
    { title: "Tablet", url: "./tablet" }
  ]);

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filteredLinks = links.filter(link =>
      link.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredLinks.length > 0) {
      const firstLink = filteredLinks[0];
      window.location.href = firstLink.url;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedProduct(eventKey);
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
        <h5>Siêu thị điện thoại</h5>

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
                <a href='./adm_man_pro'>
                <div class="edit-item manage-product">
                  <FontAwesomeIcon
                    icon={faBars}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Sản phẩm
                </div>
                </a>
                <a href='./adm_ord'>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Đơn hàng
                </div>
                </a>
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
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle>{selectedProduct || "Watch"}</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="/adm_man_pro" eventKey="All Products">Tất cả</Dropdown.Item>
                <Dropdown.Item href="/adm_man_pro/phone" eventKey="Phone">Phone</Dropdown.Item>
                <Dropdown.Item href="/adm_man_pro/tablet" eventKey="Tablet">Tablet</Dropdown.Item>
                <Dropdown.Item href="/adm_man_pro/watch" eventKey="Watch">Watch</Dropdown.Item>
                <Dropdown.Item href="/adm_man_pro/laptop" eventKey="Laptop">Laptop</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div class="search">
              <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  class="fill_name"
                  placeholder="Nhập tên sản phẩm"
                />
                <button class="btn btn-primary" onClick={handleSearch}>Tìm kiếm</button>
                <button class="btn btn-primary">Thêm sản phẩm</button>
              </div>
            </div>

            <Container style={{ margin: "0px", maxWidth: "100%" }}>
              <Row style={{ width: "100%", textAlign: "center" }}>
                <Col
                  md={2}
                  style={{
                    margin: "0px 25px 10px",
                    backgroundColor: "lightgray",
                    padding: "10px",
                  }}
                >
                  <div class="product_card">
                    <img src={productImage15} />
                    <h5>Apple Watch SE 2022 40mm</h5>
                    <p>7.490.000đ</p>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <ButtonGroup>
                      <Button href="/adm_rev_pro" variant="info">
                        Xem đánh giá
                      </Button>
                      <Button href="#" variant="success">
                        <FontAwesomeIcon icon={faPen} />
                      </Button>
                    </ButtonGroup>
                  </div>
                </Col>

                <Col
                  md={2}
                  style={{
                    margin: "0px 25px 10px",
                    backgroundColor: "lightgray",
                    padding: "10px",
                  }}
                >
                  <div class="product_card">
                    <img src={productImage16} />
                    <h5>Đồng hồ thông minh Amazfit GTS 4 Mini</h5>
                    <p>2.590.000đ</p>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#eeff00" }}
                    />
                    <ButtonGroup>
                      <Button href="/adm_rev_pro" variant="info">
                        Xem đánh giá
                      </Button>
                      <Button href="#" variant="success">
                        <FontAwesomeIcon icon={faPen} />
                      </Button>
                    </ButtonGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShowWatch;
