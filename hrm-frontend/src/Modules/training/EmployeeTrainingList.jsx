import { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeTrainingService from "../services/EmployeeTrainingService";

const EmployeeTrainingList = ({ isAdmin }) => {
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
        {isAdmin && (
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
                records.map((employeeTraining) => (
                  <tr key={employeeTraining.id}>
                    <td>{employeeTraining.id}</td>
                    <td>{employeeTraining.employee?.user?.name || "—"}</td>
                    <td>{employeeTraining.training?.title || "—"}</td>
                    <td>{employeeTraining.status}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleView(employeeTraining.id)}
                      >
                        View
                      </Button>
                      {isAdmin && (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(employeeTraining.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(employeeTraining.id)}
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
