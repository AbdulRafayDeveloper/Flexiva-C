import React, { useState  } from "react";

import thankU from '../assets/image/thanku.png'

import $ from 'jquery';
// import 'jquery-ui/ui/widgets/slider';

function AppoimentForm() {
//   $("#slider-range").slider({
//     range: true,
//     min: 0,
//     max: 1440,
//     step: 15,
//     values: [540, 1020],
//     slide: function(e, ui) {
//         var hours1 = Math.floor(ui.values[0] / 60);
//         var minutes1 = ui.values[0] - (hours1 * 60);

//         if (hours1.length == 1) hours1 = '0' + hours1;
//         if (minutes1.length == 1) minutes1 = '0' + minutes1;
//         if (minutes1 == 0) minutes1 = '00';
//         if (hours1 >= 12) {
//             if (hours1 == 12) {
//                 hours1 = hours1;
//                 minutes1 = minutes1 + " PM";
//             } else {
//                 hours1 = hours1 - 12;
//                 minutes1 = minutes1 + " PM";
//             }
//         } else {
//             hours1 = hours1;
//             minutes1 = minutes1 + " AM";
//         }
//         if (hours1 == 0) {
//             hours1 = 12;
//             minutes1 = minutes1;
//         }



//         $('.slider-time').html(hours1 + ':' + minutes1);

//         var hours2 = Math.floor(ui.values[1] / 60);
//         var minutes2 = ui.values[1] - (hours2 * 60);

//         if (hours2.length == 1) hours2 = '0' + hours2;
//         if (minutes2.length == 1) minutes2 = '0' + minutes2;
//         if (minutes2 == 0) minutes2 = '00';
//         if (hours2 >= 12) {
//             if (hours2 == 12) {
//                 hours2 = hours2;
//                 minutes2 = minutes2 + " PM";
//             } else if (hours2 == 24) {
//                 hours2 = 11;
//                 minutes2 = "00 PM";
//             } else {
//                 hours2 = hours2 - 12;
//                 minutes2 = minutes2 + " PM";
//             }
//         } else {
//             hours2 = hours2;
//             minutes2 = minutes2 + " AM";
//         }

//         $('.slider-time2').html(hours2 + ':' + minutes2);
//     }
// });
  const [step, setStep] = useState(0);
  const [hideButton, setHideButton] = useState(0);

  const step_form = step + 1;

  const Form = () => {
    if (step == 0) {
      return <Login />;
    } else if (step == 1) {
      return <Contact />;
    } else if (step == 2) {
      return <Social />;}
      else if (step == 3){
        return<SecLast/>
    }
     else if (step == 4) {
      return <Welcome />;
    }
   
  };
  const Login = () => {
    return (
      <>
        <div className="form_body">
          <div className="header_form">
            <h4>Service Booking</h4>

            {/* <span>{step_form}</span> */}
          </div>
          <div className="form_data">
            <div className="container">
              <div class="row py-5">
                <p>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Massage</option>
                    {/* <!-- <option disabled >Massage</option> --> */}
                    <option value="Natural Massage">Natural Massage</option>
                    <option value="Chair Massage">Chair Massage</option>
                    <option value="Deep Massage">Deep Massage</option>
                    <option value="Medical Massage">Medical Massage</option>
                    <option disabled>Stretch</option>
                    <option value="Light Stretching">Light Stretching</option>
                    <option value="Deep Stretching">Deep Stretching</option>
                    <option disabled>Fitness & Weight Loss Program</option>
                  </select>
                </p>
                <div class="row py-5">
                  <div class="col-lg-6 col-md-6 col-sm-12 py-3">
                    <h5>Duration for Massage?</h5>
                    <div class="btn-group col-xs-12">
                      <label class="option">
                        <input class="inp" type="radio" name="optradio" />
                        <span class="btn btn-outline-secondary  btn-option text-dark">
                          45m
                        </span>
                      </label>
                      <label class="option">
                        <input class="inp" type="radio" name="optradio" />
                        <span class="btn btn-outline-secondary btn-option text-dark">
                          60m
                        </span>
                      </label>
                      <label class="option">
                        <input class="inp" type="radio" name="optradio" />
                        <span class="btn btn-outline-secondary btn-option text-dark">
                          70m
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12  py-3">
                    <h5>How Many People?</h5>
                    <div class="btn-group col-xs-12">
                      <label class="option">
                        <input class="inp" type="radio" name="optradio1" />
                        <span class="btn btn-outline-secondary btn-option text-dark">
                          One
                        </span>
                      </label>
                      <label class="option">
                        <input class="inp" type="radio" name="optradio1" />
                        <span class="btn btn-outline-secondary btn-option text-dark">
                          Two
                        </span>
                      </label>
                      <label class="option">
                        <input class="inp" type="radio" name="optradio1" />
                        <span class="btn btn-outline-secondary btn-option text-dark">
                          Three
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12  py-3">
                    <h5>Who is this massage for?</h5>
                    <div class="btn-group col-xs-12">
                      <label class="option">
                        <input class="inp" type="radio" name="optradio2" />
                        <span class="btn btn-outline-secondary btn-option text-dark">
                          Male
                        </span>
                      </label>
                      <label class="option">
                        <input class="inp" type="radio" name="optradio2" />
                        <span class="btn btn-outline-secondary btn-option text-dark">
                          Female
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_form">
          <button
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  };

  const Contact = () => {
    return (
      <>
        <div className="form_body">
          <div className="header_form pt-3">
            <h4>Add Location</h4>
            {/* <span>{step_form}</span> */}
          </div>
          <div className="form_data">
          <div className="container">
            <div class="row py-5">
              <p class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder="First Name*" required/>
              </p>
              <p class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder="Last Name*" required/>
              </p>
             
              <p class="col-lg-12 col-md-12 col-sm-12">
                <input type="text" placeholder="Address line 1*" required/>
              </p>
              <p class="col-lg-12 col-md-6 col-sm-12">
                <input type="text" placeholder="Address line 2*" required/>
              </p>
              <p class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder="City*" required/>
              </p>
              <p class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder="State/Province/Region" required/>
              </p>
              <p class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder="Zip/Postal Code*" required/>
              </p>
              <p class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder="Country*" required/>
              </p>
             
            </div>
            </div>
          </div>
        </div>
        <div className="footer_form">
          <button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  };

  const Social = () => {
    return (
      <>
        <div className="form_body">
          <div className="header_form py-3">
            <h4>Add Time & Date</h4>
            {/* <span>{step_form}</span> */}
          </div>
          <div className="form_data">
           <div className="container">
           <div class="row">
            <div class="timg_div">
                <div class="month">

                    <div class="sd-container">
                        <input class="sd ssd" type="date" name="selected_date"  />
                        <span class="open-button">
                            <button type="button"></button>
                        </span>
                    </div>


                </div>
                <div id="carouselExampleIndicators" class="carousel slide w-100 py-5" data-bs-interval="false" data-bs-ride="carousel">
                    {/* <!-- <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> --> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="num">
                                <div class="num1">
                                    <p>1st</p>
                                    <p>2nd</p>
                                    <p>3rd</p>
                                    <p>4th</p>
                                    <p>5th</p>
                                    <p>6th</p>
                                    <p>7th</p>
                                    <p>8th</p>
                                    <p>9th</p>
                                    <p>10th</p>

                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="num">
                                <div class="num1">
                                    <p>11th</p>
                                    <p>12th</p>
                                    <p>13th</p>
                                    <p>14th</p>
                                    <p>15th</p>
                                    <p>16th</p>
                                    <p>17th</p>
                                    <p>18th</p>
                                    <p>19th</p>
                                    <p>20th</p>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="num">
                                <div class="num1">
                                    <p>21th</p>
                                    <p>22th</p>
                                    <p>23th</p>
                                    <p>24th</p>
                                    <p>25th</p>
                                    <p>26th</p>
                                    <p>27th</p>
                                    <p>28th</p>
                                    <p>29th</p>
                                    <p>30th</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h2 class="start">Start by - Finish by</h2>
                <div class="progras">
                    {/* <!-- <img src="assets/image/progress.png" alt=""> --> */}
                    <div id="time-range">
                        <p><span class="slider-time">9:00 AM</span> - <span class="slider-time2">5:00 PM</span>

                        </p>
                        <div class="sliders_step1">
                            <div id="slider-range"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           </div>

           
          </div>
        </div>
        <div className="footer_form">
          <button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  };
  const SecLast = () => {
    return (
      <>
        <div className="form_body">
          <div className="header_form py-3">
            <h4>Payment</h4>
            {/* <span>{step_form}</span> */}
          </div>
          <div className="form_data">
           <div className="container">
           <div class="row">
                <p class="col-lg-6 col-md-6 col-sm-12"><input type="text" placeholder="Name On Card*" /></p>
                <p class="col-lg-6 col-md-6 col-sm-12"><input type="number" placeholder="Card Number*" /></p>
                <p class="col-lg-6 col-md-6 col-sm-12"><input type="text" placeholder="Expiry date*" /></p>
                <p class="col-lg-6 col-md-6 col-sm-12"><input type="email" placeholder="CVV*" id="last" />
                    <label for="last" className="lab_11">Last three digits on signature</label>
                </p>
                {/* <!-- <div class="handel_radio">
                    <input type="checkbox" id="vehicle3" name="vehicle1" value="Bike" />
                    <label for="vehicle3" style="color: #94969A;"> Remember credit card details for next time</label><br>
                </div> --> */}

            </div>
           </div>

           
          </div>
        </div>
        <div className="footer_form">
          <button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Finish
          </button>
        </div>
      </>
    );
  };

  const Welcome = () => {
    return (
      <>
        <div className="final">
          <div className="final_content">
          <span className="check">
              <img src={thankU} alt="thankU"/>
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
    
      <div className="container">
        <div class="form">
          <div className="card">
            <div>{<Form />}</div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default AppoimentForm;
