import React, { useState } from "react";
import "./Register.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
// import video from "../../Assets/video.mp4";
import video from "../../Assets/video1.mp4";
import logo from "../../Assets/logo.png";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  // const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [registrationData, setRegistrationData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email:"",
    userName: "",
    password: "",
  });

  const navigateTo = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });

    // Clear error message when user starts typing
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
console.log('inside handle submit');
    // Validate form fields
    let isValid = true;
    const newErrors = { ...errors };

    if (registrationData.email === "") {
      isValid = false;
      console.log('inside email empty');
      newErrors.email = "email cannot be empty";
    } else {
      newErrors.email = "";
    }
    if (registrationData.userName === "") {
      isValid = false;
      console.log('inside username empty');
      newErrors.userName = "Username cannot be empty";
    } else {
      newErrors.userName = "";
    }

    if (registrationData.password === "") {
      isValid = false;
      newErrors.password = "Password cannot be empty";
    } else {
      newErrors.password = "";
    }

    // Update errors state
    setErrors(newErrors);

    // If form is valid, proceed with user creation
    if (isValid) {
      // alert("User created successfully!");
      // Add logic here to submit the form or perform further actions
      createUser();
    }
    else {
      // Display error messages in a pop-up
      // alert(`Please fix the following errors:\n\n${newErrors.email}\n${newErrors.userName}\n${newErrors.password}`);
      // alert(`<div style="color: red;">Please fix the following errors:</div><div>${newErrors.email}</div><div>${newErrors.userName}</div><div>${newErrors.password}</div>`);
      // setModalIsOpen(true);
       // Display error messages in a toast modal
      //  toast.error(
      //   <div>
      //     <p style={{ color: 'red' }}>Please fix the following errors:</p>
      //     <p>{errors.email}</p>
      //     <p>{errors.userName}</p>
      //     <p>{errors.password}</p>
      //   </div>,
      //   {
      //     position: toast.POSITION.TOP_CENTER,
      //   }
      // );



      toast.error(
        <div>
          <p style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>Please fix the following errors:</p>
          <p style={{ marginBottom: '5px' }}>{errors.email}</p>
          <p style={{ marginBottom: '5px' }}>{errors.userName}</p>
          <p style={{ marginBottom: '5px' }}>{errors.password}</p>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000, // Set the duration in milliseconds, or set to false for no auto close
          hideProgressBar: false, // Set to true to hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the toast when hovered
        }
      );

    }
  };

  const createUser = () => {
    console.log(registrationData.email);
    console.log(registrationData.userName);
    console.log(registrationData.password);
    // e.preventDefault();
    Axios.post("https://full-omega.vercel.app/register", {
      Email: registrationData.email,
      UserName:registrationData.userName,
      Password:registrationData.password,
    }).then((response) => {
      // navigateTo('/');
      // setEmail('');
      // setUserName('');
      // setPassword('');

      // if (email == "" || userName == "" || password == "") {
      //   navigateTo("/register");
      //   setLoginStatus(`Credentials Don't Exist!`);
      // } else
       if (response.data == "exists") {

        navigateTo("/register");
        setLoginStatus(`User Already Exists`);

        setEmail("");
        setUserName("");
      }
       else  if (response.data == "notexists") {
        navigateTo("/");
        setEmail("");
        setUserName("");
        setPassword("");
      }
    });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          {/* <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div> */}

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registrationData.email}
                  placeholder="Enter Email"
                  // onChange={(event) => setEmail(event.target.value)}
                  onChange={handleInputChange}
                />
                 {/* <span style={{ color: 'red' }}>{errors.email}</span> */}
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  name="userName"
                  value={registrationData.userName}
                  placeholder="Enter Username"
                  // onChange={(event) => setUserName(event.target.value)}
                  onChange={handleInputChange}
                />
                 {/* <span style={{ color: 'red' }}>{errors.userName}</span> */}
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={registrationData.password}
                  placeholder="Enter Password"
                  // onChange={(event) => setPassword(event.target.value)}
                  onChange={handleInputChange}
                />
                 {/* <span style={{ color: 'red' }}>{errors.password}</span> */}
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={(e) => handleSubmit(e)}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password ? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
   

    
      <ToastContainer />
    </div>
    
  );
};

export default Register;
