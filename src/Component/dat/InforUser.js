import React from 'react';
import { useState ,useEffect} from 'react';

import {getProfile} from '../../api/userApi'
import '../../css/InforUser.css'
import LayoutUser from './LayoutUser';
function InforUser() {

    const [data,setData]=useState({})

    useEffect(()=>{
        getProfile(localStorage.getItem("token")).then((res)=>{
            console.log(res)
            setData(res)
          }).catch((error)=>{
            console.log(error)
        })
    },[])


    return (
        <React.Fragment>
            <div className="InforUser">
                <LayoutUser>
                    <h3 className='pb-3  pt-3 border-bottom pb-4'>Hồ sơ của tôi</h3>
                    <table className='mt-4'>
                        <tbody>                          
                            <tr className='mt-3'>
                                <td className='text-end text-secondary'>Tên</td>
                                <td className='ps-4'>{data.name}</td>
                            </tr>
                            <tr className='pb-3'>
                                <td className='text-end text-secondary'>Số điện thoại</td>
                                <td className='ps-4'>{data.phone}</td>
                            </tr >
                            <tr className='pb-3 '>
                                <td className='text-end text-secondary'>Email</td>
                                <td className='ps-4'>{data.email}</td>
                            </tr>
                            <tr className='pb-3'>
                                <td className='text-end text-secondary'>Địa chỉ</td>
                                <td className='ps-4'>{data.address||'Chưa được cập nhật'}</td>
                            </tr>
                        </tbody>
                    </table>
                </LayoutUser>                      
            </div>               
        </React.Fragment>
     
    );
}

export default InforUser;