import React from "react";
import CreditCardForm from "../components/CreditCardForm";
import MyNavbar from "../components/navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import { Container } from "react-bootstrap";
const PaymentPage = () => {
  return (
    <div>
      <MyNavbar />
      <Container className="my-5 mt-8">
        <div style={{ paddingTop: "10px" }}>
          <CreditCardForm />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default PaymentPage;



// import React, { useState } from "react";
// import CreditCardForm from "../components/CreditCardForm";
// import MyNavbar from "../components/navbar/Navbar";
// import Footer from "../layout/Footer/Footer";
// import { Container } from "react-bootstrap";

// const PaymentPage = () => {
//   const [showModal, setShowModal] = useState(true); // Initialize showModal state

//   // Function to handle modal close
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <MyNavbar />
//       <Container className="my-5 mt-2">
//         <div style={{ paddingTop: "10px" }}>
//           {/* Pass showModal and handleCloseModal as props */}
//           <CreditCardForm show={showModal} onHide={handleCloseModal} />
//         </div>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default PaymentPage;
