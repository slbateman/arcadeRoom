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
 

    }
   

})

//export const {  } = gameSlice.actions;
export const selectGame = (state) => state.chatroom.chatroom;
export default gameSlice.reducer;

//psudocodes 
/*
  getcharacterCount: (state, action) => {}
  getmessageCount: (state, action) => {}
  getroomCount: (state, action) => {}


   addcharacterCount: (state, action) => {}
   addmessageCount: (state, action) => {}
   addroomCount: (state, action) => {}
   addcurrentLevel: (state, action) => {}
   

  getCounts: (state, action) => {}
  addCounts: (state, action) => {}
  getcurrentLevel: (state, action) => {}
  getexp: (state, action) => {}
   
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
    //get all level achivement badges 
    loop through i=1 i <17 i ++
    badgeNum = i-1; 
if(i < 13){
     achievementNum = i^2; 
    if level >= achievementNum then
       opArray = checkifhavebadge(badgeNum)
      haveBadge =  opArray[2]
      if(haveBadge = true) 
    do nothing 
    else givBadge(badgeNum) 
    }
    
//get all ranking achiement badges
//loop through i=13

if(i>13){
    loop rankNum=3 rankNum>-1 rankNum -- ; 
    ranked = checkIfranked(rankNum)
    if(ranked=true)
       opArray = checkifhavebadge(badgeNum)
      haveBadge =  opArray[2]
      if(haveBadge = true) 
        do nothing 
    else giveBadge(badgeNum) 
}

checkIfranked(rankNum)
   rank = rankPoints[ranknum]
   if rank != 0
   return true


    function giveBadge (badgeNum)
 badgeNums =  [1, 2, 3, 4,  1, 2, 3, 4,  1, 2, 3, 4,   1, 2, 3, 4] 
  user.badges[badgeNum] =badgeNums[badgeNum]


   function checkifhavebadge (i) 
   let array = [i,0,0]; 
   num = badgeArray[i]
    if  (num !== 0)
       array[1]= num-1 
       array[2]= 1
      return array
      


    function displaybadges(i)  
    loop through badgesArray length i++
     opArray = checkifhavebadge(i)
      haveBadge =  opArray[2]
      if(haveBadge = true) 
         return 
         <userbadges num1 = {opArray[0]} num2 = {opArray[1]} /> 

*/
/*
createLeaderboardlist
puts all users in a list thingy
checklevels and sorts list based on level
if two users have same level sorts based on exp
if both have exp then first one first 
top 4 get rank based on position  

loop i=0 i< 4 i++
user =sortedList[i]
user.giveRank(i)

function giveRank(rankNum)
user.rankPoints[rankNum] =1; 


highscore 
keeps track of high score initially default highScore = 1, default highScorer Slowbat
gets person currently in first place from leaderboard array
when user has level greater then high score then 
highscore user = user and high score = new high score 


createDisplay badges function that checks if badge there
if there then display badge

*/

/*
level curve 
x^2=
1 =1
2 =4
3 =9
4 =16
5 =25
6 =36
7 =49
8 =64
9 =81
10=100
11=121
12=144
*/


