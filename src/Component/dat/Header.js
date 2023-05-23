import logo from '../../img/logo.jpg'
import '../../css/Header.css';

import { useNavigate } from "react-router-dom";
function Header() {
    const navigate=useNavigate();
    const handleSignup=()=>{
        navigate('/signup')
    }

    const handleLogin=()=>{
        navigate('/login')
    }

    const handeLogout=()=>{
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        navigate('/login')
    }
  return (
    <div className="bg-info header d-flex justify-content-center text-white ">
        <div className="container">
            <div className="row d-flex" >
                <div className="col-1"  onClick={()=>{navigate('/')}}>Get the app</div>
                <div className="col-2">Connect <i className="ms-1 fa-brands fa-facebook"></i>  <i className="ms-1 fa-brands fa-square-instagram"></i></div>
                <div className="col-3"></div>
                <div className="col-1"><i className="me-1 fa-sharp fa-solid fa-bell"></i> Notification</div>
                <div className="col-1"><i className="me-1 fa-solid fa-question"></i> Support</div>
                <div className="col-2"><i className="me-1 fa-solid fa-globe"></i> Vietnamese</div>
                <div className="col-2"><i className="me-1 fa-solid fa-user"></i> Tandatnguyendeptrai</div>
            </div>
            <div className="row mt-3">
                <div className="col-3 fs-3 header-name-shop text-end">
                    <img src={logo} alt="" width="45px" />
                    easyelectronics
                </div>
                <div className="col-7 ">
                    <div classNameName="input-group ">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="What are you looking for..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        {/* <span classNameName="input-group-text" id="basic-addon2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </span> */}
                        </div>                   
                </div>
                <div className="col-1">
                <i className="fs-3 mt-2 fa-sharp fa-solid fa-cart-shopping " onClick={()=>{navigate('/cart-pro')}}></i>
                </div>
            </div>
            <div className="row  justify-content-center">
                <div className="col-1 btn btn-danger" onClick={()=>{navigate('/cellphones')}}>Phone</div>
                <div className="col-1 btn btn-danger" onClick={()=>{navigate('/laptop')}}>Laptop</div>
                <div className="col-1 btn btn-danger" onClick={()=>{navigate('/ipad')}}>Tablet</div>
                <div className="col-1 btn btn-primary">Accessory</div>
                <div className="col-1 btn btn-danger" onClick={()=>{navigate('/watch')}}>SmartWatch</div>
                <div className="col-1 btn btn-primary">Clock</div>
                <div className="col-2 btn btn-primary">Sims,Scratch Cards</div>
                
            </div>
        </div>
    </div>  
  );
}

export default Header;
