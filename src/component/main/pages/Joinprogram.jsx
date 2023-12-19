import React from "react";
import { Link } from "react-router-dom";


function Joinprogram() {
  return (
    <>
    
      <div class="container">
        <div class="row py-5">
          <div class="mem_form">
            <h2 className="text-center">
              Flexiva Fitness and Weight Loss Program
            </h2>
            <p className="text-center">
              Please complete the following information to enroll in our Fitness
              and Weight Loss Program
            </p>
            <div class="container py-5">
              <div class="row">
                <form>
                  <div class="row py-5">
                    <h4>Personal Information:</h4>
                    <div class="row py-3">
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input type="text" placeholder="Full Name*" />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input type="date" placeholder="Date of Birth*" />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input type="text" placeholder="Gender*" />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input type="email" placeholder="Email Address*" />
                      </p>
                      <p class="col-lg-6 col-md-12 col-sm-12">
                        <input type="number" placeholder="Phone Number*" />
                      </p>
                    </div>
                    <h4>Address:</h4>
                    <div class="row py-3">
                      <p class="col-lg-12 col-md-12 col-sm-12">
                        <input type="text" placeholder="Address line 1*" />
                      </p>
                      <p class="col-lg-12 col-md-6 col-sm-12">
                        <input type="text" placeholder="Address line 2*" />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input type="text" placeholder="City*" />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          placeholder="State/Province/Region"
                        />
                      </p>
                      <p class="col-lg-6 col-md-6 col-sm-12">
                        <input type="number" placeholder="Zip/Postal Code*" />
                      </p>
                    </div>
                    <h4>Health Information:</h4>
                    <div class="s_form py-3">
                      <div class="f_qus">
                        <p>
                          Do you have any existing medical conditions or health
                          concerns?{" "}
                        </p>
                        <div class="form-check ms-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="HealthInfo"
                            id="Health1"
                          />
                          <label class="form-check-label" for="Health1">
                            Yes
                          </label>
                        </div>
                        <div class="form-check ms-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="HealthInfo"
                            id="Health2"
                          />
                          <label class="form-check-label" for="Health2">
                            No
                          </label>
                        </div>
                      </div>
                      <div class="s_qus my-1">
                        <label class="form-label" for="text1">
                          If yes, please provide details:
                        </label>
                        <input
                          class="form-control m-1"
                          type="text"
                          name="text"
                          id="text1"
                        />
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>Are you currently taking any medications? </p>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="HealthInfo1"
                              id="Health3"
                            />
                            <label class="form-check-label" for="Health3">
                              Yes
                            </label>
                          </div>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="HealthInfo1"
                              id="Health4"
                            />
                            <label class="form-check-label" for="Health4">
                              No
                            </label>
                          </div>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            If yes, please provide details:
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                    </div>
                    <h4>Fitness and Weight Loss Goals:</h4>
                    <div class="s_form py-3">
                      <div class="f_qus">
                        <p>
                          Please briefly describe your fitness or weight loss
                          goals:{" "}
                        </p>
                      </div>
                      <div class="s_qus my-1">
                        <textarea
                          class="form-control m-1"
                          type="text"
                          name="text"
                          id="text1"
                        ></textarea>
                      </div>
                    </div>
                    <h4>Previous Exercise Experience:</h4>
                    <div class="s_form py-3">
                      <div class="f_qus">
                        <p>
                          Have you participated in any fitness or exercise
                          programs before?{" "}
                        </p>
                        <div class="form-check ms-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="PreviousPrevious1"
                          />
                          <label class="form-check-label" for="Previous1">
                            Yes
                          </label>
                        </div>
                        <div class="form-check ms-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="Previous2"
                          />
                          <label class="form-check-label" for="Previous2">
                            No
                          </label>
                        </div>
                      </div>
                      <div class="s_qus my-1">
                        <label class="form-label" for="text1">
                          If yes, please provide details:
                        </label>
                        <input
                          class="form-control m-1"
                          type="text"
                          name="text"
                          id="text1"
                        />
                      </div>
                    </div>
                    <h4>Age, Weight, and Height:</h4>
                    <div class="row py-3">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group row mb-1">
                          <label for="age" class="col-sm-2 col-form-label">
                            Age:
                          </label>
                          <div class="col-sm-10">
                            <input
                              type="number"
                              class="form-control-plaintext"
                              placeholder="Years"
                              id="age"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group row mb-1">
                          <label for="Weight" class="col-sm-2 col-form-label">
                            Weight:
                          </label>
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control-plaintext"
                              id="Weight"
                              placeholder="lbs/kg"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group row mb-1">
                          <label for="Height" class="col-sm-2 col-form-label">
                            Height:
                          </label>
                          <div class="col-sm-4">
                            <input
                              type="text"
                              class="form-control-plaintext"
                              id="Height"
                              placeholder="ft/inches"
                              value=""
                            />
                          </div>
                          <label for="Height" class="col-sm-2 col-form-label">
                            Or
                          </label>
                          <div class="col-sm-4">
                            <input
                              type="text"
                              class="form-control-plaintext"
                              id="Height"
                              placeholder="cm"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Program Selection:</h4>
                    <div class="row py-3">
                      <div class="col-sm-6">
                        <div class="fit_pro">
                          <label for="Fitness">Fitness Program</label>
                          <input
                            type="radio"
                            id="Fitness"
                            name="fav_language"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="fit_pro">
                          <label for="Weightloss">Weight Loss Program</label>
                          <input
                            type="radio"
                            id="Weightloss"
                            name="fav_language"
                            value=""
                          />
                        </div>
                      </div>
                      <p class="py-3 text-center">
                        Certainly, here are some additional health-related
                        questions that can help you better understand the health
                        and fitness status of your customers:
                      </p>
                    </div>
                    <h4>Health History:</h4>
                    <div class="row py-3">
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Do you have any allergies, food sensitivities, or
                            dietary restrictions we should be aware of?{" "}
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Have you undergone any surgeries or medical
                            procedures in the past?{" "}
                          </p>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="medical1"
                              id="medical1"
                            />
                            <label class="form-check-label" for="medical1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="medical1"
                              id="surgeries1"
                            />
                            <label class="form-check-label" for="surgeries1">
                              No
                            </label>
                          </div>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            If yes, please provide details and dates:
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Are you currently experiencing any pain or
                            discomfort, particularly in the joints or muscles?{" "}
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            Please describe:
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                    </div>
                    <h4>Medical Conditions:</h4>
                    <div class="row  py-3">
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Do you have a history of chronic medical conditions
                            such as diabetes, hypertension, heart disease, or
                            respiratory conditions?
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Are you currently under the care of a healthcare
                            provider or specialist for any medical condition?{" "}
                          </p>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="MedicalCon"
                              id="MedicalCon1"
                            />
                            <label class="form-check-label" for="MedicalCon1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="MedicalCon"
                              id="MedicalCon2"
                            />
                            <label class="form-check-label" for="MedicalCon2">
                              No
                            </label>
                          </div>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            If yes, please provide details and dates:
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                    </div>
                    <h4>Medications and Supplements:</h4>
                    <div class="row  py-3">
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Are you taking any dietary supplements, vitamins, or
                            herbal remedies?{" "}
                          </p>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Medications"
                              id="Medications1"
                            />
                            <label class="form-check-label" for="Medications1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Medications"
                              id="Medications2"
                            />
                            <label class="form-check-label" for="Medications2">
                              No
                            </label>
                          </div>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            If yes, please list them:
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Are you currently using any mobility aids or
                            assistive devices, such as crutches, braces, or a
                            wheelchair?
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <h4>Lifestyle and Habits:</h4>
                    <div class="row  py-3">
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>Do you smoke or use tobacco products? </p>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Lifestyle"
                              id="Lifestyle1"
                            />
                            <label class="form-check-label" for="Lifestyle1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Lifestyle"
                              id="Lifestyle2"
                            />
                            <label class="form-check-label" for="Lifestyle2">
                              No
                            </label>
                          </div>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            If yes, how frequently?
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>Do you consume alcoholic beverages? </p>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Habits"
                              id="Habits1"
                            />
                            <label class="form-check-label" for="Habits1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Habits"
                              id="Habits2"
                            />
                            <label class="form-check-label" for="Habits2">
                              No
                            </label>
                          </div>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            If yes, how often and in what quantities?
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                    </div>
                    <h4>Fitness History:</h4>
                    <div class="row  py-3">
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            How would you describe your current fitness level?{" "}
                          </p>
                          <label class="form-label" for="text1">
                            (e.g., sedentary, moderately active, very active)
                          </label>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Have you previously worked with a fitness trainer or
                            participated in any exercise programs?{" "}
                          </p>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Fitness"
                              id="Fitness1"
                            />
                            <label class="form-check-label" for="Fitness1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="Fitness"
                              id="Fitness2"
                            />
                            <label class="form-check-label" for="Fitness2">
                              No
                            </label>
                          </div>
                        </div>
                        <div class="s_qus my-1">
                          <label class="form-label" for="text1">
                            If yes, how frequently?
                          </label>
                          <input
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          />
                        </div>
                      </div>
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Are there any specific fitness goals you would like
                            to achieve through our program, such as weight loss,
                            muscle gain, improved flexibility, or increased
                            cardiovascular fitness?
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <h4>Nutrition and Diet:</h4>
                    <div class="row  py-3">
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            What is your typical daily dietary intake like? Are
                            you following any specific diet plan or eating
                            regimen?{" "}
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>

                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Do you have any dietary preferences or restrictions,
                            such as vegetarian, vegan, gluten-free, or other
                            dietary choices?
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <h4>Additional Information:</h4>
                    <div class="row  py-3">
                      <div class="s_form py-3">
                        <div class="f_qus">
                          <p>
                            Is there any other health-related information you
                            believe is important for us to know in order to
                            provide you with the best fitness and weight loss
                            program experience?
                          </p>
                        </div>
                        <div class="s_qus my-1">
                          <textarea
                            class="form-control m-1"
                            type="text"
                            name="text"
                            id="text1"
                          ></textarea>
                        </div>
                      </div>
                      <h5>
                        By gathering comprehensive health-related information,
                        you can tailor your fitness and weight loss programs to
                        the specific needs and goals of each customer, ensuring
                        a more effective and personalized approach to their
                        well-being journey. Remember to handle this information
                        with care and in compliance with privacy regulations.
                      </h5>
                      <p>
                        By submitting this application, I acknowledge that I
                        have read and agree to abide by the terms and conditions
                        of Flexiva Fitness and Weight Loss Program.
                      </p>
                    </div>
                  </div>
                  <div class="sign_but mt-3 ms-3 ros_box">
                    <Link class="Creat_btn" to={'/paymentmethod'}>
                      Submit & Pay
                      {/* <!-- <button class="btn" type="submit" ></button> --> */}
                      <img src="assets/image/arrow-right.png" alt="" />
                    </Link>
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

export default Joinprogram;
