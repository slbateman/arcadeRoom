
// a component that displays all the possible badges available 
import React from 'react'
import Badge from './Badge'

import badges from './badgeInfo'; 
//const color = ["brown","grey","yellow","purple", "lightblue"]; 

const color = badges[0].color; 

const pic1 = badges[0].badge[0]; 
const pic2 = badges[0].badge[1]; 
const pic3 = badges[0].badge[2]; 
const pic4 = badges[0].badge[3]; 
const pic5 = badges[3].badge[3]; 

export default function AllBadges() {
    return (
        <div>

         
{/*    Badges: <br/>
<Badge pic = {badges[0].badge0} color = {"brown"}/>
<Badge pic = {badges[0].badge1} color = {"grey"}/>
<Badge pic = {badges[0].badge2} color = {"yellow"}/> */}

       {/* <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color[0]}` }}
          src={pic1}
          alt="badge"
        />
       <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color[1]}` }}
          src={pic2}
          alt="badge"
        />

       <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color[2]}` }}
          src={pic3}
          alt="badge"
        />
      <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color[3]}` }}
          src={pic4}
          alt="badge"
        />
      <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${color[4]}` }}
          src={pic5}
          alt="badge"
        />
{badges.map((data, i) => {
 return ( 
            // <Badge key={i} pic = {badge.badge[i]} color = {color}/>
          //  const color = badge[0].color[i]; 
            <div key={i}>
            <img 
            className="abadge"
            style={{height: '2rem', width: '2rem', border: `3px solid ${badge[0].color[i]}` }}
            src={data.badge}
            alt={"badge" + i }
          />
          </div>

       
        );
    })} */}
    
     </div>
    )}
