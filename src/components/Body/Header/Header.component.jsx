import React from 'react';
import './Header.style.scss';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../DataLayer/DataLayer.component';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input 
                    placeholder="Search for Artists, Songs, or Podcasts"
                    type="text"
                />
            </div>

            <div className="header__right">
                <Avatar
                    // src={user?.images[0].url} 
                    alt="MN" 
                />
                <h4>Mouhsine Nejmi</h4>
            </div>
        </div>
    )
}

export default Header
