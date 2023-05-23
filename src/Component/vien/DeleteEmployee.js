import React, { useState } from 'react';
import '../../css/vien/DeleteEmployee.css'


function ShowWarning() {

  return (
    <div className="background">
        <div className='edit'>
        <h3>
            Bạn có chắc muốn xóa nhân viên lequoctrang4 không?
        </h3>
        <span>
            Việc này sẽ gây mất mát dữ liệu
        </span>
        <div class="edit-btn">
            <button type="button" class="btn btn-success">Xác nhận</button>
            <button type="button" class="btn btn-danger">Hủy bỏ</button>
        </div>

        </div>
    </div>
    
  );
}

export default ShowWarning;
