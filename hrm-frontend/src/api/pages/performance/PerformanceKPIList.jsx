import React, { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PerformanceKPIService from "../../services/PerformanceKPIService";

const PerformanceKPIList = () => {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchKPIs();
  }, []);

  const fetchKPIs = async () => {
    try {
      const response = await PerformanceKPIService.getAll();
      setKpis(response.data.data.kpis);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load KPIs!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/performance-kpis/${id}/edit`);
  const handleView = (id) => navigate(`/performance-kpis/${id}`);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this KPI?")) {
      try {
        await PerformanceKPIService.remove(id);
        toast.success("KPI deleted successfully!");
        fetchKPIs();
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete KPI!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>KPIs List</h3>
        <Button variant="primary" onClick={() => navigate("/performance-kpis/create")}>
          + Add KPI
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
                <th>Name</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {kpis.length > 0 ? (
                kpis.map((kpi) => (
                  <tr key={kpi.id}>
                    <td>{kpi.id}</td>
                    <td>{kpi.name}</td>
                    <td>{kpi.description || "—"}</td>
                    <td>{new Date(kpi.created_at).toLocaleString()}</td>
                    <td>{new Date(kpi.updated_at).toLocaleString()}</td>
                    <td>
                      <Button variant="info" size="sm" className="me-2" onClick={() => handleView(kpi.id)}>View</Button>
                      <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(kpi.id)}>Edit</Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(kpi.id)}>Delete</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">No KPIs found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default PerformanceKPIList;
