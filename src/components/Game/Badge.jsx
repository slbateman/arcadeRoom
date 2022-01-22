import React from 'react';
import '../Components.css';
import badges from './badgeInfo'; 

//const color = "brown"; 
//const pic = badges[0].badge1; 

 function Badge(num1, num2) {
 const rank = 1; 
 const stage = 2; 

    return (
        <div>
        <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${badges[rank].color}` }}
          src={badges[rank].badge[stage]}
          alt="badge"
        />
        
        </div>
    )
}

export default Badge; 