import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "./department.api";

const DepartmentView = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    try {
      const response = await api.get(`/department/${id}/show`);
      setDepartment(response.data);
    } catch (error) {
      console.error("Error fetching department:", error);
      toast.error("Failed to load department details!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!department) {
    return (
      <Card className="mt-4 shadow-sm">
        <Card.Body>
          <h5>Department not found!</h5>
          <Button variant="secondary" onClick={() => navigate("/departments")}>
            Back to List
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Department Details</h3>
      </Card.Header>
      <Card.Body>
        <p>
          <strong>ID:</strong> {department.id}
        </p>
        <p>
          <strong>Name:</strong> {department.name}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(department.created_at).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(department.updated_at).toLocaleString()}
        </p>

        <Button variant="secondary" onClick={() => navigate("/departments")}>
          Back to List
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DepartmentView;
