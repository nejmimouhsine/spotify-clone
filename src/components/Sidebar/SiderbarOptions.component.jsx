import React from 'react';
import './SiderbarOptions.style.scss';

function SiderbarOption({title, Icon}) {
    return (
        <div className="sidebarOption">
            <p>{title}</p>
        </div>
    )
}

export default SiderbarOption;
