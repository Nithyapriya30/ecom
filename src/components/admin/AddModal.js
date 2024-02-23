import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { adduserfromserver } from "../../slice/UserSlice";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";

const AddModal = (props) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  

  const adduser = (e) => {
    e.preventDefault();
    console.log({ username, email,phonenumber});
    dispatch(
      adduserfromserver({ username, email, phonenumber })
    );
    setUsername("");
    setEmail("");
    setPhonenumber("");

    props.onHide();
    // Close the modal after adding the leave
  };

  return (
    <section className="my-5">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton className="modal-bg ">
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-bg ">
          <Form>
            <Form.Group className="mb-3" controlId="formusername">
              <Form.Label className="labelstyle">User name</Form.Label>
              <Form.Control
                type="text"
                className="bg-transparent "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="labelstyle">Email</Form.Label>
              <Form.Control
                className="bg-transparent "
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="labelstyle">Phone number</Form.Label>
              <Form.Control
                className="bg-transparent "
                type="text"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-bg ">
          <Button
            onClick={props.onHide}
            style={{ backgroundColor: "#01114c", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            type="submit"
            onClick={(e) => adduser(e)}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default AddModal;
