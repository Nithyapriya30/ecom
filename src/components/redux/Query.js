import React, { useState } from "react";
import { Button, Container, Table, Modal } from "react-bootstrap";

function QueryResponseTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState("");
  const [tableData, setTableData] = useState([
    {
      id: 1,
      customerName: "xxxx",
      orderId: "#0001",
      query: "What is the Original Color of the product",
    },
    {
      id: 2,
      customerName: "yyyy",
      orderId: "#0002,#12344",
      query: "What is the Original Color of the product",
    },
    {
      id: 3,
      customerName: "zzzz",
      orderId: "#003,#144",
      query: "What is the Original Color of the product",
    },
    {
      id: 4,
      customerName: "aaaa",
      orderId: "#0004,#44",
      query: "What is the Original Color of the product",
    },
    // Additional sample data
    {
      id: 5,
      customerName: "bbbb",
      orderId: "#0005",
      query: "Is the product available in different sizes?",
    },
    {
      id: 6,
      customerName: "cccc",
      orderId: "#0006,#55",
      query: "What are the shipping options?",
    },
    {
      id: 7,
      customerName: "dddd",
      orderId: "#0007,#234",
      query: "Can I return the product if I'm not satisfied?",
    },
    {
      id: 8,
      customerName: "eeee",
      orderId: "#0008,#789",
      query: "How long does the delivery take?",
    },
  ]);

const deleteRow = (id) => {
  setTableData((prevData) => {
    const updatedData = prevData.filter((item) => item.id !== id);
    console.log("Updated tableData:", updatedData);
    return updatedData;
  });
};

  const handleRespond = (query) => {
    setSelectedQuery(query);
    setShowModal(true);
  };

  return (
    <Container className="mt-5">
      <h4 className="fw-bold">Respond to Query</h4>
      <Table bordered className="text-center" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className="head-tab">S.no</th>
            <th className="head-tab">Customer Name</th>
            <th className="head-tab">Order ID</th>
            <th className="head-tab">Query</th>
            <th className="head-tab">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.customerName}</td>
              <td>{row.orderId}</td>
              <td>{row.query}</td>
              <td>
                <Button
                  className="btn-secondary me-2"
                  onClick={() => handleRespond(row.query)}
                  style={{
                    backgroundColor: "green",
                    border: "green",
                  }}
                >
                  Respond
                </Button>
                <Button
                  className="btn-secondary"
                  onClick={() => deleteRow(row.id)}
                >
                  Discard
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for responding to the query */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Respond to Query</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Query: {selectedQuery}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default QueryResponseTable;
