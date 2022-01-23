
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

function Cheater(){
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const localUserInfo = useSelector(selectLocalUserInfo);
    const user = users.find((e) => e._id === localUserInfo.user_id);
   
    const [msgTotal, setMsgTotal]         = useState();
    const [pmsTotal, setPmsTotal]         = useState();
    const [level, setLevel]               = useState();
    const [exp, setExp]                   = useState();
    const [nextLevelReq, setNextLevelReq] = useState();
    const [rank, setRank]                 = useState();
    const [badges, setBadges]             = useState();
    const [rankPoints, setRankPoints]     = useState(); 
   
  
    const updateMsgTotal = () => {
        dispatch(
          editUserMsgTotal({
            _id: localUserInfo.user_id,
            msgTotal: msgTotal,
          })
        );
      };
 
    return(
    <div className="CheaterBox">
      <div>
        <input
          className="user-settings-message-total-bar"
          type="range"
          min="0"
          max="99999999999999999999"
          value={msgDensity}
          onChange={(e) => {
            setMsgTotal(e.target.value);
            updateTotal(); 
          }}
        />
      </div>

    </div>
    ); 

}

export default Cheater; 