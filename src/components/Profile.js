import React, { useEffect, useState } from "react";
import Profilebasic from "../components/Profilebasic";
import ProfileStatus from "../components/ProfileStatus";
import testimonial from "../Assets/images/testimonial.webp";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInUserIdFromLocalStorage =
      localStorage.getItem("loggedInUserId");
    if (loggedInUserIdFromLocalStorage) {
      setLoggedInUserId(loggedInUserIdFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    // Check if loggedInUserId is truthy before making the API request
    if (loggedInUserId) {
      // Make the API request using loggedInUserId
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
    <section style={{ backgroundColor: "#fffcfc", marginTop: "80px" }}>
      <div className="row align-items-center">
        <div className="col text-center">
          <h2>My Profile</h2>
          {userData && (
            <>
              <p>Welcome Back {userData.name}!!!</p>
            </>
          )}
        </div>
      </div>
      <div className="content-box mt-5 py-8">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-body text-center">
                {userData && (
                  <>
                    <img
                      src={userData.photo}
                      alt="avatar"
                      className="rounded img-fluid"
                      style={{ width: "170px" }}
                    />
                  </>
                )}
              </div>
              <br />
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md- mb-5">
                  <Profilebasic />
                </div>

                <div className="col-md-12 mb-5">
                  <ProfileStatus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profile;
