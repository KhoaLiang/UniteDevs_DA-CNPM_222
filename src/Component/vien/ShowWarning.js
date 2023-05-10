import React, { useState } from 'react';
import '../../css/vien/ShowWarning.css'

import "react-datepicker/dist/react-datepicker.css";

function ShowWarning({setIsVisible,setShowWarning,showWarning,setShowForm}) {

  const handleConfirm = () => {
    setIsVisible(false);
    setShowWarning(false);
    setShowForm(false);
  };
  const handleCancel = () => {
    setIsVisible(true);
    setShowWarning(false);
    setShowForm(false);
  };
  return (
    <>
    {showWarning && (  
    <div className="background">
        <div className='warning'>
        <h3>
            Bạn có chắc muốn thoát ra không?
        </h3>
        <span>
            Tất cả dữ liệu đã thêm hoặc thay đổi sẽ không được lưu
        </span>
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
export default ShowWarning;
