import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../api/userAPI";
import socket from "../../socket/socket";
import {
  selectUsers,
  selectLocalUserInfo,
  editUserAvatar,
} from "../../state/usersSlice";

function UserProfileEditAvatar({ showEditAvatar, setShowEditAvatar }) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const user = users.find((e) => e._id === localUserInfo.user_id);
  const [avatar, setAvatar] = useState(user.avatar);
  const closeEditAvatar = () => setShowEditAvatar(false);

  const imageUpload = (e) => {
    // e.preventDefault();
    // Creates an array of all files from the file input form
    // however, only one file is able to be selected in the form
    const imgFiles = document.getElementById("imageFile").files;
    // Stores the first file from the array (there should only ever be one file)
    let imgFile = imgFiles[0];
    // Creates a new Object that enables it to be read
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = () => {
      setAvatar(reader.result);
    };
  };

  const saveAvatar = (e) => {
    e.preventDefault();
    const avatarData = { _id: localUserInfo.user_id, avatar: avatar }
    dispatch(editUserAvatar(avatarData));
    socket.emit("updateUserAvatar", avatarData)
    updateUser(localUserInfo.user_id, {avatar: avatar})
    closeEditAvatar();
  };

  return (
    <div>
      <Modal show={showEditAvatar} onHide={closeEditAvatar}>
        <Modal.Header className="edit-modals" closeButton>
          <Modal.Title>Edit Avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-modals">
          <Form onSubmit={(e) => saveAvatar(e)}>
            <img src={avatar} alt="avatar" />
            <input
              id="imageFile"
              type="file"
              accept=".jpg, .jpeg, .png"
              onInput={() => imageUpload()}
            />
            <br />
            <br />
            <Button variant="primary" type="submit">
              Save Avatar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserProfileEditAvatar;
