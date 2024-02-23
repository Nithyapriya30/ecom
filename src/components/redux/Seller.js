// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";

// function SellerSignupForm() {
//   // State variables to store form field values
//   const [formData, setFormData] = useState({
//     fieldName: "",
//     businessName: "",
//     address: "",
//     aadharNumber: "",
//     ifscCode: "",
//     productCategories: "",
//     setPassword: "",
//     phoneNumberEmail: "",
//     businessType: "",
//     pincode: "",
//     accountNumber: "",
//     licenseNumber: "",
//     averageProductPrice: "",
//     confirmPassword: "",
//   });

//   // State variables to store form field validation errors
//   const [errors, setErrors] = useState({
//     fieldNameError: "",
//     businessNameError: "",
//     addressError: "",
//     aadharNumberError: "",
//     ifscCodeError: "",
//     productCategoriesError: "",
//     setPasswordError: "",
//     phoneNumberEmailError: "",
//     businessTypeError: "",
//     pincodeError: "",
//     accountNumberError: "",
//     licenseNumberError: "",
//     averageProductPriceError: "",
//     confirmPasswordError: "",
//   });

//   // Handler for form submission
//   const handleSubmit = () => {
//     // Add your form submission logic here
//     console.log(formData);
//   };

//   // Handler for updating form field values
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <Form id="sellerSignUpForm">
//       <h4 className="text-center fw-bold">
//         Seller Sign-Up /{" "}
//         <a href="#" style={{ color: "palevioletred", textDecoration: "none" }}>
//           login
//         </a>
//       </h4>
//       <div className="row g-5 p-5 pt-4">
//         {/* First Column */}
//         <div className="col-md-6 fw-bold">
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="fieldName">
//               {" "}
//               Name <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="fieldName"
//               name="fieldName"
//               value={formData.fieldName}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="fieldNameError">
//               {errors.fieldNameError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="businessName">
//               Business Name <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="businessName"
//               name="businessName"
//               value={formData.businessName}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="businessNameError">
//               {errors.businessNameError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="address">Address</Form.Label>
//             <Form.Control
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="addressError">
//               {errors.addressError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="aadharNumber">
//               Aadhar Number <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="aadharNumber"
//               name="aadharNumber"
//               value={formData.aadharNumber}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="aadharNumberError">
//               {errors.aadharNumberError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="ifscCode">
//               IFSC Code <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="ifscCode"
//               name="ifscCode"
//               value={formData.ifscCode}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="ifscCodeError">
//               {errors.ifscCodeError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="productCategories">
//               Product Categories <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="productCategories"
//               name="productCategories"
//               value={formData.productCategories}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="productCategoriesError">
//               {errors.productCategoriesError}
//             </small>
//           </div>
//           <div className="form-group">
//             <Form.Label htmlFor="setPassword">
//               Set Password <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="password"
//               id="setPassword"
//               name="setPassword"
//               value={formData.setPassword}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="setPasswordError">
//               {errors.setPasswordError}
//             </small>
//           </div>
//         </div>
//         {/* Second Column */}
//         <div className="col-md-6 fw-bold">
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="phoneNumberEmail">
//               Phone Number/Email <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="phoneNumberEmail"
//               name="phoneNumberEmail"
//               value={formData.phoneNumberEmail}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="phoneNumberEmailError">
//               {errors.phoneNumberEmailError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="businessType">
//               Business Type <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="businessType"
//               name="businessType"
//               value={formData.businessType}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="businessTypeError">
//               {errors.businessTypeError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="pincode">
//               Pincode <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="pincode"
//               name="pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="pincodeError">
//               {errors.pincodeError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="accountNumber">
//               Account Number <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="accountNumber"
//               name="accountNumber"
//               value={formData.accountNumber}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="accountNumberError">
//               {errors.accountNumberError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="licenseNumber">
//               License Number <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="licenseNumber"
//               name="licenseNumber"
//               value={formData.licenseNumber}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="licenseNumberError">
//               {errors.licenseNumberError}
//             </small>
//           </div>
//           <div className="form-group mb-3">
//             <Form.Label htmlFor="averageProductPrice">
//               Average Product Price <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="text"
//               id="averageProductPrice"
//               name="averageProductPrice"
//               value={formData.averageProductPrice}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="averageProductPriceError">
//               {errors.averageProductPriceError}
//             </small>
//           </div>
//           <div className="form-group ">
//             <Form.Label htmlFor="confirmPassword">
//               Confirm Password <span className="star">*</span>
//             </Form.Label>
//             <Form.Control
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//             <small className="text-danger" id="confirmPasswordError">
//               {errors.confirmPasswordError}
//             </small>
//           </div>
//         </div>
//       </div>
//       <div className="d-flex align-items-center justify-content-center">
//         <Button
//           type="button"
//           className="btn btn-secondary"
//           onClick={handleSubmit}
//         >
//           Submit
//         </Button>
//       </div>
//     </Form>
//   );
// }

// export default SellerSignupForm;
