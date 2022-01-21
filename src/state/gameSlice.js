import {createSlice} from '@reduxjs/toolkit';
//          f f f f  b b b b  p p p p   r r r r
//          1 2 3 4  1 2 3 4  1 2 3 4   1 2 3 4 
let game = []; 
//let game = [0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0]; 

export const gameSlice = createSlice ({
    name: 'game',
    initialState: {
        game: game
    },
    reducers: {
 
/*
getcharacterCount: (state, action) => {}
  getmessageCount: (state, action) => {}
   getroomCount: (state, action) => {}
  getcurrentLevel: (state, action) => {}
  getexp: (state, action) => {}

   addcharacterCount: (state, action) => {}
  addmessageCount: (state, action) => {}
   addroomCount: (state, action) => {}
   addcurrentLevel: (state, action) => {}
   
   
   incrementCount(state,action) => {}
   
   resetCounts: (state, action) => {}
   resetLevel: (state, action) => {}
   reset exp: (state, action) => {}
   resetEverything: (state, action) => {}

    calculate level function: 
    get counts
    exp = sum counts 
    if exp == levelReq
       level += 1
       levelreq += 500

    achiement function: 
    if level >= achievementNum then
    if checkIfHaveBadge = true
    do nothing 
    else getBadge(badgeNum) 
  
   function checkifhavebadge (i) 
   let array = [i,0,0]; 
   num = badgeArray[i]
    if  (num !== 0)
       array[1]= num-1 
       array[2]= 1
      return array
      
    function displaybadges  
     opArray = checkifhavebadge(i)
      haveBadge =  opArray[2]
      if(haveBadge = true) 
         return 
         <badge array = {opArray}/> 

*/
    }
   

})



/*
createLeaderboardlist
puts all users in a list thingy
checklevels and sorts list based on level
if two users have same level sorts based on exp

toplist getsbadge 

highscore 
keeps track of high score initially level = 1

when user has level greater then high score then 
highscore user = user and high score = new high score 


createDisplay badges function that checks if badge there
if there then display badge

*/