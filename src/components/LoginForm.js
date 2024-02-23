// import React, { useState } from "react";
// import { Col, Container, Form, Row } from "react-bootstrap";
// import "../Assets/css/Login.css"
// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateEmail = () => {
//     const email = formData.email.trim();
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (emailRegex.test(email)) {
//       hideError("email");
//       return true;
//     } else {
//       displayError("email", "Invalid email address.");
//       return false;
//     }
//   };

//   const validatePassword = () => {
//     const password = formData.password.trim();
//     const passwordRegex =
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//     if (passwordRegex.test(password)) {
//       hideError("password");
//       return true;
//     } else {
//       displayError(
//         "password",
//         "Password must be 8 characters with at least one alphabet, one number, and one special character."
//       );
//       return false;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailValid = validateEmail();
//     const passwordValid = validatePassword();

//     if (emailValid && passwordValid) {
//       const userEmail = formData.email.trim();
//       const userPassword = formData.password.trim();

//       // Perform authentication
//       if (userEmail === "cust@gmail.com" && userPassword === "Cust@123") {
//         window.location.href = "/";
//       } else if (
//         userEmail === "seller@gmail.com" &&
//         userPassword === "Seller@123"
//       ) {
//         window.location.href = "/sellerdashboard";
//       } else if (
//         userEmail === "admin@gmail.com" &&
//         userPassword === "Admin@123"
//       ) {
//         window.location.href = "/admindashboard";
//       } else {
//         alert(`Invalid email or password.`);
//       }
//     }
//   };

//   const displayError = (fieldName, message) => {
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [fieldName]: message,
//     }));
//   };

//   const hideError = (fieldName) => {
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [fieldName]: "",
//     }));
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Form onSubmit={handleSubmit} className="p-4 bg-light rounded">
//             <h3 className="mb-4">Login</h3>
//             <Form.Group className="mb-3" controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={validateEmail}
//                 placeholder="Enter email"
//               />
//               {errors.email && (
//                 <div className="text-danger">{errors.email}</div>
//               )}
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 onBlur={validatePassword}
//                 placeholder="Enter password"
//               />
//               {errors.password && (
//                 <div className="text-danger">{errors.password}</div>
//               )}
//             </Form.Group>
//             <Row>
//               <Col>
//                 <button
//                   type="submit"
//                   className="btn btn-dark w-30"
//                   style={{ color: "white" }}
//                 >
//                   Submit
//                 </button>
//               </Col>
//             </Row>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginForm;
import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Assets/css/Login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = () => {
    const email = formData.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      hideError("email");
      return true;
    } else {
      displayError("email", "Invalid email address.");
      return false;
    }
  };

  const validatePassword = () => {
    const password = formData.password.trim();
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (passwordRegex.test(password)) {
      hideError("password");
      return true;
    } else {
      displayError(
        "password",
        "Password must be 8 characters with at least one alphabet, one number, and one special character."
      );
      return false;
    }
  };


const [credentials, setCredentials] = useState({}); // State to store fetched credentials
const [loggedInUserId, setLoggedInUserId] = useState(null);

useEffect(() => {
  // Fetch credentials from JSON server
  fetch("http://localhost:8000/custprofile")
    .then((response) => response.json())
    .then((data) => setCredentials(data))
    .catch((error) => console.error("Error fetching credentials:", error));
}, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    //   const emailValid = validateEmail();
    //   const passwordValid = validatePassword();

    //   if (emailValid && passwordValid) {
    //     const userEmail = formData.email.trim();
    //     const userPassword = formData.password.trim();

    //     // Perform authentication
    //     if (userEmail === "cust@gmail.com" && userPassword === "Cust@123") {
    //       window.location.href = "/";
    //     } else if (
    //       userEmail === "seller@gmail.com" &&
    //       userPassword === "Seller@123"
    //     ) {
    //       window.location.href = "/sellerdashboard";
    //     } else if (
    //       userEmail === "admin@gmail.com" &&
    //       userPassword === "Admin@123"
    //     ) {
    //       window.location.href = "/admindashboard";
    //     } else {
    //       alert(`Invalid email or password.`);
    //     }
    //   }
    // };

    const foundCredential = credentials.find(
      (credential) =>
        credential.email === formData.email &&
        credential.password === formData.password
    );

    if (foundCredential) {
      console.log(foundCredential.id);
      console.log(foundCredential.name);
      console.log(foundCredential.email);
      console.log(foundCredential.role);
      setLoggedInUserId(foundCredential.id);
      localStorage.setItem("loggedInUserId", foundCredential.id);
      localStorage.setItem("loggedEmail", foundCredential.email);
      localStorage.setItem("loggedName", foundCredential.name);
      // Clear form data after successful login
      if (foundCredential.role === "customer") {
        window.location.href = "/profile";}

       else if (foundCredential.role === "seller") {
        window.location.href = "/sellerdashboard";
      // } else if (foundCredential.role === "Student") {
      //   window.location.href = "/studentprofile";
      // } else if (foundCredential.role === "Staff") {
      //   window.location.href = "/staffprofile";
      // } else if (foundCredential.role === "Faculty") {
      //   window.location.href = "/facultyprofile";
       }
        else if (foundCredential.role === "admin") {
          window.location.href = "/admindashboard";
        }
      setFormData({
        email: "",
        password: "",
      });
    }
     else {
      alert("User Doesnot exist - Please Enter valid Email and Password");
      console.log("Invalid credentials");
    }
  };



  const displayError = (fieldName, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: message,
    }));
  };

  const hideError = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item href="#" as={Link} to="/homepage" active>
              Home
            </Breadcrumb.Item>
          </Breadcrumb>
          <Form
            onSubmit={handleSubmit}
            className="p-4 bg-light rounded login-form"
          >
            <h3 className="mb-4">Login</h3>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={validateEmail}
                placeholder="Enter email"
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={validatePassword}
                placeholder="Enter password"
              />
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </Form.Group>
            <Row>
              <Col>
                <button type="submit" className="btn btn-dark w-25">
                  Submit
                </button>
              </Col>
            </Row>
            <p>
              Dont have an account? <Link to="/signup">Signup here</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
