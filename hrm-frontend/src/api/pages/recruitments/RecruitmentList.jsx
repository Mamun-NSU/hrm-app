import React, { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./recruitment.api";

const RecruitmentList = () => {
  const [recruitments, setRecruitments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchRecruitments = async () => {
    try {
      const res = await api.get('/recruitment/list');
      setRecruitments(res.data.data.recruitments);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load job posts!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecruitments();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await api.delete(`recruitment/${id}/delete`);
      toast.success("Job post deleted!");
      fetchRecruitments();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete job post!");
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Job Posts</h3>
        <Button onClick={() => navigate("/recruitments/create")}>
          + Create Job Post
        </Button>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Position</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recruitments.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.position}</td>
                <td>{r.department?.name || "N/A"}</td>
                <td>{r.status}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => navigate(`/recruitments/${r.id}/edit`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(r.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="info"
                    size="sm"
                    className="ms-2"
                    onClick={() => navigate(`/recruitments/${r.id}`)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecruitmentList;
