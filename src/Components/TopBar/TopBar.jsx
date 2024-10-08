import React from 'react';
import "./TopBar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar(props) {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className='logo'>SabzLearn ❤</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsIcon />
                        <span className="topIconBadge">2</span>
                    </div><div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div><div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img src="images/me.jpg" className="topAvatar"/>
                </div>
            </div>
        </div>
    );
}

