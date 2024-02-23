import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { updateuserinserver } from "../../slice/UserSlice";
function UpdateModal(props) {
  const { selecteduser } = useSelector((state) => state.student);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const updateUser = () => {
    props.onHide();
    dispatch(
      updateuserinserver({
        id,
        username,
        email,
        phonenumber,
      })
    );
  };

  useEffect(() => {
    if (selecteduser && Object.keys(selecteduser).length !== 0) {
      setUsername(selecteduser.username || "");
      setEmail(selecteduser.email || "");
      setPhonenumber(selecteduser.phonenumber || "");
      setId(selecteduser.id || 0);
    }
  }, [selecteduser]);

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
            onClick={(e) => updateUser(e)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default UpdateModal;
