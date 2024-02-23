import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { getuserfromserver, setSelecteduser } from "../../slice/UserSlice"
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import AddModal from "../../components/admin/AddModal";
import DeleteModal from "../../components/admin/DeleteModal";
import UpdateModal from "../../components/admin/UpdateModal";
import AdminNav from "./AdminNav";
const UserManagement = () => {
  const { userData } = useSelector((state) => state.student);
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [userToDelete, setuserToDelete] = useState(null);
  const [addmodalShow, setaddModalShow] = React.useState(false);
  const dispatch = useDispatch();

  const updateuser = (user) => {
    console.log("update Task");
    setModalShow(true);
    dispatch(setSelecteduser(user));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getuserfromserver());
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <AdminNav/>
      <h1 style={{ marginTop: "100px" }}>User Management</h1>
      <div className="d-flex justify-content-end mb-3">
        <Button
          style={{ backgroundColor: "red", color: "white", border: "none" }}
          onClick={() => setaddModalShow(true)}
        >
          Add user
        </Button>
      </div>
      <Table responsive>
        <thead>
          <tr className="text-center">
            <th style={{ backgroundColor: "#01114c", color: "white" }}>
              SI.NO
            </th>
            <th style={{ backgroundColor: "#01114c", color: "white" }}>Name</th>
            <th style={{ backgroundColor: "#01114c", color: "white" }}>
              Email
            </th>
            <th style={{ backgroundColor: "#01114c", color: "white" }}>
              Phone number
            </th>
          
            <th style={{ backgroundColor: "#01114c", color: "white" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((user, index) => {
              return (
                <tr className="text-center" key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phonenumber}</td>
              
                  <td>
                    <Button
                      style={{ backgroundColor: "#01114c" }}
                      className="mx-3"
                      onClick={() => updateuser(user)}
                    >
                      <MdEdit />
                    </Button>
                    <Button
                      style={{ backgroundColor: "#01114c" }}
                      onClick={() => {
                        setuserToDelete(user);
                        setDeleteModalShow(true);
                      }}
                    >
                      <FaRegTrashAlt
                        style={{ backgroundColor: "#01114c", color: "white" }}
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      {/* Deletemodal */}
      <DeleteModal
        show={deleteModalShow}
        onHide={() => {
          setDeleteModalShow(false);
          setuserToDelete(null);
        }}
        user={userToDelete}
      />

      <UpdateModal show={modalShow} onHide={() => setModalShow(false)} />
      <AddModal show={addmodalShow} onHide={() => setaddModalShow(false)} />
    </Container>
  );
};

export default UserManagement;
