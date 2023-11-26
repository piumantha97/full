import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import img from '../../../../Assets/gilbert.jpg'
import p7 from '../../../../Assets/p7a2.png'
import img2 from '../../../../Assets/images (2).png'
import video from '../../../../Assets/video.mp4'
import video1 from '../../../../Assets/video1.mp4'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Mobile</h1>
          <p>Hello Gilbert, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Search and Buy  your next Mobile Phone</h1>
          <p>Don't waste time and money !   Select most suitable mobile phone</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            {/* <video src={video1} autoPlay loop muted></video> */}
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>Most Popular</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={p7} alt="Image Name" />
            </div>
            {/* We Shall use this card later */}
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble in Planti, please contact us from for more questions.</p>
                <button className="btn">Go to help center</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Top