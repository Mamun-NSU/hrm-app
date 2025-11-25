import React, { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./job-application.api";

const JobApplicationList = ({ user, isAdmin }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const endpoint = isAdmin
        ? "/job-application/list"
        : "/job-application/employee/list";
      const res = await api.get(endpoint);
      setApplications(res.data.data.applications);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load applications!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/admin/job-applications/${id}/edit`);
  const handleView = (id) => navigate(`/admin/job-applications/${id}`);
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this application?")) return;
    try {
      await api.delete(`/job-application/${id}/delete`);
      toast.success("Application deleted!");
      fetchApplications();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete!");
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm p-4">
      <h3>Job Applications</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Job Position</th>
            <th>Applicant</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Applied At</th>
            {isAdmin && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {applications.length ? (
            applications.map((app, idx) => (
              <tr key={app.id}>
                <td>{idx + 1}</td>
                <td>{app.recruitment?.position}</td>
                <td>{app.applicant_name}</td>
                <td>{app.applicant_email}</td>
                <td>{app.applicant_phone}</td>
                <td>{app.status}</td>
                <td>{new Date(app.applied_at).toLocaleDateString()}</td>
                {isAdmin && (
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      className="me-2"
                      onClick={() => handleView(app.id)}
                    >
                      View
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(app.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(app.id)}
                    >
                      Delete
                    </Button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={isAdmin ? "8" : "7"} className="text-center">
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
};

export default JobApplicationList;
