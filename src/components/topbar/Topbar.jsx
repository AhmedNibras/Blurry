import React from 'react'
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import mingo from './mingo.jpg'

export const Topbar = () => {
  return (
    <div className="topbar">
     <div className="topbarWrapper"> 
        <div className="topbarLeft">
          <div className="logo">Blurry</div>
        </div>
        <div className="topbarRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img className="profilePic" src={mingo} alt="avatar"/>
        </div>
     </div>
    </div>
  )
}
