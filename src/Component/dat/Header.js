import {useNavigate} from 'react-router-dom'
import logo from '../../img/logo.jpg'
import '../../css/Header.css';
import { Fragment } from 'react';
function Header() {

    let navigate=useNavigate()

    const handleSignup=()=>{
        navigate('/signup')
    }

    const handleLogin=()=>{
        navigate('/login')
    }

    const handeLogout=()=>{
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("user_id");
        localStorage.removeItem("userId");
        localStorage.removeItem("tag");
        navigate('/login')
    }

  return (
    <div className="bg-info header d-flex justify-content-center text-white ">
        <div className="container container-header">
            <div className="row d-flex" >
                <div className="col-4 d-flex justify-content-start">
                <div className="d-inline-block pe-lg-5 pe-sm-2">Get the app</div>
                <div className="d-inline-block pe-lg-5 pe-sm-2">Connect <i className="ms-1 fa-brands fa-facebook"></i>  <i className="ms-1 fa-brands fa-square-instagram"></i></div>
                </div>
                <div className="col-8 d-flex justify-content-end">
                    <div className="d-inline-block ps-lg-5 ps-sm-2"><i className="me-1 fa-sharp fa-solid fa-bell"></i> Notification</div>
                    <div className="d-inline-block ps-lg-5 ps-sm-2"><i className="me-1 fa-solid fa-question"></i> Support</div>
                    <div className="d-inline-block ps-lg-5 ps-sm-2"><i className="me-1 fa-solid fa-globe"></i> Vietname</div>
                    {
                        localStorage.getItem("name")?
                                <Fragment>
                                    <div className="d-inline-block ps-lg-5 ps-sm-2 user"><i className="me-1 fa-solid fa-user"></i> {localStorage.getItem("name")}
                                    <ul className='ms-lg-5 ms-sm-2'>
                                        <li onClick={handeLogout}>Log Out</li>
                                        <li onClick={()=>{navigate('/inforuser')}}>My Account</li>
                                        {localStorage.getItem("isAdmin")===1?<li onClick={()=>{navigate('/adm_man_user')}}>Management</li>:<></>}
                                    </ul>
                                    </div>
                                </Fragment>:
                                <Fragment>
                                    <div role="button" className="d-inline-block ps-lg-5 ps-sm-2" onClick={handleSignup}>Signup</div>
                                    <div role="button" className="d-inline-block ps-lg-5 ps-sm-2" onClick={handleLogin}>Login</div>
                                </Fragment>
                    }
                </div>

                
                
            </div>
            <div className="row mt-3 d-flex justify-content-center">
                <div onClick={()=>{navigate('/')}} className="col-4 fs-3 header-name-shop text-end">
                    <img src={logo} alt="" width="45px" />
                    easyelectronics
                </div>
                <div className="col-6 ">
                    <div className="input-group ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="What are you looking for..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        </div>                   
                </div>
                <div className="col-1">
                <i className="fs-3 mt-2 fa-sharp fa-solid fa-cart-shopping" onClick={()=>{navigate('/cart-pro')}}></i>
                </div>
            </div>
            <div className="row  mt-3 justify-content-center category">
                <div className="col-1" onClick={()=>{navigate('/cellphones')}}>Phone</div>
                <div className="col-1" onClick={()=>{navigate('/laptop')}}>Laptop</div>
                <div className="col-1" onClick={()=>{navigate('/ipad')}}>Tablet</div>
                <div className="col-1">Accessory</div>
                <div className="col-1" onClick={()=>{navigate('/watch')}}>SmartWatch</div>
                <div className="col-1">Clock</div>
                <div className="col-2">Sims,Scratch Cards</div>
            </div>
        </div>
    </div>  
  );
}

export default Header;