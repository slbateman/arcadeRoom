
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../api/userAPI";
import socket from "../../socket/socket";
import {
  selectUsers,
  selectLocalUserInfo,
  editUserMsgTotal,
  editUserPmsTotal,
  editUserLevel,
  editUserExp,
  editUserLevelReq,
  editUserRank,
  editBadges,
  editRankPoints,
} from "../../state/usersSlice";


function sortObjArray(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j].lv > array[i].lv) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

export default function LeaderBoard() 
{
 const users = useSelector(selectUsers);
 console.log(users); 
 
const obj1 = {n: 'a',lv: 1,};
const obj2 = {n: 'b',lv: 2,};
const obj3 = {n: 'c',lv: 3,}; 

let array = [obj1, obj2, obj3];
    array =  sortObjArray()
  return <div></div>;
}

