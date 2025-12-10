import { useEffect, useState } from "react";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PerformanceEvaluationService from "../services/PerformanceEvaluationService";

const PerformanceEvaluationView = () => {
  const { id } = useParams();
  const [evaluation, setEvaluation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvaluation = async () => {
      try {
        const response = await PerformanceEvaluationService.get(id);
        setEvaluation(response.data.data.evaluation);
      } catch (error) {
        console.error("Failed to fetch evaluation:", error);
      }
    };
    fetchEvaluation();
  }, [id]);

  if (!evaluation) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">Evaluation Details</h3>
        <p><strong>ID:</strong> {evaluation.id}</p>
        <p><strong>Employee:</strong> {evaluation.employee?.user?.name || "—"}</p>
        <p><strong>KPI:</strong> {evaluation.kpi?.name || "—"}</p>
        <p><strong>Score:</strong> {evaluation.score}</p>
        <p><strong>Remarks:</strong> {evaluation.remarks || "—"}</p>
        <p><strong>Evaluation Date:</strong> {new Date(evaluation.evaluation_date).toLocaleDateString()}</p>
        <p><strong>Evaluated By:</strong> {evaluation.evaluated_by}</p>
        <Button variant="primary" className="w-100 mt-3" onClick={() => navigate("/performance-evaluations")}>
          Back to List
        </Button>
      </Card>
    </Container>
  );
};

export default PerformanceEvaluationView;
