import React from 'react'
import Header from '../dat/Header'
import Footer from '../dat/Footer'
import { AddContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
export default function PayWCard() {
  let TotalAmount =  localStorage.getItem('totalAmount');
    const navigate=useNavigate();
    const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\s/g, ''); // Remove whitespace from the input
    const numericOnly = /^\d+$/;
    const formattedValue = formatCardNumber(value);

    if (numericOnly.test(value) && value.length === 16) {
      setCardNumber(formattedValue);
    } else {
      setCardNumber('');
    }
  };

  const handleNameOnCardChange = (event) => {
    const value = event.target.value.replace(/[^A-Za-z\s]/g, ''); // Remove non-alphabetic characters
    setNameOnCard(value);
  };

  const handleExpirationChange = (event) => {
    const value = event.target.value.replace(/[^\d/]/g, ''); // Remove non-digit and non-slash characters
    setExpiration(value);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setCvv(value);
  };

  const formatCardNumber = (value) => {
    const chunkedValue = value.replace(/\s/g, '').match(/.{1,4}/g);
    if (chunkedValue) {
      return chunkedValue.join(' ');
    }
    return value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic
  };
  return (
    
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <div class="row justify-content-center align-items-center g-2 ">
        <div class="col-6 border border-dark p-3 rounded" style ={{background: '#FFFFFF'}}><form class="mb-5">

        <div className="form-outline mb-5">
        <input
          type="text"
          id="typeText"
          className="form-control form-control-lg"
          size="17"
          value=""
          
        />
        <label className="form-label" htmlFor="typeText">
          Card Number
        </label>
      </div>

      <div className="form-outline mb-5">
        <input
          type="text"
          id="typeName"
          className="form-control form-control-lg"
          size="17"
          value={nameOnCard}
          onChange={handleNameOnCardChange}
        />
        <label className="form-label" htmlFor="typeName">
          Name on Card
        </label>
      </div>

      <div className="row">
        <div className="col-md-6 mb-5">
          <div className="form-outline">
            <input
              type="text"
              id="typeExp"
              className="form-control form-control-lg"
              value={expiration}
              size="7"
              onChange={handleExpirationChange}
            />
            <label className="form-label" htmlFor="typeExp">
              Expiration
            </label>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <div className="form-outline">
            <input
              type="password"
              id="typeText"
              className="form-control form-control-lg"
              value={cvv}
              size="1"
              onChange={handleCvvChange}
            />
            <label className="form-label" htmlFor="typeText">
              CVV
            </label>
          </div>
        </div>
      </div>

<p class="mb-5" style={{textAlign: "center"}}>Total amount to be pay: <span style={{color: "red", fontWeight: "600px"}}>{TotalAmount} VND</span></p>
<div style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-between'
}}>
  <h5 className="btn btn-warning btn-block btn-lg rounded" onClick={()=>{navigate(`/cart-pro`)}}  style={{
    cursor: "pointer"
  }}>
    <a><i class="fas fa-angle-left me-2" ></i>Back to shopping</a>
  </h5>
  <button type="button" className="btn btn-primary btn-block btn-lg" onClick={()=>{navigate(`/thank-you`)}} >Buy now</button>
</div>



</form></div>

    </div>
    <br/>
    <br/>
    <br/>
<Footer/>

    </>
  )
}
