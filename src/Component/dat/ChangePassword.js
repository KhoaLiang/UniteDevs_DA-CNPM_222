import { useState} from 'react';
import React from 'react';

import {changePassword} from '../../api/userApi'
import '../../css/ChangePassword.css'
import LayoutUser from './LayoutUser';
function ChangePassword() {


    const [data,setData]=useState({
        oldPassword     : "",
        newPassword     : "",
        confirmPassword : "",
    })

    
    
    const handle=(e)=>{
      const newData={...data}
      newData[e.target.id]=e.target.value
      setData(newData)
    }
    
    function handleSubmit(e){
      e.preventDefault()
      const FormData={...data}
      console.log("dat dep trai")
      changePassword(localStorage.getItem("token"),FormData).then((res)=>{
        alert("cập nhật mật khẩu thành công")
      }).catch((error)=>{
        console.log(error)
    })
    }

    return (
        <React.Fragment>
            <div className="ChangePassword">
                <LayoutUser>
                    <h3 className='pb-3  pt-3 border-bottom pb-4'>Đổi mật khẩu</h3>
                    <form onSubmit={(e)=>handleSubmit(e)}>                        
                        <table className='mt-4'>
                        <tbody>
                            <tr className='mt-3'>
                                <td className='text-end text-secondary'>Mật khẩu cũ</td>
                                <td className='ps-4'>
                                    <input type="text" onChange={e=>handle(e)} value={data.oldPassword} id='oldPassword' className="form-control "  />
                                </td>
                            </tr>
                            <tr className='pb-3'>
                                <td className='text-end text-secondary'>Mật khẩu mới</td>
                                <td className='ps-4'>
                                    <input type="text" onChange={e=>handle(e)} value={data.newPassword} id='newPassword' className="form-control"  />
                                </td>
                            </tr >
                            <tr className='pb-3 '>
                                <td className='text-end text-secondary'>Xác nhận mật khẩu mới</td>
                                <td className='ps-4'>
                                    <input type="text" onChange={e=>handle(e)} value={data.confirmPassword} id='confirmPassword' className="form-control" />
                                </td>
                            </tr>
                        </tbody>                               
                        </table>
                        <button className="btn btn-primary rounded-pill w-75 my-4">cập nhật</button>
                    </form>
                    
                </LayoutUser>                      
            </div>               
        </React.Fragment>
     
    );
}

export default ChangePassword;