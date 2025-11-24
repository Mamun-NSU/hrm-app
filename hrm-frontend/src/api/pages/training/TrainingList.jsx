import React, { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TrainingService from "../../services/TrainingService";

const TrainingList = ({ user }) => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const res = await TrainingService.getAll();
      setTrainings(res.data.data.trainings);
    } catch (error) {
      toast.error("Failed to load trainings!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/trainings/${id}/edit`);
  const handleView = (id) => navigate(`/trainings/${id}`);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this training?")) {
      try {
        await TrainingService.remove(id);
        toast.success("Training deleted successfully!");
        fetchTrainings();
      } catch (error) {
        toast.error("Failed to delete training!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Trainings</h3>
        {user?.role_id === 1 && (
          <Button variant="primary" onClick={() => navigate("/trainings/create")}>
            + Add Training
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
                <th>Title</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trainings.length > 0 ? (
                trainings.map((t) => (
                  <tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.title}</td>
                    <td>{t.description}</td>
                    <td>{t.start_date}</td>
                    <td>{t.end_date}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleView(t.id)}
                      >
                        View
                      </Button>

                      {user?.role_id === 1 && (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(t.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(t.id)}
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
                  <td colSpan="6" className="text-center">No trainings found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default TrainingList;
