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
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-bootstrap/Pagination";

  function ReviewProduct(props) {
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
                <div class="title">
                    Đánh giá sản phẩm
                </div>
                <div class="search">
                  <input
                    type="text"
                    class="fill_name"
                    placeholder="Nhập tên sản phẩm"
                  />
                  <button class="btn btn-primary">Tìm kiếm</button>
                </div>
              </div>
              
              <Container style={{ margin: "0px", maxWidth: "100%" }}>
                <Row>
                    <Col xs={4} style={{textAlign: "center"}}>
                        <img src={myProduct} style={{width: "80%"}}/>
                    </Col>

                    <Col xs={8}>
                        <h1>Samsung Galaxy A04</h1>
                        <p style={{color: "red", fontWeight: "bold", fontSize: "25px"}}>2.590.000 đ  <span style={{fontSize: "20px", textDecorationLine: "line-through", color: "gray"}}>2.990.000 đ</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non obcaecati error cumque dolor cum. Quam, impedit, consequatur maiores dolore earum, eum odio iste tenetur dolorem assumenda mollitia quisquam eveniet?</p>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col style={{backgroundColor: "lightgrey"}}>
                        <h4 style={{fontWeight: "bold"}}>Đánh giá & nhận xét Samsung Galaxy A04 | Chính hãng VN/A</h4>
                        <div class="container" style={{ margin: "0px", maxWidth: "100%", display: "flex"}}>
                            <div>
                                <h5 style={{fontWeight: "bold", }}>5.0/5</h5>
                            </div>
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
  
  export default ReviewProduct;
  