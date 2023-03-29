import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
//React Router import
import {Routes, Route} from 'react-router-dom';

//Import pages
import Login from './Component/dat/Login';
import ForgotPassword from './Component/dat/ForgotPassword';
import Order from './Component/dat/Order';
import AddItemToCart from './Component/dat/AddItemToCart';
import Confirmation from './Component/dat/Confirmation';
import Signup from './Component/dat/Signup';
import HomePage from './Component/khoa/homePage';
import ErrorPage from './Component/khoa/ErrorPage';
import Feedback from './Component/khoa/Feedback';
import OrderMan from './Component/khoa/OrderMan';
import OrderTrack from './Component/khoa/OrderTrack';
import PaymentB from './Component/khoa/PaymentB';
import PaymentM from './Component/khoa/PaymentM';
import PrePaymentB from './Component/khoa/PrePaymentB';
import PrePaymentM from './Component/khoa/PrePaymentM';

import Manage_employee from './Component/vien/Manage_employee';
import Manage_user from './Component/vien/Manage_user';

// function App() {
//   return (
//     <div className="App">
//       <homePage/>     
//     </div>
//   );
// }
// export default App;
class App extends Component {
  render() {
    return (
      <div>
        
         <Routes>
        <Route exact path="/"  element={<HomePage/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/forgotpass"  element={<ForgotPassword/>}/>
        <Route path="/order"  element={<Order/>}/>
        <Route path="/addtocart"  element={<AddItemToCart/>}/>
        <Route path="/confirm"  element={<Confirmation/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/feedback"  element={<Feedback/>}/>
        <Route path="/orderman"  element={<OrderMan/>}/>
        <Route path="/ordertrack"  element={<OrderTrack/>}/>
        <Route path="/paymentb"  element={<PaymentB/>}/>
        <Route path="/paymentm"  element={<PaymentM/>}/>
        <Route path="/prepaymentb"  element={<PrePaymentB/>}/>
        <Route path="/prepaymentm"  element={<PrePaymentM/>}/>
        <Route path="/adm_man_emp"  element={<Manage_employee/>}/>
        <Route path="/adm_man_user"  element={<Manage_user/>}/>


        <Route path="*"  element={<ErrorPage/>}/>
         </Routes>
      </div>
    );
  }
}

export default App;

