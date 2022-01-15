import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPM } from "../../state/pmSlice";

export const UserModal = ({ show, close, modalUser, localUser }) => {
  const dispatch = useDispatch();

  const newConvo = () => {
    dispatch(addPM({ users: [modalUser._id, localUser._id] }));
  };
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p></p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        {!modalUser ? (
          <div></div>
        ) : (
          <div className="modal-body">
            <img
              className="message-avatar user-button"
              src={modalUser.avatar}
              alt=""
              style={{ border: `2px solid ${modalUser.color}` }}
            />
            <h4>{modalUser.username}</h4>
            <div className="button-block" >
              <Link className="message-button link" to={`../profiles/${modalUser.username}`}>
                view profile
              </Link>
              <div
                className="message-button link"
                onClick={() => {
                  newConvo();
                }}
              >
               <Link className="link" to = {`../pm/${modalUser.username}`}> send message</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
