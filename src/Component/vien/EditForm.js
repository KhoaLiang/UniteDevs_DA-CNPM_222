import React, { useState, useEffect } from 'react';
import '../../css/vien/EditForm.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import {getProfile} from '../../api/userApi'
import {editProfile} from '../../api/userApi'
import ShowWarning1 from './ShowWarning1'
function EditForm({setShowEditInfo, showEditInfo}) {
  const [user, setUser] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    console.log("check use effect")
    const fetchData = async () => {
      const result = await getProfile(localStorage.getItem("token"));
      console.log(result)
      setUser(result); // lưu trữ kết quả trả về vào state user
    };
    fetchData();
  },[]);
  const handle=(e)=>{
    const newData={...user}
    newData[e.target.id]=e.target.value
    setUser(newData)
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("check");
      const res = await editProfile(localStorage.getItem('token'),user);
      console.log(res);
      alert(res.message);
      setShowEditInfo(false);
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.error);
    }
  }
  const handleShowWarning = () => {
    setShowWarning(true);
  }
  return (
    <>
    {showEditInfo && (  
    <div className='background'>
      <div className='form'>
        <div className='form_header'>
          <h3>Chỉnh sửa thông tin</h3>
          <FontAwesomeIcon icon={faX} class="icon" style={{ cursor: 'pointer' }} onClick={handleShowWarning} ></FontAwesomeIcon>
          {showWarning && <ShowWarning1 setIsVisible={setShowEditInfo} setShowWarning={setShowWarning} showWarning={showWarning} />}
        </div>
      <Form>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
          {user && 
          <Form.Control type="text" onChange={e=>handle(e)} value={user.name} id="name" placeholder="Họ và tên" />
          }
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
        {user && 
          <Form.Control type="text" onChange={e=>handle(e)} value={user.email} id="email" placeholder="Email" />
        }
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
        {user && 
        <Form.Control
          value={user.phone}
          onChange={e=>handle(e)}
          type="text"
          id = "phone"
          placeholder="Số điện thoại"
          pattern="[0-9]{10}"
          required
        />
        }
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
        {user && 
          <Form.Control type="text" onChange={e=>handle(e)} value={user.address} id="address" placeholder="Địa chỉ"/>
        }
          </Col>
      </Form.Group>
      <Form.Group>
            <button class="btn btn-success" onClick={e=>handleSubmit(e)}>Lưu thay đổi</button>
      </Form.Group>
    </Form>
      </div>
    </div>
)}
</>
);
}


export default EditForm;