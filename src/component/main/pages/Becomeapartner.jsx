import React from "react";
import { Link } from "react-router-dom";


function Becomeapartner() {
  return (
    <>
    
      <div class="container">
        <div class="row py-5">
          <div class="mem_form">
            <h2 className="text-center" >Franchise Application Form</h2>
            <p className="text-center">
              Interested in becoming a part of our franchise family?
              <br />
              We're thrilled to have you on board. Please complete the following
              form to start the application process.
            </p>
            <div class="container py-5">
              <div class="row">
                <form>
                  <div class="row py-5">
                    <h4>Personal Information:</h4>
                    <div class="row py-3">
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input type="text" placeholder="Full Name*" required />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="date"
                          placeholder="Date of Birth*"
                          required
                        />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          placeholder="Contact Number*"
                          required
                        />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="email"
                          placeholder="Email Address*"
                          required
                        />
                      </p>
                      <p class="col-lg-6 col-md-12 col-sm-12">
                        <input
                          type="number"
                          placeholder="Business Info*"
                          required
                        />
                      </p>
                      <p class="col-lg-6 col-md-12 col-sm-12">
                        <input
                          type="number"
                          placeholder="Current Business (if any)"
                        />
                      </p>
                      <p class="col-lg-6 col-md-12 col-sm-12">
                        <input
                          type="number"
                          placeholder="Business Experience (if any)"
                        />
                      </p>
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <input
                          type="text"
                          placeholder="Proposed Location for Franchise:"
                        />
                      </p>
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <input
                          type="text"
                          placeholder="Business Plan Summary:"
                        />
                      </p>
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <input
                          type="text"
                          placeholder="Financial Information:"
                        />
                      </p>
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <input
                          type="text"
                          placeholder="Liquid Capital Available for Investment:"
                        />
                      </p>
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <input type="text" placeholder="Source of Funding:" />
                      </p>
                      <p>
                        What do you believe you can bring to our franchise
                        network?
                      </p>
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea10"
                          rows="3"
                        ></textarea>
                      </p>
                    </div>

                    <h4>Additional Information:</h4>
                    <div class="row py-3">
                      <p>
                        Please provide any additional information you believe is
                        relevant to your franchise application:
                      </p>
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea22"
                          rows="3"
                        ></textarea>
                      </p>
                    </div>

                    <div class="form-check pt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck2"
                        required
                      />
                      <label
                        class="form-check-label lab_11"
                        for="invalidCheck2"
                        
                      >
                        By submitting this application, I acknowledge that I
                        have read and agree to abide by the terms and conditions
                        of [Your Fitness Company Name] Fitness and Weight Loss
                        Program.
                      </label>
                    </div>
                  </div>
                  <div
                    class="sign_but mt-3 ms-3 ros_box"
                    
                  >
                    <Link class="Creat_btn " to={'/paymentmethod'}>
                      Submit & Pay
                      <img src="assets/image/arrow-right.png" alt="" />
                    </Link>
                    {/* <!-- <button class="btn sign_but Creat_btn" type="submit">Submit & Pay
                            <img src="assets/image/arrow-right.png" alt="" />
                            </button> --> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Becomeapartner;
