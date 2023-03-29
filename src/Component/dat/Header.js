import logo from '../../img/logo.jpg'
import '../../css/Header.css';
function Header() {
  return (
    <div className="bg-info header d-flex justify-content-center text-white ">
        <div className="container">
            <div className="row d-flex" >
                <div className="col-1">Get the app</div>
                <div className="col-2">Connect <i className="ms-1 fa-brands fa-facebook"></i>  <i className="ms-1 fa-brands fa-square-instagram"></i></div>
                <div className="col-4"></div>
                <div className="col-1"><i className="me-1 fa-sharp fa-solid fa-bell"></i> Notification</div>
                <div className="col-1"><i className="me-1 fa-solid fa-question"></i> Support</div>
                <div className="col-1"><i className="me-1 fa-solid fa-globe"></i> Vietname</div>
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
                        <span classNameName="input-group-text" id="basic-addon2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        </div>                   
                </div>
                <div className="col-1">
                <i className="fs-3 mt-2 fa-sharp fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className="row  justify-content-center">
                <div className="col-1">Phone</div>
                <div className="col-1">Laptop</div>
                <div className="col-1">Tablet</div>
                <div className="col-1">Accessory</div>
                <div className="col-1">SmartWatch</div>
                <div className="col-1">Clock</div>
                <div className="col-2">Sims,Scratch Cards</div>
                <div className="col-2">Sims,Scratch Cards</div>
            </div>
        </div>
    </div>  
  );
}

export default Header;