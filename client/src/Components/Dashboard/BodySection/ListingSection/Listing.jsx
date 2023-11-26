import React from 'react'
import './listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import img from '../../../../Assets/images (1).png'
import pro from '../../../../Assets/15pro.webp'
import s23 from '../../../../Assets/s23.webp'
import p7a from '../../../../Assets/p7a.png'
import o11 from '../../../../Assets/o11.png'
// import img1 from '../../../Assets/images (9).png'
// import img2 from '../../../Assets/images (8).png'
// import img3 from '../../../Assets/images (10).png'
import user1 from '../../../../Assets/aldi.jpg'
import user2 from '../../../../Assets/dadang.jpg'
import user3 from '../../../../Assets/gilbert.jpg'
import user4 from '../../../../Assets/aldi.jpg'
import user7 from '../../../../Assets/user7.jpg'
import user8 from '../../../../Assets/user8.jpg'
import user9 from '../../../../Assets/user9.jpg'

const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>New Arrivals 2023</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={pro} alt="Image Name" />
          <h3>iphone 15</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={s23} alt="Image Name" />
          <h3>S23</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={p7a} alt="Image Name" />
          <h3>Pixel 7a</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={o11} alt="Image Name" />
          <h3>One Plus 11</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user7} alt="User Image" />
              <img src={user8} alt="User Image" />
              <img src={user9} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user8} alt="User Image" />
              <img src={user7} alt="User Image" />
              <img src={user9} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                28,556 Plant sold <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing