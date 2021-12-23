import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { selectUsers, selectLocalUserInfo, editUserBio } from "../../state/usersSlice"

function UserProfileEditBio({ showEditBio, setShowEditBio }) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const userIndex = localUserInfo.userIndex;
  const [bioText, setBioText] = useState(users[userIndex].bio);

  const closeEditBio = () => setShowEditBio(false);

  return (
    <div>
      <Modal show={showEditBio} onHide={closeEditBio}>
        <Modal.Header className="edit-modals" closeButton>
          <Modal.Title>Edit Bio</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-modals">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(editUserBio(
                {
                  index: userIndex,
                  bio: bioText,
                }
              ))
              closeEditBio();
            }}
          >
            <Form.Group
              className="mb-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={5}
                value={bioText}
                onChange={(e) => setBioText(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Save Bio
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserProfileEditBio;
