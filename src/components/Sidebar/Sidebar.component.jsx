import React from 'react';
import './Sidebar.style.scss';
import SiderbarOption from './SiderbarOptions.component';

function Sidebar() {
    return (
        <div className="sidebar">
            <img 
                className="sidebar__logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="Spotify Logo"
            />
            <SiderbarOption option="Home" />
            <SiderbarOption option="Search" />
            <SiderbarOption option="Your Library" />
        </div>
    )
}

export default Sidebar;