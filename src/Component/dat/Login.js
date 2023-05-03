import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'

import '../../css/Login.css';
import {signIn} from '../../api/userApi'

function Login() {

  let navigate=useNavigate()
  const [Value,setValue]=useState('email')
  const [data,setData]=useState({
    phone    : "",
    email    : "",
    password : "",
  })


  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
  }

  function handleSubmit(e){
    e.preventDefault()
    const FormData={...data}
    if (Value==='email')  delete FormData.phone
    else                  delete FormData.email
    signIn(FormData).then((res)=>{
      localStorage.setItem("name",res.user.name);
      localStorage.setItem("token",res.token);
      if (Number(res.user.isAdmin)===0) navigate('/')
      else                              navigate('/adm_man_user')
      
    }).catch((error)=>{
      console.log(error)
  })
  }

  

  return (
    <div className="Login  d-flex align-items-center">
        <div className="container d-flex justify-content-end align-items-center ">
            <div className="form-sign-up col-4 me-5 w-25 border p-3 rounded rounded-3 bg-info bg-gradient shadow-lg">
                <h1  className="text-center mb-5">Đăng nhập</h1>
                <div className="mb-3 border-bottom border-secondary border-2">
                    <h4 
                      onClick={()=>setValue('Phone')} 
                      className="d-inline-block me-5 ms-1"
                      style={Value==='Phone'?{
                        color:'#fff',
                        }:{}}>
                      Số điện thoại</h4>

                    <h4 
                    onClick={()=>setValue('email')} 
                    className="d-inline-block"
                    style={Value==='email'?{
                      color:'#fff',
                
                    }:{}}
                    >Email</h4>
                </div>  
                <form onSubmit={(e)=>handleSubmit(e)} >
                  {Value==='email'?
                   <input type="text" onChange={(e)=>handle(e)} value={data.email} id='email' className="form-control mb-4 rounded-pill" placeholder="Nhập Email" />:
                   <input type="text" onChange={(e)=>handle(e)} value={data.phone} id='phone' className="form-control mb-4 rounded-pill" placeholder="Nhập Số điện thoại" />
                  }

                  <input type="text" onChange={(e)=>handle(e)}  value={data.password} id='password' className="form-control mb-4 rounded-pill" placeholder="Nhập mât khẩu" />
                  <button  className="btn btn-primary rounded-pill w-100 my-4">Đăng nhập</button>
                </form>
                <div className="text-end mb-2"><Link to="/forgotpass"> Quên mật khẩu</Link></div>                
                <div className="text-center">Bạn đã có tài khoản?<Link to="/signup"> Đăng ký</Link></div>
                
                
            </div>
        </div>
    </div>  
  );
}

export default Login;
