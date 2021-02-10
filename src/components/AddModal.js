import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddModal({ AddNewModal }) {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
        Add
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>

<div>
  <label className="input">Id:</label>
  <input type="number" name="id" />
</div>

<div>
  <label className="input">Title:</label>
  <input type="text" name="title" />
</div>

<div>
  <label className="input">Subtitle:</label>
  <input type="text" name="subtitle" />
</div>

<div>
  <label className="input">Description:</label>
  <input type="text" name="description" />
</div>

<div>
  <label className="input">Year:</label>
  <input type="text" name="year" />
</div>

<div>
  <label className="input">ImageUrl:</label>
  <input type="text" name="imageUrl" />
</div>

<div>
  <label className="input">Rating:</label>
  <input type="text" name="rating" />
</div>

</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddModal;