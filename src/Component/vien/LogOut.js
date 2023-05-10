import React, { useState } from 'react';
import '../../css/vien/ShowWarning.css'
import {useNavigate,Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

function LogOut({setShowLogOut, showLogOut}) {
    let navigate=useNavigate()
    const handleConfirm = () => {
        setShowLogOut(false);
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        navigate('/')
    };
    const handleCancel = () => {
        setShowLogOut(false);
    };
    return (
    <>
    {showLogOut && (  
    <div className="background">
        <div className='warning'>
        <h2>
            Bạn có chắc muốn đăng xuất?
        </h2>
        <div class="edit-btn">
            <button type="button" class="btn btn-success" onClick={handleConfirm}>Xác nhận</button>
            <button type="button" class="btn btn-danger" onClick={handleCancel}>Hủy bỏ</button>
        </div>

        </div>
    </div>
    )}
     </>
   );
}
export default LogOut;
