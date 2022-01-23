import React from 'react';
import '../Components.css';
import badges from './badgeInfo'; 

//const color = "brown"; 
//const pic = badges[0].badge1; 

 function Badge({array}) {
 let rank = array[0]; 
 let stage = array[1]; 
 let have = array[2];

 if (!have){
   return null; 
 }
 //const num1 = ; 
 
  // let rankTotal =550;// [250, 500, 750, 1000];

  // if( rankTotal <= 250){
  //    rank = 0; 
  // } else if (rankTotal <= 500) {
  //   rank = 1; 
  // }else if (rankTotal <= 750) {
  //   rank = 2; 
  // }else if (rankTotal<= 1000) {
  //   rank = 3; 
  // }
   
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