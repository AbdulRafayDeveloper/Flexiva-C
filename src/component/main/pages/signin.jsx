import React, { useState } from "react";
import "../assets/css/form.css";
import thankU from '../assets/image/thanku.png'
import { useDispatch, useSelector } from "react-redux";
import { setUserField } from "../../features/userSlicer";


function Signin() {
  const [step, setStep] = useState(0);
  const [hideButton, setHideButton] = useState(0);


  const step_form = step + 1;

  const Form = () => {
    if (step == 0) {
      return <Login />;
    } else if (step == 1) {
      return <Contact />;
    }
    // else if (step == 2) {
    //   return <Social />;
    // } 
    else if (step == 2) {
      return <Welcome />;
    }
  };
  const Login = () => {
    const userStateData = useSelector((state) => state.user.data);
    const [user, setUser] = useState({ dob: userStateData?.dob || "", gender: "", phone: "", addressLine1: "", addressLine2: "", city: "", state: "", zipCode: "" });
    const onChange = (element) => {
      const name=element.target.name;
      if(userStateData.name){
        dispatch(setUserField({name:element.target.value}));
      }else{
        setUser({ ...user, [element.target.name]: element.target.value });
      }
    }
    const dispatch = useDispatch();
    return (
      <>
        <div className="form_body">
          <div className="header_form">
            <h4>Personal Information</h4>
            <p>
              Please complete the following information to enroll in our Fitness
              and Weight Loss Program
            </p>
            {/* <span>{step_form}</span> */}
          </div>
          <div className="form_data">
            <div className="container">
              <div class="row py-5">
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="text" placeholder="Full Name*" value={userStateData?.fullName} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="date" placeholder="Date of Birth*" name="dob"  onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="text" placeholder="Gender*" name="gender" onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="email" placeholder="Email Address*" value={userStateData?.email} required />
                </p>
                <p class="col-lg-6 col-md-12 col-sm-12">
                  <input type="number" placeholder="Phone Number*" name="phone" onChange={onChange} required />
                </p>
                <p class="col-lg-12 col-md-12 col-sm-12">
                  <input type="text" placeholder="Address line 1*" name="addressLine1" onChange={onChange} required />
                </p>
                <p class="col-lg-12 col-md-6 col-sm-12">
                  <input type="text" placeholder="Address line 2*" name="addressLine2" onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="text" placeholder="City*" name="city" onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12" />
                <input type="text" placeholder="State/Province/Region" name="state" onChange={onChange} required />
                <p>
                  <p class="col-lg-6 col-md-6 col-sm-12" />
                  <input type="number" placeholder="Zip/Postal Code*" name="zipCode" onChange={onChange} required />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_form">
          <button
            onClick={() => {
              dispatch(setUserField(user));
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
    const [user, setUser] = useState({
      medicalCondition: false,
      medicalConditionYesDetail: "",
      medication: false,
      medicationYesDetail: "",
      fitnessWeightLossGoalDesc: ""
    });

    const onChange = (element) => {
      setUser({ ...user, [element.target.name]: element.target.value });
    }
    const dispatch = useDispatch();
    return (
      <>
        <div className="form_body">
          <div className="header_form">
            <h4 >Health Information & Fitness and Weight Loss Goals </h4>
            <p >Please complete the following information to enroll in our Fitness and Weight
              Loss Program</p>
            {/* <span>{step_form}</span> */}
          </div>
          <div className="form_data">
            <div className="container">
              <div class="s_form py-5">
                <div class="f_qus">
                  <p>Do you have any existing medical conditions or health concerns? </p>
                  <div class="form-check ms-3">
                    <input class="form-check-input" type="radio" name="medicalCondition" value={true} onChange={onChange} id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div class="form-check ms-3">
                    <input class="form-check-input" type="radio" name="medicalCondition" value={false} onChange={onChange} id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
                {user.medicalCondition === "true" && (
                <div class="s_qus my-1">
                  <label class="form-label" for="text1">
                    If yes, please provide details:
                  </label>
                  <input class="form-control m-1" type="text" name="medicalConditionYesDetail" onChange={onChange} id="text1" />

                </div>
                )}
                <div class="s_form py-3">
                  <div class="f_qus">
                    <p>Are you currently taking any medications? </p>
                    <div class="form-check ms-3">
                      <input class="form-check-input" type="radio" name="medication" value={true} onChange={onChange} id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check ms-3">
                      <input class="form-check-input" type="radio" name="medication" value={false} onChange={onChange} id="flexRadioDefault2" />
                      <label class="form-check-label" for="flexRadioDefault2">
                        No
                      </label>
                    </div>
                  </div>
                  {user.medication === "true" && (
                    <div class="s_qus my-1">
                      <label class="form-label" for="text1">
                        If yes, please provide details:
                      </label>
                      <input class="form-control m-1" type="text" name="medicationYesDetail" onChange={onChange} id="text1" />
                    </div>
                  )}
                </div>
                <div class="s_form py-3">
                  <div class="f_qus">
                    <p>Please briefly describe your fitness or weight loss goals: </p>
                  </div>
                  <div class="s_qus my-1">
                    <input class="form-control m-1" type="text" name="fitnessWeightLossGoalDesc" onChange={onChange} id="text1" />
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
              dispatch(setUserField(user));
              setStep(step + 1);
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  };

  //   const Social = () => {
  //     return (
  //       <>
  //         <div className="form_body">
  //           <div className="header_form">
  //             <h1>Social Info</h1>
  //             <span>{step_form}</span>
  //           </div>
  //           <div className="form_data">
  //             <div className="input_field">
  //               <input type="text" required />
  //               <span>Facebook</span>
  //             </div>

  //             <div className="input_field">
  //               <input type="text" required />
  //               <span>Instgram</span>
  //             </div>

  //             <div className="input_field">
  //               <input type="text" required />
  //               <span>Linkedin</span>
  //             </div>

  //             <div className="input_field">
  //               <input type="text" required />
  //               <span>Twitter</span>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="footer_form">
  //           <button
  //             onClick={() => {
  //               setStep(step - 1);
  //             }}
  //           >
  //             Previous
  //           </button>
  //           <button
  //             onClick={() => {
  //               setStep(step + 1);
  //             }}
  //           >
  //             Finish
  //           </button>
  //         </div>
  //       </>
  //     );
  //   };

  const Welcome = () => {
    return (
      <>
        <div className="final">
          <div className="final_content">
            <span className="check">
              <img src={thankU} alt="thankU" />
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

export default Signin;
