import React, { Component } from 'react'
import Footer from '../dat/Footer';
import Header from '../dat/Header';
import sample from '../../img/sample.jpg';
class homePage extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <h2 className='text-center'>Home page</h2>
        <div className="container">
        <div class="row p-3">
        <div class="col-6">
            <div class="card w-100">
              {/* <!-- card-header --> */}
              <img
                src={sample}
                class="card-img-top"
                alt="freeRE"
              />
            </div>
    </div>
    <div class="col-6">
            <div class="card w-100" >
              {/* card-header  */}
              <div class="card-header">Sample Product Title</div>
              {/* <!-- card-body --> */}
              <div class="card-body">
                {/* <!-- card-title --> */}
                <h5 class="card-title">Summary</h5>
                {/* <!-- card-text --> */}
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non obcaecati error cumque dolor cum. Quam, impedit, consequatur maiores dolore earum, eum odio iste tenetur dolorem assumenda mollitia quisquam eveniet?
                </p>
                <a href="#" class="btn btn-primary ms-5 px-5 ">Buy Now</a>
              </div>
              {/* <!-- card-footer --> */}
      
            </div>
          </div>
    
  </div>
  
  <div class="row p-3">
  <div class="col-6">
            <div class="card w-100" >
              {/* card-header  */}
              <div class="card-header">Sample Product Title</div>
              {/* <!-- card-body --> */}
              <div class="card-body">
                {/* <!-- card-title --> */}
                <h5 class="card-title">Summary</h5>
                {/* <!-- card-text --> */}
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non obcaecati error cumque dolor cum. Quam, impedit, consequatur maiores dolore earum, eum odio iste tenetur dolorem assumenda mollitia quisquam eveniet?
                </p>
                <a href="#" class="btn btn-primary ms-5 px-5 ">Buy Now</a>
              </div>
              {/* <!-- card-footer --> */}
      
            </div>
          </div>
          <div class="col-6">
            <div class="card w-100">
              {/* <!-- card-header --> */}
              <img
                src={sample}
                class="card-img-top"
                alt="freeRE"
              />
            </div>
    </div>
    
  </div>
  <div class="row p-3">
  <div class="col-6 ">
            <div class="card w-100">
              {/* <!-- card-header --> */}
              <img
                src={sample}
                class="card-img-top"
                alt="freeRE"
              />
            </div>
    </div>
    <div class="col-6">
            <div class="card w-100" >
              {/* card-header  */}
              <div class="card-header">Sample Product Title</div>
              {/* <!-- card-body --> */}
              <div class="card-body">
                {/* <!-- card-title --> */}
                <h5 class="card-title">Summary</h5>
                {/* <!-- card-text --> */}
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non obcaecati error cumque dolor cum. Quam, impedit, consequatur maiores dolore earum, eum odio iste tenetur dolorem assumenda mollitia quisquam eveniet?
                </p>
                <a href="#" class="btn btn-primary ms-5 px-5 ">Buy Now</a>
              </div>
              {/* <!-- card-footer --> */}
      
            </div>
          </div>
    
  </div>
        </div>
        <Footer/>
      </div>

      
    );
  }
}
export default homePage;