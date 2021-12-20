import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DataFile from "../DataFile";

function UserProfileEditAvatar({
  showEditAvatar,
  setShowEditAvatar,
  userIndex,
}) {
  const [avatar, setAvatar] = useState(DataFile[userIndex].img);
  const closeEditAvatar = () => setShowEditAvatar(false);

  const imageUpload = () => {
    // Creates an array of all files from the file input form
    // however, only one file is able to be selected in the form
    const imgFiles = document.getElementById("imageFile").files;
    // Stores the first file from the array (there should only ever be one file)
    let imgFile = imgFiles[0];
    // Creates a new Object that enables it to be read
    const reader = new FileReader();
    closeEditAvatar();
    reader.addEventListener("load", (event) => {
      // Reads the image file
      //   gridContainer.style.backgroundImage = `url(${event.target.result})`;
    });
    reader.readAsDataURL(imgFile);
  };

  return (
    <div>
      <Modal show={showEditAvatar} onHide={closeEditAvatar}>
        <Modal.Header className="edit-modals" closeButton>
          <Modal.Title>Edit Avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-modals">
          <Form
            enctype="multipart/form-data"
            action="/upload/image"
            method="post"
            onSubmit={() => imageUpload()}
          >
            <img src={avatar} alt="avatar" />
            <input id="imageFile" type="file" accept=".jpg, .jpeg, .png" />
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
