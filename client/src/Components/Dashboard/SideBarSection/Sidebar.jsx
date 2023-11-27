import React from "react";
import "./sidebar.css";
// import logo from "../../../Assets/logo.png";
import logo from "../../../Assets/ml3.jpg";
import { IoMdSpeedometer } from "react-icons/io";
import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp, BiLogOutCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleDashboardClick = () => {
    // Perform any additional actions before navigating, if needed
    // For example, you might want to fetch data before navigating

    // Navigate to the dashboard page
    // You should replace '/dashboard' with the actual path of your dashboard page
    window.location.href = "/recommendation";
  };

  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
        <h2>Mobile</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className={`menuLink flex ${isActive ? "active" : ""}`}>
              <IoMdSpeedometer className="icon" />
              <span className="smallText activeLink">Dashboard</span>
            </a>

            <NavLink
              to={"/recommendation"}
              // onClick={toggleMenu}
              // className={ }
            >
              <img src="" alt="" className="micon" />
              {/* <span className="mtext">My Matches</span> */}
            </NavLink>
          </li>

          <li className="listItem">
            {/* <a
              href="#"
              className="menuLink flex"
              onClick={handleDashboardClick}
            > */}
              {/* <Link to="/recommendation" className="menuLink flex">
                <MdDeliveryDining className="icon" />
                <span className="smallText">My Selection</span>
              </Link> */}
              {/* <MdDeliveryDining className="icon" />
              <span className="smallText">My Selection</span> */}
            {/* </a> */}

            <NavLink to="/recommendation" className="menuLink flex" activeClassName="active">
    <MdDeliveryDining className="icon" />
    <span className="smallText">My Selection</span>
  </NavLink>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BiLogOutCircle className="icon" />
              <span className="smallText">Log Out</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Planti, please contact us from for more questions.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
