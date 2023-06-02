import React from 'react'
import Footer from './dat/Footer';
import Header from './dat/Header';
import Product from './Product/product';

// const Phones = (props) => {
//     // console.log();
//     // props.setState(props.setState)
    
//         let phone = getProductByCategory("CellPhone");
//         props = phone;
//         props.then((resolvedObject) => {
//             const dataArray = resolvedObject.data;
//             //console.log(dataArray)
//           });
//     return (
//         <>
//             <Header/>
//             <div>Phones</div>
//             <div>
//                 {
//                     //console.log(phone)
//                     // data.map((phone,key) => (
//                     //     <Product key={key} phone={phone.data}/>
//                     // ))
                    
//                     //console.log(props)
//                     console.log(dataArray)
//                 }
//             </div>
            
//             <Footer/>
//         </>
//     );
// }

// export default Phones;
const Phones = (props) => {
    // useEffect(() => {
    //   getProductByCategory('CellPhone').then((resolvedObject) => {
    //     const dataArray = resolvedObject.data;
    //     setPhoneData(dataArray);
    //     console.log(dataArray);
    //   });
    // }, []);
    
  
    return (
      <>
        <Header />
        <h1 className='text-center m-1'>Display of products</h1>
        <div>
      
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-4">
            {props.phone.map((phone, key) => (
            <Product key={key} phone={phone} />
          ))}
            
            </div>
            <div class="col-4">
            {props.phone.reverse().map((phone, key) => (
            <Product key={key} phone={phone} />
          ))}
            
            </div>
          </div>

          
        </div>
        <Footer />
      </>
    );
  };
  
  export default Phones;