import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { selectUsers, selectLocalUserInfo, editUserEmail} from "../../state/usersSlice"

function UserProfileEditEmail({ showEditEmail, setShowEditEmail }) {
  const dispath = useDispatch();
  const users = useSelector(selectUsers);
  const localUserInfo = useSelector(selectLocalUserInfo);
  const userIndex = localUserInfo.userIndex;
  const [emailText, setEmailText] = useState(users[userIndex].email);

  const closeEditEmail = () => setShowEditEmail(false);

  return (
    <div>
      <Modal show={showEditEmail} onHide={closeEditEmail}>
        <Modal.Header className="edit-modals" closeButton>
          <Modal.Title>Edit Email</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-modals">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              closeEditEmail();
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Email
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserProfileEditEmail;
