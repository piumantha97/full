import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs'
import user from '../../../../Assets/aldi.jpg'
import user1 from '../../../../Assets/dadang.jpg'
import user2 from '../../../../Assets/gilbert.jpg'
import user3 from '../../../../Assets/aldi.jpg'
import user4 from '../../../../Assets/dadang.jpg'
import user7 from '../../../../Assets/user7.jpg'
import user8 from '../../../../Assets/user8.jpg'
import user9 from '../../../../Assets/user9.jpg'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user9} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">John Doily</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Noah Mark </span>
            <small>Ordered a new Phone</small>
          </div>
          <div className="duration">
            3 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">George Arthur</span>
            <small>Ordered a new Charger</small>
          </div>
          <div className="duration">
            4 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user8} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Emma	Liam</span>
            <small>Request a Service</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={user7} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Sophia	Elijah</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            6 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity