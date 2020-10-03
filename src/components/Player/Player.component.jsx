import React from 'react'
import Body from '../Body/Body.component';
import Footer from '../Footer/Footer.component';
import Sidebar from '../Sidebar/Sidebar.component';

import './Player.style.scss';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>

            <Footer />
        </div>
    )
}

export default Player;