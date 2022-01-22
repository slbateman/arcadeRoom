
// a component that displays all the possible badges available 
import React from 'react'
import Badge from './Badge'
import badges from './badgeInfo'; 

export default function AllBadges() {


const test = () => {
const rank = 1; 
const stage = 2; 
   return(<>
          <img
          className="abadge"
          style={{height: '2rem', width: '2rem', border: `3px solid ${badges[rank].color}` }}
          src={badges[rank].badge[stage]}
          alt="badge"
        />
  </>)
}

test(); 

    return (
        <div>

{badges.map((badge, i) => {
 const stage = i; 

   
 return ( 
            <div key={i}>
          {badges.map((badge, j) => {

            return (
            <img key={j}
            className="abadge"
            style={{height: '2rem', width: '2rem', border: `3px solid ${badge.color}` }}
            src={badge.badge[stage]}
            alt={"badge" + i }
          />
            ); 
             } )}

          </div>

       
        );
    })} 
    
     </div>
    )}
