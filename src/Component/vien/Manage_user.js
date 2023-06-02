import { Table,Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../../css/vien/Manage_user.css'
import InfoUser from './InfoUser'
import DeleteUser from './DeleteUser'
import {getAllUser} from '../../api/adminApi'
import {getUserByPhone} from '../../api/adminApi'
import Headerr from './Header'
import Left from './Left'
function Manage_user() {
  const [data, setData] = useState([]);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [selectedEmployeeId1, setSelectedEmployeeId1] = useState(null);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showEditInfo, setShowEditInfo] =  useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const handleShowDeleteForm = (id) =>{
    setSelectedEmployeeId(id);
    setShowDeleteForm(true);
  }
  const handleOrder = (id) =>{
    localStorage.setItem('user_id', id);
  }
  const handleInfoForm = (id) =>{
    setSelectedEmployeeId1(id);
    setShowInfoForm(true);
  }
  const showEditForm = () => {
    setShowEditInfo(true);
  }
  const showLogOutForm = () =>{
    setShowLogOut(true);
  }
  useEffect(() => {
    getAllUser(localStorage.getItem('token'))
      .then(res => {
        if (res && Array.isArray(res)) {
          setData(res);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleSearchClick = async () => {
    const phone = document.getElementById("phone-input").value;
    const token = localStorage.getItem('token');
    if (phone === "") {
      const res = await getAllUser(token);
      setData(res);
    }
    else{
      const res = await getUserByPhone(token, phone);
      setData(res);
    }
  };
  const totalPage = Math.ceil(data.length / perPage);
  const indexOfLastStaff = currentPage * perPage;
  const indexOfFirstStaff = indexOfLastStaff - perPage;
  const currentStaffs = data.slice(indexOfFirstStaff, indexOfLastStaff);
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Headerr />
      <Container style={{margin: '0px', maxWidth: '100%'}} >
      <Row style={{width:'100%'}}>
          <Col md={2}>
            <Left />
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
              <td>
              <a href='/adm_order'>
              <button type="button" class="btn btn-info dieu_chinh" onClick={() => handleOrder(staff.id)}>Đơn hàng</button>
              </a>
              <button type="button" class="btn btn-success dieu_chinh" onClick={() => handleInfoForm(staff.id)}>Thông tin</button>
              <button type="button" class="btn btn-danger dieu_chinh" onClick={() => handleShowDeleteForm(staff.id)}>Xóa KH</button></td>
              {showDeleteForm && selectedEmployeeId === staff.id && (<DeleteUser showDeleteForm={showDeleteForm} setShowDeleteForm={setShowDeleteForm} Id_emp={staff.id} />)}
              {showInfoForm && selectedEmployeeId1 === staff.id && (<InfoUser showInfoForm={showInfoForm} setShowInfoForm={setShowInfoForm} Id_emp={staff.id} />)}
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

export default Manage_user;
