import React, { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./salary-structure.api";

const SalaryStructureList = () => {
  const [structures, setStructures] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStructures();
  }, []);

  const fetchStructures = async () => {
    try {
      const res = await api.get(`/salary-structure/list`);
      setStructures(res.data.data.salary_structures);
    } catch (err) {
      console.error("Error fetching salary structures:", err);
      toast.error("Failed to load salary structures!");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => navigate(`/salary-structures/${id}`);
  const handleEdit = (id) => navigate(`/salary-structures/${id}/edit`);

  const handleDelete = async (id) => {
    if (
      !window.confirm("Are you sure you want to delete this salary structure?")
    )
      return;

    try {
      await api.delete(`/salary-structure/${id}/delete`);
      toast.success("Salary structure deleted successfully!");
      fetchStructures();
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to delete salary structure!");
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Salary Structures List</h3>
        <Button
          variant="primary"
          onClick={() => navigate("/salary-structures/create")}
        >
          + Add Salary Structure
        </Button>
      </Card.Header>
      <Card.Body>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Basic Salary</th>
                <th>Allowance</th>
                <th>Deduction</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {structures.length > 0 ? (
                structures.map((s) => {
                  const grossSalary =
                    Number(s.basic_salary) + Number(s.allowance_amount);
                  const netSalary =
                    grossSalary - Number(s.deduction_amount);
                  return (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.employee?.user?.name || "N/A"}</td>
                      <td>{s.basic_salary}</td>
                      <td>{s.allowance_amount}</td>
                      <td>{s.deduction_amount}</td>
                      <td>{grossSalary}</td>
                      <td>{netSalary}</td>
                      <td>
                        <Button
                          variant="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleView(s.id)}
                        >
                          View
                        </Button>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEdit(s.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(s.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No salary structures found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default SalaryStructureList;
