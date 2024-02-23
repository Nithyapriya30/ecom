import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductToJson } from "../../slice/ProductSlice";
function ModalComponent(props) {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productSubName, setProductSubName] = useState("");
  const [category, setCategory] = useState("");
  const [offers, setOffers] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [pattern, setPattern] = useState("");
  const [origin, setOrigin] = useState("");
  const [productImage, setProductImage] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const categories = ["Kitchen appliance", "Kits", "Womens", "Mens"];

  useEffect(() => {
    if (!props.show) {
      setProductName("");
      setProductSubName("");
      setCategory("");
      setOffers("");
      setSizes([]);
      setColors("");
      setPrice("");
      setBrand("");
      setPattern("");
      setOrigin("");
      setProductImage("");
      setDescription("");
      setErrors({});
    }
  }, [props.show]);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    if (sizes.includes(size)) {
      setSizes(sizes.filter((s) => s !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    let isValid = true;

    // Check if any field is empty
    if (!productName) {
      newErrors.productName = "Please enter product full name";
      isValid = false;
    }
    if (!productSubName) {
      newErrors.productSubName = "Please enter product sub name";
      isValid = false;
    }
    if (!category) {
      newErrors.category = "Please select a category";
      isValid = false;
    }
    if (!offers) {
      newErrors.offers = "Please enter offers";
      isValid = false;
    }
    if (sizes.length === 0) {
      newErrors.sizes = "Please select at least one size";
      isValid = false;
    }
    if (!colors) {
      newErrors.colors = "Please enter colors available";
      isValid = false;
    }
    if (!price) {
      newErrors.price = "Please enter price";
      isValid = false;
    }
    if (!brand) {
      newErrors.brand = "Please enter brand";
      isValid = false;
    }
    if (!pattern) {
      newErrors.pattern = "Please enter pattern";
      isValid = false;
    }
    if (!origin) {
      newErrors.origin = "Please enter origin";
      isValid = false;
    }
    if (!productImage) {
      newErrors.productImage = "Please enter product image";
      isValid = false;
    }
    if (!description) {
      newErrors.description = "Please enter product description";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        await dispatch(
          addProductToJson({
            ProductFullName: productName,
            SubName: productSubName,
            Category: category,
            Offer: offers,
            Size: sizes,
            Colors: colors,
            Prize: price,
            Brand: brand,
            Pattern: pattern,
            Origin: origin,
            productimage: productImage,
            Description: description,
          })
        );

        setProductName("");
        setProductSubName("");
        setCategory("");
        setOffers("");
        setSizes([]);
        setColors("");
        setPrice("");
        setBrand("");
        setPattern("");
        setOrigin("");
        setProductImage("");
        setDescription("");

        props.onHide();
      } catch (error) {
        console.error("Failed to add product:", error);
      }
    }
  };

  return (
    <Modal {...props} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold fs-4">Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-4 fw-bold" controlId="productName">
                <Form.Label>
                  Product Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product full name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                {errors.productName && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.productName}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="productSubName">
                <Form.Label>Product Sub Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product sub name"
                  value={productSubName}
                  onChange={(e) => setProductSubName(e.target.value)}
                />
                {errors.productSubName && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.productSubName}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="category">
                <Form.Label>
                  Category <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Control>
                {errors.category && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.category}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="offers">
                <Form.Label>
                  Offers <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter offers"
                  value={offers}
                  onChange={(e) => setOffers(e.target.value)}
                />
                {errors.offers && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.offers}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="sizes">
                <Form.Label>
                  Size Available <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter sizes separated by commas"
                  value={sizes.join(", ")}
                  onChange={(e) =>
                    setSizes(
                      e.target.value.split(",").map((size) => size.trim())
                    )
                  }
                />
                {errors.sizes && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.sizes}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="colors">
                <Form.Label>
                  Colors Available <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter colors available"
                  value={colors}
                  onChange={(e) => setColors(e.target.value)}
                />
                {errors.colors && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.colors}
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-4 fw-bold" controlId="price">
                <Form.Label>
                  Price <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors.price && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.price}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="brand">
                <Form.Label>
                  Brand <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
                {errors.brand && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.brand}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="pattern">
                <Form.Label>
                  Pattern <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter pattern"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                />
                {errors.pattern && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.pattern}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="origin">
                <Form.Label>
                  Origin <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
                {errors.origin && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.origin}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="productImage">
                <Form.Label>
                  Product Image <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product image URL"
                  value={productImage}
                  onChange={(e) => setProductImage(e.target.value)}
                />
                {errors.productImage && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.productImage}
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-4 fw-bold" controlId="description">
                <Form.Label>
                  Description <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter product description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <p style={{ color: "red", fontWeight: "normal" }}>
                    {errors.description}
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

export default ModalComponent;
