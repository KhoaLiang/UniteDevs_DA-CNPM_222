import React from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import { useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import '../../css/LayoutUser.css'

function LayoutUser({children}) {

    const navigate=useNavigate()
    const location = useLocation();

    useEffect(()=>{
       
        if(location.pathname==='/editinfor')        document.getElementById("editinfor").style.color='#0DCAF0'
        else if (location.pathname==='/inforuser')  document.getElementById("infor").style.color='#0DCAF0'
        else if (location.pathname==='/changepass') document.getElementById("changepass").style.color='#0DCAF0'
        
    },[])

    const handle=(e)=>{
        if (e.target.innerHTML==='Thông tin của tôi')       navigate('/inforuser')        
        else if(e.target.innerHTML==='Chỉnh sửa thông tin') navigate('/editinfor') 
        else if(e.target.innerHTML==='Đổi mật khẩu')        navigate('/changepass')  

        
    }

    return (
        <React.Fragment>
            <Header/>

            <div className="LayoutUser">
                <div className="container">
                    <div className='row d-flex justify-content-center '>
                        <div className='col-2 navbar'>
                            <h5 className='mt-3 border-bottom pb-4'>Nguyễn Tấn Đạt</h5>
                            <ul className='mt-4'>
                                <li onClick={e=>handle(e)} id='infor' className='pb-3'>Thông tin của tôi</li>
                                <li onClick={e=>handle(e)} id='editinfor' className='pb-3'>Chỉnh sửa thông tin</li>
                                <li onClick={e=>handle(e)} id='changepass' className='pb-3'>Đổi mật khẩu</li>
                                <li onClick={e=>handle(e)} className='pb-3'>Đơn mua</li>
                                <li onClick={e=>handle(e)} className='pb-3'>Thông báo</li>
                            </ul>
                        </div>
                        <div className='col-6 bg-white ps-5'>
                            {children}
                        </div>
                  </div>
              </div>
            </div>        
            <Footer/>

        </React.Fragment>
     
    );
}

export default LayoutUser;
