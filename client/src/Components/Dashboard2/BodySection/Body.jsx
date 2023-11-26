import React from "react";
import "./body.css";
import video1 from "../../../Assets/video1.mp4";
import { useState } from "react";

import axios from "axios";

const Body = () => {
  const [userInput, setUserInput] = useState({
    Gender: "",
    Age: "",
    Education: "",
    Occupation: "",
    District: "",
    CameraSatisfaction: "",
    MemorySatisfaction: "",
    PerformanceSatisfaction: "",
    BatterySatisfaction: "",
    spend_amount: "",
    Education_purpose: 0,
    Entertaintment_purpose: 0,
    Gaming_purpose: 0,
    Occupation_purpose: 0,
    Photography_purpose: 0,
    Socializing_purpose: 0,

    // ... other input fields
  });
  const [predictions, setPredictions] = useState([]);
  const [predictedBrands, setPredictedBrands] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleCheckboxChange = (name, value) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };
  const handlePredict = async () => {
    // Make a POST request to the FastAPI predict_mobile endpoint

    console.log("hi");
    console.log(userInput);

    axios
      .post("http://localhost:8000/predict", userInput)
      .then((response) => {
        setPredictions(response.data.prediction);
        // const rankedPredictions = response.data.prediction;
         // Display the ranked predictions in your UI
    console.log("Ranked Predictions:", predictions);


    const predictedBrand = response.data.prediction;
        // const brandsArray = predictedBrand.split('');

        // setPredictedBrands(brandsArray);
        setPredictedBrands(predictedBrand)
    
      })
      .catch((error) => {
        console.error("Error fetching prediction:", error);
      });
  };

  return (
    <>
      <div className="form-container">
        <div className="header">
          <h1>Get Recommend your Most suitable mobile phone</h1>
        </div>
        {/* <h2>Input Your Details</h2> */}
        <div className="content">
          <form className="form-content" onSubmit={handleSubmit}>
            {/* <label className="label">
          Age:
          <input className="select" type="text" name="age" />
        </label> */}

            <div className="select-container">
              <label className="label">Age:</label>
              <select
                name="Age"
                value={userInput.Age}
                onChange={handleInputChange}
                className="select"
              >
                <option value="" disabled hidden>Select your Age</option>
                <option value={1}>12-17
</option>
                <option value={2}>18-25</option>
                <option value={3}>26-34</option>
                <option value={4}>35-54</option>
                <option value={5}>55-</option>
              </select>
            </div>
            <div className="select-container">
              <label className="label">Gender:</label>
              <select
                name="Gender"
                value={userInput.Gender}
                onChange={handleInputChange}
                className="select"
              >
                <option value="" disabled hidden>Select your Gender</option>
                <option value={0}>Female</option>
                <option value={1}>Male</option>
              </select>
            </div>

            <div className="select-container">
              <label className="label">Occupation:</label>
              <select
                name="Occupation"
                value={userInput.Occupation}
                onChange={handleInputChange}
                className="select"
              >
                 <option value="" disabled hidden>Select your Occupation</option>
                <option value={1}>Other</option>
                <option value={2}>Unemployed</option>
                <option value={3}>University Student</option>
                <option value={4}>School Student</option>
                <option value={5}>
                  Business and Financial Operations Occupations
                </option>
                <option value={6}>Management Occupations</option>
                <option value={7}>
                  Office and Administrative Support Occupations
                </option>
                <option value={8}>
                  Educational Instruction and Library Occupations
                </option>
                <option value={9}>Sales and Related Occupations</option>
                <option value={10}>
                  Computer and Mathematical Occupations
                </option>
                <option value={11}>Healthcare Support Occupations</option>
                <option value={12}>
                  Food Preparation and Serving Related Occupations
                </option>
                <option value={13}>
                  Arts, Design, Entertainment, Sports, and Media Occupations
                </option>
                <option value={14}>
                  Healthcare Practitioners and Technical Occupations
                </option>
                <option value={15}>Production Occupations</option>
                <option value={16}>
                  Farming, Fishing, and Forestry Occupations
                </option>
                <option value={17}>
                  Life, Physical, and Social Science Occupations
                </option>
              </select>
            </div>
            <div className="select-container">
              <label className="label">Education:</label>
              <select
                name="Education"
                value={userInput.Education}
                onChange={handleInputChange}
                className="select"
              >
                 <option  style={{color: 'rgba(0, 0, 0, 0.1)'}}  value="" disabled hidden >Select your Education Level</option>
                <option value={1}>O/L or Below</option>
                <option value={2}>A/L</option>
                <option value={3}>Diploma</option>
                <option value={4}>Degree</option>
              </select>
            </div>
            <div className="select-container">
              <label className="label">District: District: </label>
              <select
                name="District"
                value={userInput.District}
                onChange={handleInputChange}
                className="select"
              >
                 <option value="" disabled hidden>Select your District</option>
                <option value={1}>Colombo</option>
                <option value={2}>Gampaha</option>
                <option value={3}>Kandy</option>
                <option value={4}>Kalutara</option>
                <option value={5}>Kurunegala</option>
                <option value={6}>Galle</option>
                <option value={7}>Kegalle</option>
                <option value={8}>Ratnapura</option>
                <option value={9}>Anuradhapura</option>
                <option value={10}>Badulla</option>
                <option value={11}>Matara</option>
                <option value={12}>Nuwara Eliya</option>
                <option value={13}>Moneragala</option>
                <option value={14}>Puttalam</option>
                <option value={15}>Hambantota</option>
                <option value={16}>Matale</option>
                <option value={17}>Ampara</option>
              </select>
            </div>
            <div className="select-container">
              <label className="label">Need Quality Photoes:</label>
              <select
                name="CameraSatisfaction"
                value={userInput.CameraSatisfaction}
                onChange={handleInputChange}
                className="select"
              >
                 <option value="" disabled hidden>Rate here</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="select-container">
              <label className="label">Need to store more : </label>
              <select
                name="MemorySatisfaction"
                value={userInput.MemorySatisfaction}
                onChange={handleInputChange}
                className="select"
              >
                 <option value="" disabled hidden>Rate here</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="select-container">
              <label className="label">Need to do things Faster : </label>
              <select
                name="PerformanceSatisfaction"
                value={userInput.PerformanceSatisfaction}
                onChange={handleInputChange}
                className="select"
              >
                 <option value="" disabled hidden>Rate here</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <div className="select-container">
              <label className="label">Prolonged Phone Use : </label>
              <select
                name="BatterySatisfaction"
                value={userInput.BatterySatisfaction}
                onChange={handleInputChange}
                className="select"
              >
                 <option value="" disabled hidden>Rate here</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <div className="select-container">
              <label className="label">Spend Amount: </label>

              <select
                name="spend_amount"
                value={userInput["spend_amount"]}
                onChange={handleInputChange}
                className="select"
              >
                 <option value="" disabled hidden>Rate here</option>
                <option value={1}>&lt;25000</option>
                <option value={2}>25000-50000</option>
                <option value={3}>50000-100000</option>
                <option value={4}>100000-200000</option>
                <option value={5}>200000-300000</option>
                <option value={6}>300000-400000</option>
              </select>
            </div>
            <div className="select-container">
              <label className="label">Education-purpose: </label>
              <input
                type="checkbox"
                name="Education_purpose"
                className="select"
                checked={userInput["Education_purpose"] === 1}
                onChange={(e) =>
                  handleCheckboxChange(
                    "Education_purpose",
                    e.target.checked ? 1 : 0
                  )
                }
              />
            </div>
            <div className="select-container">
              <label className="label">Entertainment-purpose: </label>
              <input
                type="checkbox"
                name="Entertainment_purpose"
                className="select"
                checked={userInput["Entertainment_purpose"] === 1}
                onChange={(e) =>
                  handleCheckboxChange(
                    "Entertainment_purpose",
                    e.target.checked ? 1 : 0
                  )
                }
              />
            </div>

            <div className="select-container">
              <label className="label">Gaming-purpose: </label>
              <input
                type="checkbox"
                name="Gaming_purpose"
                className="select"
                checked={userInput["Gaming_purpose"] === 1}
                onChange={(e) =>
                  handleCheckboxChange(
                    "Gaming_purpose",
                    e.target.checked ? 1 : 0
                  )
                }
              />
            </div>
            <div className="select-container">
              <label className="label">Occupation-purpose: </label>
              <input
                type="checkbox"
                className="select"
                name="Occupation_purpose"
                checked={userInput["Occupation_purpose"] === 1}
                onChange={(e) =>
                  handleCheckboxChange(
                    "Occupation_purpose",
                    e.target.checked ? 1 : 0
                  )
                }
              />
            </div>
            <div className="select-container">
              <label className="label">Photography-purpose:</label>
              <input
                type="checkbox"
                name="Photography_purpose"
                className="select"
                checked={userInput["Photography_purpose"] === 1}
                onChange={(e) =>
                  handleCheckboxChange(
                    "Photography_purpose",
                    e.target.checked ? 1 : 0
                  )
                }
              />
            </div>
            <div className="select-container">
              <label className="label">Socializing-purpose:</label>
              <input
                type="checkbox"
                name="Socializing_purpose"
                className="select"
                checked={userInput["Socializing_purpose"] === 1}
                onChange={(e) =>
                  handleCheckboxChange(
                    "Socializing_purpose",
                    e.target.checked ? 1 : 0
                  )
                }
              />
            </div>

            {/* <button  className="btns" onClick={handlePredict}>Predict</button> */}

            {/* <p>Predicted Brand: {predictions}</p> */}
{/* 
            <button className="btns" type="submit">
              Submit
            </button> */}
          </form>
          <div className="img-container">
            <video src={video1} autoPlay loop muted></video>
            {/* <p>Predicted Brand: {predictions}</p> */}
            <button  className="btns" onClick={handlePredict}>Predict</button>

            <div className="predicted-brands">
        <p className="pr-p">Predicted Brands:</p>
   
{/* <ul >
  
          {predictedBrands.map((brand, index) => (
            
            <li key={index}>{index+1}).   {brand}</li>
          ))}
        </ul> */}
         {/* <button  className="btns" onClick={handlePredict}>Predict</button> */}
         <div className="brand-columns">
  <ul className="column">
    {predictedBrands.slice(0, 4).map((brand, index) => (
      <li key={index}>{index + 1}). {brand}</li>
    ))}
  </ul>
  <ul className="column">
    {predictedBrands.slice(4).map((brand, index) => (
      <li key={index + 4}>{index + 5}). {brand}</li>
    ))}
  </ul>
</div>

      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
