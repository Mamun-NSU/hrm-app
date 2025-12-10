import { useEffect, useState } from "react";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import RoleService from "../services/RoleService";

const RoleView = () => {
  const { id } = useParams();
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await RoleService.get(id);
        setRole(response.data.data.role);
      } catch (error) {
        console.error("Failed to fetch role:", error);
      }
    };
    fetchRole();
  }, [id]);

  if (!role) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">Role Details</h3>
        <p><strong>ID:</strong> {role.id}</p>
        <p><strong>Name:</strong> {role.name}</p>
        <p><strong>Description:</strong> {role.description || "—"}</p>
        <p><strong>Created At:</strong> {new Date(role.created_at).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(role.updated_at).toLocaleString()}</p>
        <Button variant="primary" className="w-100 mt-3" onClick={() => navigate("/roles")}>
          Back to List
        </Button>
      </Card>
    </Container>
  );
};

export default RoleView;
