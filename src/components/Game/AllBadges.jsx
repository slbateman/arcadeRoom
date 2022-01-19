
// a component that displays all the possible badges available 
import React from 'react'
import Badge from './Badge'

import badges from './badgeInfo'; 
const color1 = "brown"; //badges[0].color; 
const color2 = "grey";
const color3 = "yellow";
const color4 = "purple";

const pic1 = badges[0].badge0; 
const pic2 = badges[0].badge1; 
const pic3 = badges[0].badge2; 
const pic4 = badges[0].badge3; 

export default function AllBadges() {
    return (
        <div>

            Badges: <br/>
{/* <Badge pic = {badges[0].badge0} color = {"brown"}/>
<Badge pic = {badges[0].badge1} color = {"grey"}/>
<Badge pic = {badges[0].badge2} color = {"yellow"}/> */}

       <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color1}` }}
          src={pic1}
          alt="badge"
        />
       <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color2}` }}
          src={pic2}
          alt="badge"
        />

       <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color3}` }}
          src={pic3}
          alt="badge"
        />
      <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color4}` }}
          src={pic4}
          alt="badge"
        />

            {/* {badges.map((badge, i) => {
 return ( 
            <Badge key={i} pic = {badge.badge[i]} color = {color}/>
       
        );
    })} */}
    
     </div>
    )}
