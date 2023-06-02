import { Table,Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../../css/vien/Manage_employee.css'
import AddEmployeeForm from './AddEmployeeForm'
import InfoEmployee from './InfoEmployee'
import DeleteEmployee from './DeleteEmployee'
import {getAllStaff} from '../../api/adminApi'
import {getUserByPhone} from '../../api/adminApi'
import HeaderAdmin from "./HeaderAdmin";
import Left from './Left'
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

  const handleShowForm = async () => {
    await setShowForm(true);
  }
  
  const showEditForm = async () => {
    await setShowEditInfo(true);
  }
  
  const handleShowDeleteForm = async (id) => {
    await setSelectedEmployeeId(id);
    await setShowDeleteForm(true);
  }
  
  const handleInfoForm = async (id) => {
    await setSelectedEmployeeId1(id);
    await setShowInfoForm(true);
  }
  
  const showLogOutForm = async () => {
    await setShowLogOut(true);
  }

  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const res = await getAllStaff(localStorage.getItem('token'));
      if (res && Array.isArray(res)) {
        setData(res);
        console.log("aaaa111");
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
  localStorage.setItem('tag', 5);
  return (
    <div>
      <HeaderAdmin />

      <Container style={{ margin: "0px", maxWidth: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col md={2}>
            <Left />
          </Col>
          <Col md={10} className="edit-right">
            <div class="manage_search1">
              <div class="employee_list">Danh sách nhân viên</div>
              <div class="search">
                <input
                  class="fill_telephone1"
                  type="tel"
                  id="phone-input"
                  placeholder="Nhập số điện thoại"
                />
                <button class="btn btn-primary" onClick={handleSearchClick}>
                  Tìm kiếm
                </button>
                <button class="btn btn-primary" onClick={handleShowForm}>
                  Thêm nhân viên
                </button>
                {console.log("aa")}
                {console.log(showForm)}
                {showForm && (
                  <AddEmployeeForm
                    setDataa={setData}
                    setShowForm={setShowForm}
                  />
                )}
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
                {currentStaffs.map((staff) => (
                  <tr key={staff.id}>
                    <td>{staff.name}</td>
                    <td>{staff.email}</td>
                    <td>{staff.phone}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success dieu_chinh"
                        onClick={() => handleInfoForm(staff.id)}
                      >
                        Thông tin
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger dieu_chinh"
                        onClick={() => handleShowDeleteForm(staff.id)}
                      >
                        Xóa NV
                      </button>
                    </td>
                    {showDeleteForm && selectedEmployeeId === staff.id && (
                      <DeleteEmployee
                        showDeleteForm={showDeleteForm}
                        setShowDeleteForm={setShowDeleteForm}
                        Id_emp={staff.id}
                        setData={setData}
                      />
                    )}
                    {showInfoForm && selectedEmployeeId1 === staff.id && (
                      <InfoEmployee
                        showInfoForm={showInfoForm}
                        setShowInfoForm={setShowInfoForm}
                        Id_emp={staff.id}
                      />
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
            <div class="paging">
              {pageNumbers.map((number) => {
                return (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={currentPage === number ? "current" : ""}
                  >
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
