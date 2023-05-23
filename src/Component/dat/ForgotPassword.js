import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {message} from 'antd'

import '../../css/ForgotPassword.css'; 
import {forgetPassword} from '../../api/userApi'
// import { useState } from 'react';
function ForgotPassword() {
  let navigate=useNavigate()
  const [data,setData]=useState({
    phone             : "",
    email             : "",
  })

function handle(e){
  const newData={...data}
  newData[e.target.id]=e.target.value
  setData(newData)
}

function handleSubmit(e){
  e.preventDefault()
  forgetPassword(data).then((res)=>{
    message.success("đổi mật khẩu thành công")
    navigate('/login')
  }).catch((error)=>{
    console.log(error)
})

}

  return (
    <div className="ForgotPassword  d-flex align-items-center">
        <div className="container d-flex justify-content-center align-items-center ">
            <div className=" content form-sign-up col-4  w-25 border p-5 rounded rounded-3 ">
                <h1 className="text-center mb-5">Quên mật khẩu</h1>
                <form onSubmit={e=>handleSubmit(e)}>
                  <input type="text" onChange={(e)=>handle(e)} value={data.email} id='email' className="form-control mb-2" placeholder="Nhập Email" />:
                  <input type="text" onChange={(e)=>handle(e)} value={data.phone} id='phone' className="form-control mb-2" placeholder="Nhập Số điện thoại" />                 
                  <button className="btn rounded-pill w-100 my-4">Gửi mã</button>               
                </form>
            </div>
        </div>
    </div>  
  );
}

export default ForgotPassword;
