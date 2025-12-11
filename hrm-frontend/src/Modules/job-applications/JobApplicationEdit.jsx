import { useEffect, useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "./job-application.api";
import SelectField from "../../Components/SelectField";

const JobApplicationEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [application, setApplication] = useState(null);

  const [loading, setLoading] = useState(true);
    
  const [status, setStatus] = useState("");


  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await api.get(`/job-application/${id}/show`);

        setApplication(res.data.data.application);
        
        setStatus(res.data.data.application.status);
      } catch (err) {
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
      await api.put(`/job-application/${id}/update`, { status });

      toast.success("Application updated!");
      
      navigate('/admin/job-applications');
    } catch (err) {
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

          <Form.Control 
            disabled 
            type="text" 
            value={application.applicant_name} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>

          <Form.Control 
            disabled
            type="text" 
            value={application.applicant_email} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>

          <Form.Control 
            disabled 
            type="text" 
            value={application.applicant_phone} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job Position</Form.Label>

          <Form.Control 
            disabled 
            type="text" 
            value={application.recruitment?.position} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <SelectField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            options={["pending", "hired", "rejected", "reviewed", "shortlisted"]}
          />
        </Form.Group>
        <Button type="submit">Update Status</Button>
      </Form>
    </Card>
  );
};

export default JobApplicationEdit;
