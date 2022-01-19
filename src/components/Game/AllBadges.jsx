import React from 'react'
import Badge from './Badge'

import badges from './badgeInfo'; 
const color = badges[0].color; 
const pic = badges[0].badge1; 

export default function AllBadges() {
    return (
        <div>

            Badges: 
            {badges.map((badge, i) => {
 return ( 
            <Badge key={i} pic = {badge.badge[i]} color = {color}/>
       
        );
    })}
    
     </div>
    )}
