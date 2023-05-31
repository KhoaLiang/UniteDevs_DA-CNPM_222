import React, { useState, useEffect} from 'react';
import {getUser} from '../../api/adminApi'
import {deleteUser} from '../../api/adminApi'
import '../../css/vien/DeleteEmployee.css'


function DeleteUser({showDeleteForm,setShowDeleteForm,Id_emp}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("check use effect")
    const fetchData = async () => {
      const result = await getUser(Id_emp,localStorage.getItem('token'));
      setUser(result[0]); // lưu trữ kết quả trả về vào state user
    };
    fetchData();
  },[]);
  
  const handleDelete = async (id) => {
    try {
      await deleteUser(id, localStorage.getItem('token'));
      console.log(`User ${id} deleted successfully!`);
      setShowDeleteForm(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const handleCancel = () => {
    setShowDeleteForm(false);
  };
  return (
    <>
    {showDeleteForm && (
    <div className="background">
        <div className='edit'>
        {user && (
          <h3>
            Bạn có chắc muốn xóa khách hàng {user.name} không?
          </h3>
        )}
        <span>
            Việc này sẽ gây mất mát dữ liệu
        </span>
        <div class="edit-btn">
            <button type="button" class="btn btn-success" onClick={() => handleDelete(Id_emp)}>Xác nhận</button>
            <button type="button" class="btn btn-danger" onClick={handleCancel}>Hủy bỏ</button>
        </div>

        </div>
    </div>
    
    )}
  </>
  );
}


export default DeleteUser;
