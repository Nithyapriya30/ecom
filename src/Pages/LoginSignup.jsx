import React, { useState } from 'react';
import { Breadcrumb, Form, InputGroup } from 'react-bootstrap';
import '../Assets/css/LoginSignup.css';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        address: formData.address,
        mobile: formData.mobile,
        state: formData.state,     
        email: formData.email,
        password: formData.password,
        photo: formData.photo,
        role: "customer"
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
    }

    return ''; // No errors
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
              <Form.Label>Name <span className="star text-danger">*</span></Form.Label>
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
              <InputGroup>
                <Form.Control 
                  type={passwordVisible ? "text" : "password"} 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  isInvalid={!!errors.password} 
                />
               <InputGroup.Text>
  <span onClick={() => setPasswordVisible(!passwordVisible)}>
    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
  </span>
</InputGroup.Text>
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="photo" style={{ textAlign: "start" }}>
              <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
              <Form.Control type="url" name="photo" value={formData.photo} onChange={handleChange} isInvalid={!!errors.photo} />
              <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
            </Form.Group>

           <div className="text-center">
              <button type="submit">Submit</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
