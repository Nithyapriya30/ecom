// import React from "react";
// import { Container, Row, Col, Table, Button } from "react-bootstrap";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
// function WishlistPage(props) {
//   const { wishlist } = props;
//   return (
//     <div className="cart-wrap" style={{ marginTop: "100px" }}>
//       <Container className="mb-8">
//         <Row>                              
//           <Col md={12}>
//             <div className="main-heading mb-6 pt-6 text-center">
//               My wishlist
//             </div>
//             <div className="table-wishlist">
//               <div className="table-responsive">
//                 <Table bordered className="align-middle">
//                   <thead>
//                     <tr className="text-center">
//                       <th>Product Name</th>
//                       <th>Unit Price</th>
//                       <th>Stock Status</th>
//                       <th>Add to cart</th>
//                       <th>Remove</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {wishlist.map(function (product, index) {
//                       return (
//                         <tr key={index}>
//                           <td>
//                             <div className="display-flex flex-column align-items-center">
//                               <div className="img-product text-center">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   style={{ width: "100px", height: "100px" }}
//                                 />
//                               </div>
//                               <div className="name-product text-center">
//                                 {product.name}
//                               </div>
//                             </div>
//                           </td>
//                           <td className="text-center price px-2">
//                             {product.price}
//                           </td>
//                           <td className="text-center px-4">
//                             <span className="in-stock-box">
//                               {product.stockStatus}
//                             </span>
//                           </td>
//                           <td className="text-center px-4">
//                             <div className="d-flex justify-content-center align-items-center">
//                               <Button
//                                 variant="dark"
//                                 className="d-none d-lg-block small-btn mr-2"
//                               >
//                                 {" "}
//                                 {/* Added 'mr-2' for right margin */}
//                                 Add to Cart
//                               </Button>
//                               <i className="fa-solid fa-cart-shopping"></i>
//                             </div>
//                           </td>
//                           <td className="px-4 text-center">
//                             <i class="fa-solid fa-trash"></i>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </Table>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
// export default WishlistPage;







import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

function WishlistPage(props) {
  const { wishlist } = props;

  return (
    <div className="cart-wrap" style={{ marginTop: "100px" }}>
      <Container className="mb-8">
        <Row>
          <Col md={12}>
            <div className="main-heading mb-6 pt-6 text-center">
              My wishlist
            </div>
            <div className="table-wishlist">
              <div className="table-responsive">
                <Table bordered className="align-middle">
                  <thead>
                    <tr className="text-center">
                      <th>Product Name</th>
                      <th>Unit Price</th>
                      {/* <th>Stock Status</th> */}
                      <th>Add to cart</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map(function (product, index) {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="display-flex flex-column align-items-center">
                              <div className="img-product text-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </div>
                              <div className="name-product text-center">
                                {product.name}
                              </div>
                            </div>
                          </td>
                          <td className="text-center price px-2">
                            {product.price}
                          </td>
                          {/* <td className="text-center px-4">
                            <span className="in-stock-box">
                              {product.stockStatus}
                            </span>
                          </td> */}
                          <td className="text-center px-4">
                            <div className="d-flex justify-content-center align-items-center">
                              <Button
                                variant="dark"
                                className="d-none d-lg-block small-btn mr-2"
                              >
                                {" "}
                                {/* Added 'mr-2' for right margin */}
                                Add to Cart
                              </Button>
                              <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                          </td>
                          <td className="px-4 text-center">
                            <i class="fa-solid fa-trash"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WishlistPage;

