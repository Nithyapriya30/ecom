// Deletemodal.js
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import {
  deleteuserfromserver,
  removeUserFromList,
} from "../../slice/UserSlice.js";

function DeleteModal(props) {
  const dispatch = useDispatch();

  const deleteuser = () => {
    console.log("delete leave");
    dispatch(deleteuserfromserver(props.user));
    dispatch(removeUserFromList(props.user));
    props.onHide(); // Close the modal after deleting leave
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-bg ">
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-bg ">
          <p>Are you sure to delete the user?</p>
        </Modal.Body>
        <Modal.Footer className="modal-bg text-light">
          <Button onClick={props.onHide} style={{ backgroundColor: "red" }}>
            Close
          </Button>
          <Button onClick={deleteuser} style={{ backgroundColor: "#01114c" }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;
