
// a component that displays all the possible badges available 
import React from 'react'
import Badge from './Badge'
import badges from './badgeInfo'; 

const Test = () => {
 const array = [0,1,1];

const rank = 1; 
const stage = 2; 
   return(<Badge array = {array}/>)

}
export default function AllBadges() {

     <Test/>

   const array = [0,1,1];

   for (let i=0; i < 3; i++){
        <Badge array = {[i,i,i]}/>
   }
 

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
