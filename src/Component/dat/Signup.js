import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../css/Signup.css';
import {signUp} from '../../api/userApi'

function Signup() {
  let navigate=useNavigate()
  const [data,setData]=useState({
    name              : "",
    phone             : "",
    email             : "",
    password          : "",
    confirmPassword   : ""
  })

function handle(e){
  const newData={...data}
  newData[e.target.id]=e.target.value
  setData(newData)
}

function handleSubmit(e){
  console.log("dat dep trai")
  e.preventDefault()

  signUp(data).then((res)=>{
    alert(res.message)
    navigate('/login')
  }).catch((error)=>{
    console.log(error)
})

}



  return (
    <div className="Signup  d-flex align-items-center">
        <div className="container d-flex justify-content-end align-items-center ">
            <div className="form-sign-up col-4 me-5 w-25 border p-3 rounded rounded-3 bg-info bg-gradient shadow-lg">
                <h1 className="text-center mb-5">Đăng ký ngay</h1>
                <form onSubmit={e=>handleSubmit(e)} >
                  <input type="text" onChange={e=>handle(e)} value={data.name} id='name' className="form-control mb-4 rounded-pill" placeholder="Nhập họ tên" />
                  <input type="text" onChange={e=>handle(e)} value={data.phone} id='phone' className="form-control mb-4 rounded-pill" placeholder="Nhập số điện thoại" />
                  <input type="text" onChange={e=>handle(e)} value={data.email}  id='email' className="form-control mb-4 rounded-pill" placeholder="Nhập email" />
                  <input type="text" onChange={e=>handle(e)} value={data.password} id='password' className="form-control mb-4 rounded-pill" placeholder="Nhập mật khẩu" />
                  <input type="text" onChange={e=>handle(e)} value={data.confirmPassword} id='confirmPassword'className="form-control mb-4 rounded-pill" placeholder="Nhập lại mất khẩu" />
                  <button className="btn btn-primary rounded-pill w-100 my-4">Đăng ký</button>
                </form>
                <div className="text-center">Bạn đã có tài khoản?<Link to="/login"> Đăng nhập</Link></div>

            </div>
        </div>
    </div>  
  );
}

export default Signup;
