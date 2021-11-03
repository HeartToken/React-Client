import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalLauncher(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" size="md" onClick={() => setShow(true)}>
        Click to see the world
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
      
      >
        <Modal.Header closeButton={true} />
        <Modal.Body>Hello World!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="md" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLauncher;
