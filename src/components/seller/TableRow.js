// TableRow.js
import React from "react";
import { Button } from "react-bootstrap";

const TableRow = ({ id, companyName, pdtName, quantity, price, onButtonClick }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{companyName}</td>
      <td>{pdtName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <Button variant="outline-success" onClick={onButtonClick}>
          Add
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
