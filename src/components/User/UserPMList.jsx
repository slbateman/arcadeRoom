import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectPMs } from "../../state/pmSlice";
import { selectLocalUserInfo, selectUsers } from "../../state/usersSlice";

const UserPMList = ({ setPM_id, pm_id }) => {
  const navigate = useNavigate();
  const PM = useSelector(selectPMs);
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const localUser = users.find((e) => e._id === localUserInfo.user_id);
  const myPMs = [];

  if (localUser) {
    PM.map((data) => {
      if (data.users.includes(localUser._id)) {
        myPMs.push(data);
      }
      return myPMs;
    });
  }

  useEffect(() => {
    if (localUser) {
      PM.map((data) => {
        if (data.users.includes(localUser._id)) {
          myPMs.push(data);
        }
        return myPMs;
      });
    }
  }, [PM]);

  return (
    <div className="pm-list">
      {myPMs.map((pm, i) => {
        return (
          <div
            className="pm-list-pm"
            style={pm_id !== pm._id ? {} : {boxShadow: "0 0 10px 0 white"}}
            key={`pm${i}`}
            onClick={() => {setPM_id(pm._id); navigate(`/user/messages/${pm._id}`)}}
          >
            {pm.users.map((user_id, i) => {
              const user = users.find((e) => e._id === user_id);
              return <div key={`pm-name${i}`}>{`-${user.username}`}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default UserPMList;
