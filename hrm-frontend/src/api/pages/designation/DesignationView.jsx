import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axios";
import { toast } from "react-toastify";

const DesignationView = () => {
  const { id } = useParams();
  const [designation, setDesignation] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDesignation();
  }, [id]);

  const fetchDesignation = async () => {
    try {
      const response = await api.get(`/designations/${id}`);
      setDesignation(response.data);
    } catch (error) {
      console.error("Error fetching designation:", error);
      toast.error("Failed to fetch designation details!");
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

  if (!designation) {
    return (
      <div className="text-center mt-5">
        <h5>Designation not found</h5>
        <Button variant="secondary" onClick={() => navigate("/designations")}>
          Back to List
        </Button>
      </div>
    );
  }

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Designation Details</h4>
          <Button variant="secondary" onClick={() => navigate("/designations")}>
            Back
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <p><strong>ID:</strong> {designation.id}</p>
        <p><strong>Title:</strong> {designation.title}</p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(designation.created_at).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(designation.updated_at).toLocaleString()}
        </p>
      </Card.Body>
    </Card>
  );
};

export default DesignationView;
