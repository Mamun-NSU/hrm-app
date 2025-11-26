import React, { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeTrainingService from "../../services/EmployeeTrainingService";

const EmployeeTrainingList = ({ user }) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await EmployeeTrainingService.getAll();
      setRecords(res.data.data.employee_trainings);
    } catch (error) {
      toast.error("Failed to load records!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/employee-trainings/${id}/edit`);
  const handleView = (id) => navigate(`/employee-trainings/${id}`);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await EmployeeTrainingService.remove(id);
        toast.success("Record deleted successfully!");
        fetchRecords();
      } catch (error) {
        toast.error("Failed to delete record!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Employee Trainings</h3>
        {user?.role_id === 1 && (
          <Button variant="primary" onClick={() => navigate("/employee-trainings/create")}>
            + Add Record
          </Button>
        )}
      </Card.Header>
      <Card.Body>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Training</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.length > 0 ? (
                records.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.employee?.user?.name || "—"}</td>
                    <td>{r.training?.title || "—"}</td>
                    <td>{r.status}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleView(r.id)}
                      >
                        View
                      </Button>
                      {user?.role_id === 1 && (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(r.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(r.id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No records found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default EmployeeTrainingList;
