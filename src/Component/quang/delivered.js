import {
    Table,
    Container,
    Row,
    Col
  } from "react-bootstrap";
  import "../../css/quang/showProduct.css";
  import myAvatar from "../../img/image1.png";
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
  import Button from "react-bootstrap/Button";
  import Nav from "react-bootstrap/Nav";
  
  function ShowDelivered(props) {
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
                <Nav variant="pills" defaultActiveKey="/adm_delivered">
                  <Nav.Item>
                    <Nav.Link href="/adm_ord" eventKey="confirm">Xác nhận</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/adm_deliver" eventKey="deliver">Giao hàng</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/adm_delivered">Đã giao thành công</Nav.Link>
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
                      <span style={{fontWeight: "bold"}}>Đơn hàng: #00001</span> <br />
                      <span style={{fontWeight: "bold", fontStyle: "italic"}}>Tên khách hàng:</span> Lê Quốc Trạng <br />
                      <span style={{fontWeight: "bold", fontStyle: "italic"}}>Số điện thoại:</span> 0399609015
                      <br />
                      <span style={{fontWeight: "bold", fontStyle: "italic"}}>Email:</span> lequoctrang4@gmail.com <br />
                      <span style={{fontWeight: "bold", fontStyle: "italic"}}>Địa chỉ:</span>
                      <ul style={{ listStyleType: "none" }}>
                        <li><span style={{fontWeight: "bold", fontStyle: "italic"}}>Số nhà:</span> KTX Khu A, Tổ 5, Khu phố 2</li>
                        <li><span style={{fontWeight: "bold", fontStyle: "italic"}}>Phường/Xã:</span> Đông Hòa</li>
                        <li><span style={{fontWeight: "bold", fontStyle: "italic"}}>Quận/Huyện:</span> TP.Thủ Đức</li>
                        <li><span style={{fontWeight: "bold", fontStyle: "italic"}}>Thành phố/Tỉnh:</span> TP.Hồ Chí Minh</li>
                      </ul>
                      <span style={{fontWeight: "bold"}}>Đã giao hàng lúc:</span> 15:08:07 25/02/2023
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
                      <p style={{fontWeight: "bold", fontSize: "20px"}}>Tổng tiền: 62.000.000đ</p>
                      <div style={{display: "flex", flexDirection: "row"}}>
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
  
  export default ShowDelivered;
  