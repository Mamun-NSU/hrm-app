import React, { useEffect, useState } from "react";
import api from "../../axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SalaryStructureList = () => {
  const [structures, setStructures] = useState([]);

  useEffect(() => {
    api.get("/salary-structures").then((res) => setStructures(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Salary Structures</h3>

      <div className="text-end mb-3">
        <Link to="/salary-structures/create" className="btn btn-primary">
          Add Salary Structure
        </Link>
      </div>

      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Basic</th>
            <th>Allowance</th>
            <th>Deduction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {structures.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.employee.user.name}</td>
              <td>{s.basic_salary}</td>
              <td>{s.allowance_amount}</td>
              <td>{s.deduction_amount}</td>
              <td>
                <Link
                  to={`/salary-structures/${s.id}/edit`}
                  className="btn btn-sm btn-warning me-2"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SalaryStructureList;
