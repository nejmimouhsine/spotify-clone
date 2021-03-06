import React from 'react';
import Header from './Header/Header.component';
import { useDataLayerValue } from '../DataLayer/DataLayer.component';
import SongRow from './SongRow/SongRow.component';

import './Body.style.scss';

import { PlayCircleFilledRounded } from '@material-ui/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Body({ spotify }) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={ spotify } />

            <div className="body__info">
                <img
                    src="https://newjams-images.scdn.co/v2/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==/default"
                    alt="PLaylist Info"
                />

                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilledRounded className="body__shuffle" />
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>

            <div className="body__music">
                {discover_weekly?.tracks.items.map(item => <SongRow track={item.track} />)}
            </div>
        </div>
    )
}

export default Body;