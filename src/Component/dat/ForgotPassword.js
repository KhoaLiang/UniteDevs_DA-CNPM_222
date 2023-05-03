import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
  console.log("dat dep trai")
  e.preventDefault()
  forgetPassword(data).then((res)=>{
    console.log("thanh cong")
    navigate('/login')
  }).catch((error)=>{
    console.log(error)
})

}

  return (
    <div className="ForgotPassword  d-flex align-items-center">
        <div className="container d-flex justify-content-end align-items-center ">
            <div className="form-sign-up col-4 me-5 w-25 border p-3 rounded rounded-3 bg-info bg-gradient shadow-lg">
                <h1 className="text-center mb-5">Quên mật khẩu</h1>
                <form onSubmit={e=>handleSubmit(e)}>
                  <input type="text" onChange={(e)=>handle(e)} value={data.email} id='email' className="form-control mb-2 rounded-pill" placeholder="Nhập Email" />:
                  <input type="text" onChange={(e)=>handle(e)} value={data.phone} id='phone' className="form-control mb-2 rounded-pill" placeholder="Nhập Số điện thoại" />                 
                  <button className="btn btn-primary rounded-pill w-100 my-4">Gửi mã</button>               
                </form>
            </div>
        </div>
    </div>  
  );
}

export default ForgotPassword;
