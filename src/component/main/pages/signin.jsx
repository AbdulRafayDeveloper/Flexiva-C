import React, { useEffect, useState } from "react";
import "../assets/css/form.css";
import thankU from '../assets/image/thanku.png'
import { useDispatch, useSelector } from "react-redux";
import { registerUser, setUserField } from "../../features/userSlicer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Signin() {

  const navigate=useNavigate();
   // The empty dependency array means this useEffect will run once after the initial render

  const userStateData = useSelector((state) => state.user.data);
  useEffect(() => {
    if (!userStateData || !userStateData.fullName || !userStateData.email) {
      navigate('/');
    }
  }, [userStateData]);

  useEffect(() => {
    // If userStateData exists, setup the beforeunload event listener
    if (userStateData) {
      const handleBeforeUnload = (e) => {
        e.preventDefault(); // Required for cross-browser compatibility
        e.returnValue = ''; // This message is ignored by most browsers but can be used as a fallback for older browsers
        return ''; // This is the actual message that will be displayed in the alert
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [userStateData]);
  
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
    else if (step == 2 ) {
      return <Welcome />;
    }
  };
  const Login = () => {
    const userStateData = useSelector((state) => state.user.data);
    const [emptyFields, setEmptyFields] = useState([]);
    const [user, setUser] = useState({ dob: userStateData?.dob || "", gender: "", phone: "", addressLine1: "", addressLine2: "", city: "", state: "", zipCode: "" });
    const dispatch = useDispatch();

    const onChange = (element) => {
      const name=element.target.name;
      if(userStateData.name){
        dispatch(setUserField({name:element.target.value}));
      }else{
        setUser({ ...user, [element.target.name]: element.target.value });
      }
    }
   

    const handleNextClick = () => {
      const requiredFields = [ "dob", "gender", "phone", "addressLine1", "addressLine2", "city", "zipCode"];
      const empty = requiredFields.filter(field => !user[field]);
      setEmptyFields(empty);
  
      if (empty.length === 0) {
        dispatch(setUserField(user));
        setStep(step + 1);
      }else{
        console.log(empty);
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Please fill all required fields!'
        });
      }
    };
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
                  <input type="date" placeholder="Date of Birth*" name="dob"  style={{ borderColor: emptyFields.includes("dob") ? "red" : "" }}  onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="text" placeholder="Gender*" name="gender" style={{ borderColor: emptyFields.includes("gender") ? "red" : "" }} onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="email" placeholder="Email Address*" value={userStateData?.email} required />
                </p>
                <p class="col-lg-6 col-md-12 col-sm-12">
                  <input type="number" placeholder="Phone Number*" name="phone" style={{ borderColor: emptyFields.includes("phone") ? "red" : "" }} onChange={onChange} required />
                </p>
                <p class="col-lg-12 col-md-12 col-sm-12">
                  <input type="text" placeholder="Address line 1*" name="addressLine1" style={{ borderColor: emptyFields.includes("addressLine1") ? "red" : "" }} onChange={onChange} required />
                </p>
                <p class="col-lg-12 col-md-6 col-sm-12">
                  <input type="text" placeholder="Address line 2*" name="addressLine2" style={{ borderColor: emptyFields.includes("addressLine2") ? "red" : "" }} onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12">
                  <input type="text" placeholder="City*" name="city" style={{ borderColor: emptyFields.includes("city") ? "red" : "" }} onChange={onChange} required />
                </p>
                <p class="col-lg-6 col-md-6 col-sm-12" />
                <input type="text" placeholder="State/Province/Region" name="state" onChange={onChange} required />
                <p>
                  <p class="col-lg-6 col-md-6 col-sm-12" />
                  <input type="number" placeholder="Zip/Postal Code*" name="zipCode" style={{ borderColor: emptyFields.includes("zipCode") ? "red" : "" }} onChange={onChange} required />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_form">
        <button onClick={handleNextClick}>
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
      fitnessWeightLossGoalDesc: "",
      role: "user"
    });
    const [emptyFields, setEmptyFields] = useState([]);

    const onChange = (element) => {
      if(element.target.name == "medicalCondition" || element.target.name == "medication"){
        const value = element.target.value === "true"; // Convert string "true" or "false" to actual boolean value
        setUser({ ...user, [element.target.name]: value });
      }else{
        setUser({ ...user, [element.target.name]: element.target.value });
      }
    }
    const userStateData = useSelector((state) => state.user.data);
    const dispatch = useDispatch();

    const handleNextClick = async () => {
      let requiredFields;
    
      if (user.medicalCondition && !user.medication) {
        requiredFields = ["medicalConditionYesDetail", "fitnessWeightLossGoalDesc"];
      } else if (user.medication && !user.medicalCondition) {
        requiredFields = ["medicationYesDetail", "fitnessWeightLossGoalDesc"];
      }else if (user.medication && user.medicalCondition) {
        requiredFields = ["medicalConditionYesDetail","medicationYesDetail", "fitnessWeightLossGoalDesc"];
      } else{
        requiredFields = ["fitnessWeightLossGoalDesc"];
      }
    
      const empty = requiredFields.filter(field => !user[field]);
      console.log(empty);
      setEmptyFields(empty);
      if (empty.length === 0) {
        try {
          await dispatch(setUserField(user)); // Wait for setUserField to complete
          await dispatch(registerUser(userStateData)); // Wait for registerUser to complete
          // setStep(step + 1);
        } catch (error) {
          console.error("Error setting user or registering:", error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to set user or register. Please try again!'
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill all required fields!'
        });
      }      
    };


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
                    <input class="form-check-input" type="radio" name="medicalCondition" checked={user.medicalCondition}   value={true} onChange={onChange} id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                    </label>
                  </div>
                  <div class="form-check ms-3">
                    <input class="form-check-input" type="radio" name="medicalCondition"  checked={!user.medicalCondition}  value={false} onChange={onChange} id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
                {user.medicalCondition === true && (
                <div class="s_qus my-1">
                  <label class="form-label" for="text1">
                    If yes, please provide details:
                  </label>
                  <input class="form-control m-1" type="text" name="medicalConditionYesDetail"  onChange={onChange} id="text1" />

                </div>
                )}
                <div class="s_form py-3">
                  <div class="f_qus">
                    <p>Are you currently taking any medications? </p>
                    <div class="form-check ms-3">
                      <input class="form-check-input" type="radio" name="medication" checked={user.medication}  value={true} onChange={onChange} id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check ms-3">
                      <input class="form-check-input" type="radio" name="medication" checked={!user.medication} value={false} onChange={onChange} id="flexRadioDefault2" />
                      <label class="form-check-label" for="flexRadioDefault2">
                        No
                      </label>
                    </div>
                  </div>
                  {user.medication === true && (
                    <div class="s_qus my-1">
                      <label class="form-label" for="text1">
                        If yes, please provide details:
                      </label>
                      <input class="form-control m-1" type="text" name="medicationYesDetail" style={{borderColor: 'red'}} onChange={onChange} id="text1" />
                    </div>
                  )}
                </div>
                <div class="s_form py-3">
                  <div class="f_qus">
                    <p>Please briefly describe your fitness or weight loss goals: </p>
                  </div>
                  <div class="s_qus my-1">
                    <input class="form-control m-1" type="text" name="fitnessWeightLossGoalDesc" style={{ borderColor: emptyFields.includes("fitnessWeightLossGoalDesc") ? "red" : "" }} onChange={onChange} id="text1" />
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
          <button onClick={handleNextClick}>
          Next
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
