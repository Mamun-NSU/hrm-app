import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./salary-structure.api";


const SalaryStructureView = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [structure, setStructure] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if current user is admin
  const isAdmin = user?.role_id === 1;

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const res = await api.get(`/salary-structure/${id}/show`);
        setStructure(res.data.data.salary_structure);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load salary structure!");
        navigate("/salary-structures");
      } finally {
        setLoading(false);
      }
    };

    fetchStructure();
  }, [id, navigate]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  if (!structure) return <p className="text-center mt-5">Salary structure not found.</p>;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ maxWidth: "650px", width: "100%" }}>
        <h3 className="text-center mb-4">Salary Structure Details</h3>

        {/* Basic Salary */}
        <Row className="mb-2">
          <Col sm={4}><strong>Basic Salary:</strong></Col>
          <Col sm={8}>{structure.basic_salary}</Col>
        </Row>

        {/* Allowances */}
        <h5 className="mt-4">Allowances</h5>

        <Row className="mb-2">
          <Col sm={4}><strong>House Rent:</strong></Col>
          <Col sm={8}>{structure.house_rent}</Col>
        </Row>

        <Row className="mb-2">
          <Col sm={4}><strong>Medical Allowance:</strong></Col>
          <Col sm={8}>{structure.medical_allowance}</Col>
        </Row>

        <Row className="mb-2">
          <Col sm={4}><strong>Transport Allowance:</strong></Col>
          <Col sm={8}>{structure.transport_allowance}</Col>
        </Row>

        <Row className="mb-2">
          <Col sm={4}><strong>Other Allowance:</strong></Col>
          <Col sm={8}>{structure.other_allowance}</Col>
        </Row>

        {/* Deductions */}
        <h5 className="mt-4">Deductions</h5>

        <Row className="mb-2">
          <Col sm={4}><strong>Taxes Deduction:</strong></Col>
          <Col sm={8}>{structure.taxes_deduction}</Col>
        </Row>

        <Row className="mb-4">
          <Col sm={4}><strong>Security Deduction:</strong></Col>
          <Col sm={8}>{structure.security_deduction}</Col>
        </Row>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <Button variant="secondary" className="w-50" onClick={() => navigate("/salary-structures")}>
            Back
          </Button>
          <Button
              variant="warning"
              className="w-50"
              onClick={() => navigate(`/salary-structures/${structure.id}/edit`)}
            >
              Edit
            </Button>
        </div>
      </Card>
    </Container>
  );
};

export default SalaryStructureView;
