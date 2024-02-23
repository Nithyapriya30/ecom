import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserFromServer } from '../slice/ProfileSlice';
function ProfileBasic() {
// const dispatch = useDispatch();
// const { profileList } = useSelector((state) => state.custprofile);
// useEffect(() => {
//   dispatch(getUserFromServer());
// }, [dispatch]);

const [userData, setUserData] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInUserIdFromLocalStorage = localStorage.getItem('loggedInUserId');
    if (loggedInUserIdFromLocalStorage) {
      setLoggedInUserId(loggedInUserIdFromLocalStorage);
    }
  }, []);
     

  useEffect(() => {
    // Check if loggedInUserId is truthy before making the API request
    if (loggedInUserId) {
      fetch(`http://localhost:8000/custprofile/${loggedInUserId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }
          return response.json();
        })
        .then((data) => {
          // Handle the fetched data as needed
          setUserData(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [loggedInUserId]);

  return (
    <div
      className="card-body"
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: "white",
        textAlign: "left",
        padding: "1rem",
      }}
    >
      {userData && (
        <div>
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Full Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{userData.name}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{userData.email}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">State</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{userData.state}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Mobile</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{userData.mobile}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Address</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{userData.address}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileBasic;