// TableComponent.js
import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import TableRow from "../Seller/TableRow";

const TableComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const tableData = [
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
    { id: 1, Companyname: "Company A", PdtName: "Product A", Quantity: "3", Price: "$250" },
  ];

  return (
    <div className="container-fluid w-100 table-responsive text-center">
      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">CompanyName</th>
            <th scope="col">PdtName</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="tableBody4">
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              id={row.id}
              companyName={row.Companyname}
              pdtName={row.PdtName}
              quantity={row.Quantity}
              price={row.Price}
              onButtonClick={handleModalShow}
            />
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Management Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>Item is added successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableComponent;
