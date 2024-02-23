// import React from 'react';
// import '../Assets/css/LoginSignup.css';
// import { Link } from 'react-router-dom';

// const LoginSignup = () => {
//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Email Address" />
//           <input type="password" placeholder="Password" />
//         </div>
//         <Link to='/'><button>Continue</button></Link>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;









// import React, { useState } from 'react';
// import { Breadcrumb } from 'react-bootstrap'; // Add this import
// import '../Assets/css/LoginSignup.css';
// import { Link } from 'react-router-dom';

// const LoginSignup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Form submission logic here
//       console.log('Form submitted:', formData);
//       // Redirect to home page
//      window.location.href="/"
//     } else {
//       console.log('Form has errors. Please correct them.');
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const { name, email, password } = formData;
//     const newErrors = {
//       name: '',
//       email: '',
//       password: ''
//     };

//     // Name validation
//     if (!name.trim()) {
//       newErrors.name = 'Name is required';
//       isValid = false;
//     }

//     // Email validation
//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!isValidEmail(email)) {
//       newErrors.email = 'Invalid email format';
//       isValid = false;
//     }

//     // Password validation
//     if (!password.trim()) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (password.trim().length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div>
//       <Breadcrumb className="mb-4">
//         <Breadcrumb.Item href="#" as={Link} to="/homepage" active>
//           &nbsp;&nbsp;Home
//         </Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="loginsignup">
        
//         <div className="loginsignup-container">
//           <h1>Sign Up</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="loginsignup-fields">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               <div className="error-message">{errors.name}</div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <div className="error-message">{errors.email}</div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               <div className="error-message">{errors.password}</div>
//             </div>
//             <button type="submit">Continue</button>
//           </form>
          
//           <p>
//             Already have an account? <Link to="/loginform">Login here</Link>
//           </p>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;






import React, { useState } from 'react';
import { Breadcrumb, Form } from 'react-bootstrap';
import '../Assets/css/LoginSignup.css';
import { Link } from 'react-router-dom';
import { addUserToServer } from '../slice/ProfileSlice';
import { useDispatch } from 'react-redux';

const LoginSignup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    state: '',
    email: '',
    password: '',
    photo: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    address: '',
    state: '',
    email: '',
    password: '',
    photo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors for the field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      newErrors[fieldName] = validateField(fieldName, formData[fieldName]);
    });

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === '');

    if (isValid) {
      console.log('Form submitted successfully');
      // Dispatch action to add user to server
      dispatch(addUserToServer({                   

        name: formData.name,
        address:formData.address,
        mobile: formData.mobile,
        state:formData.state,     
        email:formData.email,
        password:formData.password,
        photo:formData.photo,
        role:"customer"
       
      }));
      // Reset form data
      setFormData({
        name: '',
        mobile: '',
        address: '',
        state: '',
        email: '',
        password: '',
        photo: ''
      });

      alert(`${formData.name} is being added to the database.`);
    } else {
      console.log('Form validation failed');
    }
  };

  const validateField = (fieldName, value) => {
    if (value.trim() === '') 
    {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (fieldName === 'email' && !isValidEmail(value)) {
        return 'Invalid email format';
    }

    if (fieldName === 'mobile') {
        // Check if the mobile number is exactly 10 digits long
        if (!/^\d{10}$/.test(value)) {
            return 'Mobile number should be 10 digits long';
        }
        
        // Check if the mobile number contains only numeric characters
        if (!/^\d+$/.test(value)) {
            return 'Mobile number should contain only numeric characters';
        }

        // Add prefix validation if needed
        // For example, if mobile numbers should start with a specific prefix
        // if (!value.startsWith('+91')) {
        //     return 'Mobile number should start with +91';
        // }
    }

    return ''; // No errors
};

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  return (
    <div>
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="#" as={Link} to="/homepage" active>
          &nbsp;Home
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name" style={{ textAlign: "start" }}>
              <Form.Label >Name <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile" style={{ textAlign: "start" }}>
              <Form.Label>Mobile <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} isInvalid={!!errors.mobile} />
              <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="address" style={{ textAlign: "start" }}>
              <Form.Label>Address <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} isInvalid={!!errors.address} />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="state" style={{ textAlign: "start" }}>
              <Form.Label>State <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} isInvalid={!!errors.state} />
              <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email" style={{ textAlign: "start" }}>
              <Form.Label>Email <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password" style={{ textAlign: "start" }}>
              <Form.Label>Password <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} isInvalid={!!errors.password} />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="photo" style={{ textAlign: "start" }}>
              <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="url" name="photo" value={formData.photo} onChange={handleChange} isInvalid={!!errors.photo} />
              <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
            </Form.Group>

            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
