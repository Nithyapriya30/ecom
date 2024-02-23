import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProductToJson } from "../../slice/ProductSlice";
function EditModal(props) {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.products);
  const [productData, setProductData] = useState({});
  const [errors, setErrors] = useState({});
  const categories = ["Kids", "Womens", "Mens"];
  useEffect(() => {
    if (selectedProduct && Object.keys(selectedProduct).length !== 0) {
      setProductData(selectedProduct);
    } else {
      setProductData({});
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    let isValid = true;
    if (!productData.ProductFullName) {
      newErrors.ProductFullName = "Please enter product full name";
      isValid = false;
    }
    // Add more validation rules for other fields

    setErrors(newErrors);

    if (isValid) {
      dispatch(updateProductToJson(productData));
      props.onHide();
    }
  };

  return (
    <Modal {...props} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold fs-4">Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              {/* First Column */}
              <Form.Group className="mb-4 fw-bold" controlId="productName">
                <Form.Label>
                  Product Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="ProductFullName"
                  placeholder="Enter product full name"
                  value={productData.ProductFullName || ""}
                  onChange={handleChange}
                />
                {errors.ProductFullName && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.ProductFullName}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="productSubName">
                <Form.Label>Product Sub Name</Form.Label>
                <Form.Control
                  type="text"
                  name="SubName"
                  placeholder="Enter product sub name"
                  value={productData.SubName}
                  onChange={handleChange}
                />
                {errors.SubName && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.SubName}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="offers">
                <Form.Label>Offers</Form.Label>
                <Form.Control
                  type="text"
                  name="Offer"
                  placeholder="Enter offers"
                  value={productData.Offer}
                  onChange={handleChange}
                />
                {errors.Offer && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Offer}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="sizes">
                <Form.Label>Size Available</Form.Label>
                <Form.Control
                  type="text"
                  name="Size"
                  placeholder="Enter sizes separated by commas"
                  value={productData.Size}
                  onChange={handleChange}
                />
                {errors.Size && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Size}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="Prize"
                  placeholder="Enter price"
                  value={productData.Prize}
                  onChange={handleChange}
                />
                {errors.Prize && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Prize}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-4 fw-bold" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="Description"
                  placeholder="Enter product description"
                  value={productData.Description}
                  onChange={handleChange}
                />
                {errors.Description && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Description}
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col>
              {/* Second Column */}
              <Form.Group className="mb-4 fw-bold" controlId="category">
                <Form.Label>
                  Category <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  name="Category"
                  value={productData.Category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Control>
                {errors.Category && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Category}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="colors">
                <Form.Label>Colors Available</Form.Label>
                <Form.Control
                  type="text"
                  name="Colors"
                  placeholder="Enter colors available"
                  value={productData.Colors}
                  onChange={handleChange}
                />
                {errors.Colors && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Colors}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="brand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  name="Brand"
                  placeholder="Enter brand"
                  value={productData.Brand}
                  onChange={handleChange}
                />
                {errors.Brand && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Brand}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="pattern">
                <Form.Label>Pattern</Form.Label>
                <Form.Control
                  type="text"
                  name="Pattern"
                  placeholder="Enter pattern"
                  value={productData.Pattern || ""}
                  onChange={handleChange}
                />
                {errors.Pattern && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Pattern}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="origin">
                <Form.Label>Origin</Form.Label>
                <Form.Control
                  type="text"
                  name="Origin"
                  placeholder="Enter origin"
                  value={productData.Origin || ""}
                  onChange={handleChange}
                />
                {errors.Origin && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.Origin}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="productImage">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="text"
                  name="productimage"
                  placeholder="Enter product image URL"
                  value={productData.productimage || ""}
                  onChange={handleChange}
                />
                {errors.productimage && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.productimage}
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;
