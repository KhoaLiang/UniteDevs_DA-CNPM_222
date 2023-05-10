import { Table,Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../../css/vien/Manage_employee.css'
import myAvatar from '../../img/image1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import {faChartLine} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faSignOut} from '@fortawesome/free-solid-svg-icons'
import AddEmployeeForm from './AddEmployeeForm'
import InfoEmployee from './InfoEmployee'
import DeleteEmployee from './DeleteEmployee'
import EditForm from './EditForm'
import LogOut from './LogOut'
import {getAllStaff} from '../../api/adminApi'
import {getUserByPhone} from '../../api/adminApi'
function Manage_employee() {
  const [showForm, setShowForm] = useState(false);
  const [showEditInfo, setShowEditInfo] =  useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [selectedEmployeeId1, setSelectedEmployeeId1] = useState(null);
  const [showLogOut, setShowLogOut] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const handleSearchClick = async () => {
    const phone = document.getElementById("phone-input").value;
    const token = localStorage.getItem('token');
    if (phone === "") {
      const res = await getAllStaff(token);
      setData(res);
    }
    else{
      const res = await getUserByPhone(token, phone);
      setData(res);
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  }
  
  const showEditForm = () => {
    setShowEditInfo(true);
  }
  const handleShowDeleteForm = (id) =>{
    setSelectedEmployeeId(id);
    setShowDeleteForm(true);
  }
  const handleInfoForm = (id) =>{
    setSelectedEmployeeId1(id);
    setShowInfoForm(true);
  }
  const showLogOutForm = () =>{
    setShowLogOut(true);
  }

  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const res = await getAllStaff(localStorage.getItem('token'));
      if (res && Array.isArray(res)) {
        setData(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const totalPage = Math.ceil(data.length / perPage);
  const indexOfLastStaff = currentPage * perPage;
  const indexOfFirstStaff = indexOfLastStaff - perPage;
  const currentStaffs = data.slice(indexOfFirstStaff, indexOfLastStaff);
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{padding: '0px',minWidth: '100vw'}}>
        <div style={{ backgroundColor: '#eb5b69',color:'#fff',display:'flex',justifyContent:'space-between', textAlign:'center', alignItems:'center',padding:'5px 20px'}}>
          <h4>Siêu thị điện thoại</h4>
        
          <div class="image_notify1">
            <div class="editinfo1">
            <FontAwesomeIcon icon={faEdit} class="icon-2" onClick={showEditForm}></FontAwesomeIcon>
            </div>
            {showEditInfo && <EditForm setShowEditInfo={setShowEditInfo} showEditInfo={showEditInfo}/>}
            <div class="logout">
            <FontAwesomeIcon icon={faSignOut} class="icon-2" onClick={showLogOutForm}></FontAwesomeIcon>
            </div>
            {showLogOut && <LogOut setShowLogOut={setShowLogOut} showLogOut={showLogOut}/>}
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
                <a href='/adm_man_user'>
                  <div class="edit-item">
                  <FontAwesomeIcon icon={faUser} class="icon-1"></FontAwesomeIcon>
                    Quản lý thành viên
                  </div>
                </a>
                <a href='/adm_man_user'>
                  <div class="edit-item">
                    <FontAwesomeIcon icon={faBars} class="icon-1"></FontAwesomeIcon>
                      Sản phẩm
                  </div>
                </a>
                <a href='/adm_man_user'>
                  <div class="edit-item">
                  <FontAwesomeIcon icon={faBagShopping} class="icon-1"></FontAwesomeIcon>
                    Đơn hàng
                  </div>
                </a>
                <a href='/adm_man_user'>
                  <div class="edit-item">
                  <FontAwesomeIcon icon={faChartLine} class="icon-1"></FontAwesomeIcon>
                    Thống kê
                  </div>
                </a>
                <a href='/adm_man_emp'>
                  <div class="edit-item manage-employee">
                  <FontAwesomeIcon icon={faUsers} class="icon-1"></FontAwesomeIcon>
                    Quản lý nhân viên
                  </div>
                </a>
              </div>
            </div>
        </Col>
        <Col md={10} className="edit-right">
          <div class="manage_search1">
            <div class="employee_list">
              Danh sách nhân viên
            </div>
            <div class="search">
              <input class="fill_telephone1" type="tel" id="phone-input" placeholder="Nhập số điện thoại" />
              <button class="btn btn-primary" onClick={handleSearchClick}>
                Tìm kiếm
              </button>
              <button class="btn btn-primary" onClick={handleShowForm}>
                Thêm nhân viên
              </button>
              {console.log("aa")}
              {console.log(showForm)}
              {showForm && <AddEmployeeForm  setDataa={setData} setShowForm={setShowForm}/>}
            </div>
          </div>
          <Table striped bordered hover className="table-container">
            <thead>
              <tr>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Hoạt động</th>
              </tr>
            </thead>
            <tbody>
            {currentStaffs.map(staff => (
                <tr key={staff.id}>
                  <td >{staff.name}</td>
                  <td>{staff.email}</td>
                  <td>{staff.phone}</td>
                  <td><button type="button" class="btn btn-success dieu_chinh" onClick={() => handleInfoForm(staff.id)}>Thông tin</button>
                  <button type="button" class="btn btn-danger dieu_chinh" onClick={() => handleShowDeleteForm(staff.id)}>Xóa NV</button></td>
                  {showDeleteForm && selectedEmployeeId === staff.id && (<DeleteEmployee showDeleteForm={showDeleteForm} setShowDeleteForm={setShowDeleteForm} Id_emp={staff.id} setData={setData}/>)}
                  {showInfoForm && selectedEmployeeId1 === staff.id && (<InfoEmployee showInfoForm={showInfoForm} setShowInfoForm={setShowInfoForm} Id_emp={staff.id} />)}
                </tr>
              ))}
            </tbody>
          </Table>
          <div class="paging">
            {pageNumbers.map((number) => {
            return (
              <button key={number} onClick={() => setCurrentPage(number)} className={currentPage === number ? "current" : ""}>
                {number}
              </button>
            );
            })}
          </div>
        </Col>
      </Row>
    </Container>
   
    </div>
  );
}

export default Manage_employee;
