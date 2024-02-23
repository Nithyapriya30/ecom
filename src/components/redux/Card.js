// import React, { useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import EditModal from "./EditModal";
// import ModalComponent from "./AddModal";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import {
//   getProductFromJson,
//   removeProductFromJson,
//   setSelectedProduct,
// } from "../../slice/ProductSlice.js";
// import DeleteModal from "./DeleteModal.js";

// function Productcard() {
//   const [showModal1, setShowModal1] = useState(false);
//   const handleShowModal1 = () => setShowModal1(true);
//   const handleCloseModal1 = () => setShowModal1(false);
//   const [showModal, setShowModal] = useState(false);
//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

//   const { productSet, error, selectedProduct } = useSelector(
//     (state) => state.products
//   );

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProductFromJson());
//   }, [dispatch]);

//   const deleteProduct = (product) => {
//     setProductToDelete(product);
//     setDeleteConfirmationModal(true);
//   };

//   const confirmDelete = () => {
//     if (productToDelete) {
//       dispatch(removeProductFromJson(productToDelete));
//       setProductToDelete(null);
//       setDeleteConfirmationModal(false);
//     }
//   };

//   const cancelDelete = () => {
//     setProductToDelete(null);
//     setDeleteConfirmationModal(false);
//   };

//   return (
//     <div className="mt-5">
//       <div>
//         <Button
//           className="btn btn-secondary float-end"
//           onClick={handleShowModal}
//         >
//           Add New Product
//         </Button>
//         <h4 className="fw-bold">Products</h4>
//       </div>
//       <ModalComponent show={showModal} onHide={handleCloseModal} />

//       <div className="d-flex flex-wrap ">
//         {productSet &&
//           productSet.map((product, index) => (
//             <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
//               <Card.Img variant="top" src={product.productimage} height={230} />
//               <Card.Body>
//                 <Card.Title className="text-center">
//                   {product.ProductFullName}
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted text-center">
//                   {product.SubName}
//                 </Card.Subtitle>
//                 <Card.Text>
//                   <div>
//                     <p>
//                       <strong>Category:</strong> {product.Category}
//                     </p>
//                     <p>
//                       <strong>Offer :</strong> {product.Offer}
//                     </p>
//                     <p>
//                       <strong>Size:</strong> {product.Size}
//                     </p>
//                     <p>
//                       <strong>Colors:</strong> {product.Colors}
//                     </p>
//                     <p>
//                       <strong>Prize:</strong> ₹{product.Prize}
//                     </p>
//                     <p>
//                       <strong>Brand:</strong> {product.Brand}
//                     </p>
//                     <p>
//                       <strong>Origin:</strong> {product.Origin}
//                     </p>
//                     <p>
//                       <strong>Description:</strong> {product.Description}
//                     </p>
//                   </div>
//                 </Card.Text>

//                 <Button
//                   className="btn btn-secondary me-2"
//                   onClick={() => {
//                     handleShowModal1();
//                     dispatch(setSelectedProduct(product));
//                   }}
//                 >
//                   Edit
//                 </Button>

//                 <Button variant="danger" onClick={() => deleteProduct(product)}>
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))}
//       </div>
//       <DeleteModal
//         show={deleteConfirmationModal}
//         onHide={cancelDelete}
//         onConfirm={confirmDelete}
//       />
//       <EditModal
//         show={showModal1}
//         onHide={handleCloseModal1}
//         selectedProduct={selectedProduct}
//       />
//     </div>
//   );
// }

// export default Productcard;
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import EditModal from "./EditModal";
import ModalComponent from "./AddModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProductFromJson,
  removeProductFromJson,
  setSelectedProduct,
} from "../../slice/ProductSlice.js";
import DeleteModal from "./DeleteModal.js";

function Productcard() {
  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const { productSet, error, selectedProduct } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFromJson());
  }, [dispatch]);

  const deleteProduct = (product) => {
    setProductToDelete(product);
    setDeleteConfirmationModal(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      dispatch(removeProductFromJson(productToDelete));
      setProductToDelete(null);
      setDeleteConfirmationModal(false);
    }
  };

  const cancelDelete = () => {
    setProductToDelete(null);
    setDeleteConfirmationModal(false);
  };

  return (
    <div className="mt-5">
      <div>
        <Button
          className="btn btn-secondary float-end"
          onClick={handleShowModal}
        >
          Add New Product
        </Button>
        <h4 className="fw-bold">Products</h4>
      </div>
      <ModalComponent show={showModal} onHide={handleCloseModal} />

      <div className="d-flex flex-wrap justify-content-center">
        {productSet &&
          productSet.map((product, index) => (
            <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={product.productimage} height={230} />
              <Card.Body>
                <Card.Title className="text-center">
                  {product.ProductFullName}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  {product.SubName}
                </Card.Subtitle>
                <Card.Text>
                  <div>
                    <p>
                      <strong>Category:</strong> {product.Category}
                    </p>
                    <p>
                      <strong>Offer :</strong> {product.Offer}
                    </p>
                    <p>
                      <strong>Size:</strong> {product.Size}
                    </p>
                    <p>
                      <strong>Colors:</strong> {product.Colors}
                    </p>
                    <p>
                      <strong>Prize:</strong> ₹{product.Prize}
                    </p>
                    <p>
                      <strong>Brand:</strong> {product.Brand}
                    </p>
                    <p>
                      <strong>Origin:</strong> {product.Origin}
                    </p>
                    <p>
                      <strong>Description:</strong> {product.Description}
                    </p>
                  </div>
                </Card.Text>

                <Button
                  className="btn btn-secondary me-2"
                  onClick={() => {
                    handleShowModal1();
                    dispatch(setSelectedProduct(product));
                  }}
                >
                  Edit
                </Button>

                <Button variant="danger" onClick={() => deleteProduct(product)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
      <DeleteModal
        show={deleteConfirmationModal}
        onHide={cancelDelete}
        onConfirm={confirmDelete}
      />
      <EditModal
        show={showModal1}
        onHide={handleCloseModal1}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}

export default Productcard;
