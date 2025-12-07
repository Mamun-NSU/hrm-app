import { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PerformanceEvaluationService from "../../services/PerformanceEvaluationService";

const PerformanceEvaluationList = ({ user, isAdmin }) => {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvaluations();
  }, []);

  const fetchEvaluations = async () => {
    try {
      const response = await PerformanceEvaluationService.getAll();
      setEvaluations(response.data.data.evaluations);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load evaluations!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/performance-evaluations/${id}/edit`);
  const handleView = (id) => navigate(`/performance-evaluations/${id}`);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this evaluation?")) {
      try {
        await PerformanceEvaluationService.remove(id);
        toast.success("Evaluation deleted successfully!");
        fetchEvaluations();
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete evaluation!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Performance Evaluations</h3>
        <Button variant="primary" onClick={() => navigate("/performance-evaluations/create")}>
          + Add Evaluation
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
                <th>KPI</th>
                <th>Score</th>
                <th>Remarks</th>
                <th>Evaluation Date</th>
                <th>Evaluated By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {evaluations.length > 0 ? (
                evaluations.map((evaluation) => (
                  <tr key={evaluation.id}>
                    <td>{evaluation.id}</td>
                    <td>{evaluation.employee?.user?.name || "—"}</td>
                    <td>{evaluation.kpi?.name || "—"}</td>
                    <td>{evaluation.score}</td>
                    <td>{evaluation.remarks || "—"}</td>
                    <td>{new Date(evaluation.evaluation_date).toLocaleDateString()}</td>
                    <td>{evaluation.evaluated_by}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleView(evaluation.id)}
                      >
                        View
                      </Button>
                      {isAdmin && (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(evaluation.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(evaluation.id)}
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
                  <td colSpan="7" className="text-center">No evaluations found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default PerformanceEvaluationList;
