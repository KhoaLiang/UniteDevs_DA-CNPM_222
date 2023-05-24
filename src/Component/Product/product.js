import React from 'react';
import { useNavigate } from 'react-router-dom'

 const Product = ({phone}) => {
  const navigate=useNavigate();
  return (
    // style={{width: '18rem'}}
<>

    <div className="card text-start " onClick={()=>{navigate(`/product/${phone.id}`)}} >
      <img className="card-img-top" src={phone.image} width="370" height="450" alt="TOTF"/>
      <div className="card-body">
        <h4 className="card-title">{phone.name}</h4>
        <p className="card-text">Color style:  {phone.color}</p>
        <p className="card-text">{phone.price} VND</p>
        <a href="#" class="btn btn-primary">Click for more detail</a>
      </div>
    </div>
</>
  );
}
export default Product;