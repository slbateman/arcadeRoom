import frog1 from '../../images/badges//frog/afrog-1.png' 
import frog2 from '../../images/badges/frog/afrog-2.png'; 
import frog3 from '../../images/badges/frog/afrog-3.png'; 
import frog4 from '../../images/badges/frog/afrog-4.png'; 
import bug1 from '../../images/badges/bug/abug-1.png'; 
import bug2 from '../../images/badges/bug/abug-2.png'; 
import bug3 from '../../images/badges/bug/abug-3.png'; 
import bug4 from '../../images/badges/bug/abug-4.png'; 
import plant1 from '../../images/badges/plant/aplant-1.png'; 
import plant2 from '../../images/badges/plant/aplant-2.png'; 
import plant3 from '../../images/badges/plant/aplant-3.png'; 
import plant4 from '../../images/badges/plant/aplant-4.png'; 


const badges = 
[
    {
        //frog badges
        // lv 0-100
        color: "brown", 
        badge1: frog1, //lv 0 -25
        badge2: frog2, //lv 25-50
        badge3: frog3, //lv 50-75
        badge4: frog4  //lv 75-100
    },
    {
        //bug badges 
        //lv 100-500
        color: "grey", 
        badge1: bug1, //lv 101-200
        badge2: bug2, //lv 200-300
        badge3: bug3, //lv 300-400
        badge4: bug4  //lv 400-500
    },
    {
        //plant badges 
        //lv 500-1000
        color: "yellow", 
        badge1: plant1, //lv 501-600
        badge2: plant2, //lv 600-700
        badge3: plant3, //lv 700-800
        badge4: plant4  //lv 800-1000
    }
        //,{
        //ranking badges
        //get on leaderboard? 
        // color: purple or light blue 
        // badge1: rank1, //get 4rth place a coin 
        // badge2: rank2, //get 3rd place a jewl
        // badge3: rank3, //get 2nd place a treasure chest  
        // badge4: rank4  //get 1st place leaderboard once a crown }
]; 

export default badges; 