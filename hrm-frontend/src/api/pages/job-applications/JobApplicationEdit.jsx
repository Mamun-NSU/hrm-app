import React, { useEffect, useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const JobApplicationEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await api.get(`/job-applications/${id}`);
        setApplication(res.data);
        setStatus(res.data.status);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch application!");
      } finally {
        setLoading(false);
      }
    };
    fetchApplication();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/job-applications/${id}`, { status });
      toast.success("Application updated!");
      navigate("/job-applications");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update!");
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm p-4">
      <h3>Edit Job Application</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Applicant Name</Form.Label>
          <Form.Control type="text" value={application.applicant_name} disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={application.applicant_email} disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={application.applicant_phone} disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job Position</Form.Label>
          <Form.Control type="text" value={application.recruitment?.position} disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Update Status</Button>
      </Form>
    </Card>
  );
};

export default JobApplicationEdit;
