// src/pages/performance/PerformanceKPIView.jsx
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import PerformanceKPIService from "../../services/PerformanceKPIService";

const PerformanceKPIView = () => {
  const { id } = useParams();
  const [kpi, setKpi] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKPI = async () => {
      try {
        const response = await PerformanceKPIService.get(id);
        setKpi(response.data);
      } catch (error) {
        console.error("Failed to fetch KPI:", error);
      }
    };
    fetchKPI();
  }, [id]);

  if (!kpi) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">KPI Details</h3>
        <p><strong>ID:</strong> {kpi.id}</p>
        <p><strong>Name:</strong> {kpi.name}</p>
        <p><strong>Description:</strong> {kpi.description || "—"}</p>
        <p><strong>Created At:</strong> {new Date(kpi.created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(kpi.updated_at).toLocaleString()}</p>
        <Button variant="primary" className="w-100 mt-3" onClick={() => navigate("/performance-kpis")}>
          Back to List
        </Button>
      </Card>
    </Container>
  );
};

export default PerformanceKPIView;
