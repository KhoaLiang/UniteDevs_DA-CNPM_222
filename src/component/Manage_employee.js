import { Table,Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import '../css/Manage_employee.css'
import myAvatar from '../img/image1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import {faChartLine} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import AddEmployeeForm from './AddEmployeeForm'
import InfoEmployee from './InfoEmployee'
import DeleteEmployee from './DeleteEmployee'
function Manage_employee(props) {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  }

  const handleHideForm = () => {
    setShowForm(false);
  }
  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  }
  return (
    <div style={{padding: '0px'}}>
        <div style={{ backgroundColor: '#eb5b69',color:'#fff',display:'flex',justifyContent:'space-between', textAlign:'center', alignItems:'center',padding:'5px 20px'}}>
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

    <Container style={{margin: '0px', maxWidth: '100%'}} >
    <Row style={{width:'100%'}}>
        <Col md={2}>
            <div style={{backgroundColor: 'rgba(243, 244, 246, 1)',height:'100%', position:'relative'}}>
                <div class="image_info_arrow">
                  <div class="image_info">
                    <div class="image">
                        <img src={myAvatar} class="myAvatar" alt="mô tả hình ảnh" />
                    </div>
                    <div class="info">
                        Hello Admin
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faArrowLeft} class="icon"></FontAwesomeIcon>
                  </div>
                </div>     
                <div class="manage-item">
                <div class="edit-item">
                  <FontAwesomeIcon icon={faHome} class="icon-1"></FontAwesomeIcon>
                  Trang chủ
                </div>
                <div class="edit-item">
                <FontAwesomeIcon icon={faUser} class="icon-1"></FontAwesomeIcon>
                  Quản lý thành viên
                </div>
                <div class="edit-item">
                <FontAwesomeIcon icon={faBars} class="icon-1"></FontAwesomeIcon>
                  Sản phẩm
                </div>
                <div class="edit-item">
                <FontAwesomeIcon icon={faBagShopping} class="icon-1"></FontAwesomeIcon>
                  Đơn hàng
                </div>
                <div class="edit-item">
                <FontAwesomeIcon icon={faChartLine} class="icon-1"></FontAwesomeIcon>
                  Thống kê
                </div>
                <div class="edit-item manage-employee">
                <FontAwesomeIcon icon={faUsers} class="icon-1"></FontAwesomeIcon>
                  Quản lý nhân viên
                </div>
                </div>
            </div>
        </Col>
        <Col md={10}>
          <div class="manage_search">
            <div class="employee_list">
              Danh sách nhân viên
            </div>
            <div class="search">
              <div class="fill_telephone">
                Nhập số điện thoại
              </div>
              <button class="btn btn-primary">
                Tìm kiếm
              </button>
              <button class="btn btn-primary" onClick={handleShowForm}>
                Thêm nhân viên
              </button>
              {showForm && <AddEmployeeForm />}

            </div>
          </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>User</th>
          <th>Tên</th>
          <th>Số điện thoại</th>
          <th>Loại tài khoản</th>
          <th>Hoạt động</th>
        </tr>
      </thead>
      <tbody>

          <tr>
            <td>lequoctrang4</td>
            <td>Lê Quốc Trạng</td>
            <td>0399609015</td>
            <td>Nhân viên</td>
            <td><button type="button" class="btn btn-success dieu_chinh">Thông tin</button>
            <button type="button" class="btn btn-danger dieu_chinh" onClick={handleShowDelete}>Xóa NV</button></td>
          </tr>
          <tr>
            <td>lequoctrang4</td>
            <td>Lê Quốc Trạng</td>
            <td>0399609015</td>
            <td>Nhân viên</td>
            <td><button type="button" class="btn btn-success dieu_chinh">Thông tin</button>
            <button type="button" class="btn btn-danger dieu_chinh" onClick={handleShowDelete}>Xóa NV</button></td>
          </tr>
          <tr>
            <td>lequoctrang4</td>
            <td>Lê Quốc Trạng</td>
            <td>0399609015</td>
            <td>Nhân viên</td>
            <td><button type="button" class="btn btn-success dieu_chinh">Thông tin</button>
            <button type="button" class="btn btn-danger dieu_chinh" onClick={handleShowDelete}>Xóa NV</button></td>
          </tr>
          {showDelete && <DeleteEmployee />}
      </tbody>
    </Table>
        </Col>
      </Row>
    </Container>
   
    </div>
  );
}

export default Manage_employee;
