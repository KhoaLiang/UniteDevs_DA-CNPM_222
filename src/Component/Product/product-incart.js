import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { AddContext } from '../../App';
import { useContext } from 'react';

 const Product = ({phone, onRemove}) => {
  const navigate=useNavigate();
  const[ count,setCount]= useState(false);
  
  return (
    
<>

    {/* <div className="card text-start " onClick={()=>{navigate(`/product/${phone.id}`)}}>
      <img className="card-img-top" src={phone.image} width="370" height="450" alt="TOTF"/>
      <div className="card-body">
        <h4 className="card-title">{phone.name}</h4>
        <p className="card-text">Color style:  {phone.color}</p>
        <p className="card-text">{phone.price} VND</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div> */}

    {/* Single item */}
    <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                 {/* Image */}
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={phone.image}
                    class="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask" ></div>
                  </a>
                </div>
                 {/* Image */}
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                 {/* Data */}
                <p onClick={()=>{navigate(`/product/${phone.id}`)}}><strong>{phone.name}</strong></p>
                <p>Color style:  {phone.color}</p>
                <p>Place holder</p>
                <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item" onClick={()=>{setCount(!count);onRemove(phone)}}>
                  <i class="fas fa-trash"></i>
                </button>
                {/* <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button> */}

                 {/* Data */}
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                 {/* Quantity */}
                <div class="d-flex mb-4" >
                  <button class="btn btn-primary px-3 me-2"
                    onClick={()=>{ setCount(!count); phone.quantity = phone.quantity-1;
                      if(phone.quantity<1) phone.quantity = 1}}>
                    <i class="fas fa-minus"></i>
                  </button>

                  <div class="form-outline">
                    <input id="form1" min="0" name="quantity" value={phone.quantity} type="disabled" class="form-control" />
                    <label class="form-label" for="form1">Quantity</label>
                  </div>

                  <button class="btn btn-primary px-3 ms-2"
                    onClick={()=>{setCount(!count);phone.quantity = phone.quantity+1;}}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                 {/* Quantity */}

                 {/* Price */}
                <p class="text-start text-md-center">
                  <strong>{phone.quantity * phone.price} VND</strong>
                </p>
                 {/* Price */}
              </div>
            </div>
            
</>
  );
}
export default Product;