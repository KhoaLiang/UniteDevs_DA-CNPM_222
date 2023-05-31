import React from 'react';
import { useNavigate } from 'react-router-dom'
import { AddContext } from '../../App';
import { useContext } from 'react';
import Header from '../dat/Header';
import Footer from '../dat/Footer';

 const PayWMomo = ({phone}) => {
  const navigate=useNavigate();
  const {TotalAmount}= useContext(AddContext);
  const containerStyle = {
    maxWidth: '540px',
  };
  return (
    
<>
<Header/>
<div class="row justify-content-center align-items-center g-2">
    <div class="col-4"><div className="card text-start " >
      <img className="card-img-top " src="https://www.saigonchildren.com/wp-content/uploads/2020/04/MM_QR_CODE_MOMOTUUM20191113-saigonchildren.png"  alt="QR code"/>
      <div className="card-body">
        <h4 className="card-title">Momo payment option</h4>
        <p className="card-text">Total amount you will pay: {TotalAmount} VND</p>
        <a onClick={()=>{navigate(`/thank-you`)}} class="btn btn-primary col-4">Confirm you have paid</a>

        <h5 class="fw-bold " onClick={()=>{navigate(`/cart-pro`)}}>
  <a><i class="fas fa-angle-left me-2"></i>Back to shopping</a>
</h5>
      </div>
    </div></div>
    
</div>

    

<Footer/>
</>
  );
}
export default PayWMomo;