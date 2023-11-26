import React from 'react'
import '../../App.css'
import Sidebar from '../Dashboard2/SideBarSection/Sidebar'
 import Body from '../Dashboard2/BodySection/Body'

const Dashboard2 = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar/>
                <Body/>
            </div>
        </div>
    )
}

export default Dashboard2
