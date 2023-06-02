import "./App.css";
import React, { Component, useState, createContext, useEffect } from "react";
import { message } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
//React Router import
import { Routes, Route } from "react-router-dom";
//import api
import { getProductByCategory, getProductById } from "./api/userApi";

//Import pages
import Login from "./Component/dat/Login";
import ForgotPassword from "./Component/dat/ForgotPassword";
import Order from "./Component/dat/Order";
import AddItemToCart from "./Component/dat/AddItemToCart";
import Confirmation from "./Component/dat/Confirmation";
import Signup from "./Component/dat/Signup";
import InforUser from "./Component/dat/InforUser";
import EditInfor from "./Component/dat/EditInfor";
import ChangePassword from "./Component/dat/ChangePassword";
import HomePage from "./Component/khoa/homePage";
import ErrorPage from "./Component/khoa/ErrorPage";
import Feedback from "./Component/khoa/Feedback";
import OrderMan from "./Component/khoa/OrderMan";
import OrderTrack from "./Component/khoa/OrderTrack";

import PrePaymentB from "./Component/khoa/PrePaymentB";
import PrePaymentM from "./Component/khoa/PrePaymentM";

import Manage_employee from "./Component/vien/Manage_employee";
import Manage_user from "./Component/vien/Manage_user";

import Showcase from "./Component/Showcase";

import ProductDetailC from "./Component/Product/Product-detail-copy";

import CartPro from "./Component/Product/Cart-pro";
import PayWCard from "./Component/Payment/PayWCard";
import Thankyou from "./Component/Payment/thankYou";
import PayWMomo from "./Component/Payment/PayWMomo";
import Contact from "./Component/contact/contact";
export const AddContext = createContext();
// export const AddContext = createContext();
// export let phone = []
// export let laptop = []
// export let watch = []
// export let ipad = []
function App() {
  const [phone, setPhone] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [watch, setWatch] = useState([]);
  const [ipad, setIpad] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [TotalAmount, setTotalAmount] = useState([]);
  useEffect(() => {
    (async () => {
      getProductByCategory("CellPhone")
        .then((res) => {
          setPhone(res.data);
        })
        .catch((error) => {
        });
      // let phone1 = await getProductByCategory("CellPhone");
      // setPhone(phone1.data);
      getProductByCategory("Laptop")
        .then((res) => {
          setLaptop(res.data);
        })
        .catch((error) => {
        });
      // let laptop1 = await getProductByCategory("Laptop");
      // setLaptop(laptop1.data);

      getProductByCategory("watch")
        .then((res) => {
          setWatch(res.data);
        })
        .catch((error) => {
        });
      // let watch1 = await getProductByCategory("watch");
      // setWatch(watch1.data);
      getProductByCategory("Tablet")
        .then((res) => {
          setIpad(res.data);
        })
        .catch((error) => {
        });
      // let ipad1 = await getProductByCategory("Tablet");
      // setIpad(ipad1.data);
    })();
  }, [cartItems]);

  //the cart

  function onAdd(product) {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function onRemove(product) {
    // for(var i=0;i<cartItems.length;i++){
    //   if(cartItems[i].name ===product.name){
    //     setCartItems(cartItems.splice(i,1));
    //     console.log(cartItems);
    //   }
    // }
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== product.id;
    });
    setCartItems(newCartItems);
  }

  return (
    <div>
      <AddContext.Provider value={{ cartItems, TotalAmount, setTotalAmount }}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/order" element={<Order />} />
          <Route path="/inforuser" element={<InforUser />} />
          <Route path="/editinfor" element={<EditInfor />} />
          <Route path="/changepass" element={<ChangePassword />} />
          <Route path="/addtocart" element={<AddItemToCart />} />
          <Route path="/confirm" element={<Confirmation />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/orderman" element={<OrderMan />} />
          <Route path="/ordertrack" element={<OrderTrack />} />

          <Route path="/prepaymentb" element={<PrePaymentB />} />
          <Route path="/prepaymentm" element={<PrePaymentM />} />
          <Route path="/adm_man_emp" element={<Manage_employee />} />
          <Route path="/adm_man_user" element={<Manage_user />} />
          <Route path="/cellphones" element={<Showcase phone={phone} />} />
          {/* <Route path="/cellphones/:id"  element={<ProductDetail phone={phone}/>}/> */}
          <Route path="/laptop" element={<Showcase phone={laptop} />} />
          <Route
            path="/product/:id"
            element={<ProductDetailC onAdd={onAdd} />}
          />
          <Route path="/watch" element={<Showcase phone={watch} />} />
          {/* <Route path="/watch/:id"  element={<ProductDetail phone={watch}/>}/> */}
          <Route path="/ipad" element={<Showcase phone={ipad} />} />
          {/* <Route path="/ipad/:id"  element={<ProductDetail phone={ipad}/>}/> */}

          <Route path="/cart-pro" element={<CartPro onRemove={onRemove} />} />

          {/* <Route path="/showcase"  element={<Showcase phone={phone.data} setState={setState} state={state}/>}/> */}
          {/*Payment section  */}
          <Route path="/pay-with-card" element={<PayWCard />} />
          <Route path="/pay-with-momo" element={<PayWMomo />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AddContext.Provider>
    </div>
  );
}

export default App;
