import React from 'react';
import '../Components.css';

import badges from './badgeInfo'; 
//const color = "brown"; 
//const pic = badges[0].badge1; 

 function Badge(pic, color) {
    return (
        <div>
        <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color}` }}
          src={pic}
          alt="badge"
        />
        
        </div>
    )
}

export default Badge; 