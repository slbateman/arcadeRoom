import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DataFile from "../DataFile";

function UserProfileEditBio({ showEditBio, setShowEditBio, userIndex }) {
  const [bioText, setBioText] = useState(DataFile[userIndex].bio);

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
            <br/>
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
