import React from "react";
import { Link } from "react-router-dom";


function Paymentmethod() {
  return (
    <>

      <form action="" class="py-5">
        {/* <!-- One "tab" for each step in the form: --> */}
        <div class="container my-3">
          <h4 className="flex_mem">Flexiva Membership</h4>
          <p className="text-center">
            Please complete the following information to apply for our exclusive
            membership
          </p>
          <div class="row py-5">
            <h4>Membership Type:</h4>
            <div class="row py-3">
              <div class="col-sm-6 my-2">
                <div class="price_mem">
                  <div class="fit_pro">
                    <div class="">
                      <h6>Monthly Membership</h6>
                      <p>(Individual)</p>
                    </div>
                    <input
                      type="radio"
                      id="Fitness"
                      name="fav_language"
                      value=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-6 my-2">
                <div class="fit_pro">
                  <div class="">
                    <h6>Monthly Membership</h6>
                    <p>(Family)</p>
                  </div>
                  <input
                    type="radio"
                    id="Weightloss"
                    name="fav_language"
                    value=""
                    required
                  />
                </div>
              </div>
              <div class="col-sm-6 my-2">
                <div class="price_mem">
                  <div class="fit_pro">
                    <div class="">
                      <h6>Quarterly Membership </h6>
                      <p>(Individual)</p>
                    </div>
                    <input
                      type="radio"
                      id="Fitness"
                      name="fav_language"
                      value=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-6 my-2">
                <div class="fit_pro">
                  <div class="">
                    <h6>Quarterly Membership </h6>
                    <p>(Family)</p>
                  </div>
                  <input
                    type="radio"
                    id="Weightloss"
                    name="fav_language"
                    value=""
                    required
                  />
                </div>
              </div>
            </div>
            <h4>Add Card:</h4>
            <p class="col-lg-6 col-md-6 col-sm-12">
              <input type="text" placeholder="Name On Card*" required />
            </p>
            <p class="col-lg-6 col-md-6 col-sm-12">
              <input type="number" placeholder="Card Number*" required />
            </p>
            <p class="col-lg-6 col-md-6 col-sm-12">
              <input type="text" placeholder="Expiry date*" required />
            </p>
            <p class="col-lg-6 col-md-6 col-sm-12">
              <input type="email" placeholder="CVV*" required />
              <label for="" className="lab_s" >
                Last three digits on signature
              </label>{" "}
            </p>

            <div class="form-check pt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label
                class="form-check-label lab_s"
                for="invalidCheck2"
               
              >
                Remember credit card details for next time
              </label>
            </div>
          </div>
          <div className="over_box1">
            <div className="d-flex">
              <button class="sign_but1" type="button" id="prevBtn">
                {/* <!-- <img src="assets/image/back.png" alt="" /> --> */}
                <Link class="Creat_btn" to={'/'}>
                 
                  Back
                </Link>
              </button>
              <button class="sign_but2" type="button" id="nextBtn">
                <Link class="Creat_btn" to={'/thankU'}>
                
                  Join
                </Link>

                {/* <!-- <img src="assets/image/arrow-right.png" alt="" /> --> */}
              </button>
            </div>
          </div>
        </div>
      </form>
   
    </>
  );
}

export default Paymentmethod;
