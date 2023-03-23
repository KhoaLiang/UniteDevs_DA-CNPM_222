import React, { useState } from 'react';
import '../css/ShowWarning.css'

import "react-datepicker/dist/react-datepicker.css";

function ShowWarning() {

  return (
    <div className="background">
        <div className='warning'>
        <h3>
            Bạn có chắc muốn thoát ra không?
        </h3>
        <span>
            Tất cả dữ liệu đã thêm hoặc thay đổi sẽ không được lưu
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
