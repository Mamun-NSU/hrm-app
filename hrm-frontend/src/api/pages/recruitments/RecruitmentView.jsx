import React, { useEffect, useState } from "react";
import { Card, Spinner, Table, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "./recruitment.api";

const RecruitmentView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recruitment, setRecruitment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        const res = await api.get(`recruitment/${id}/show`);
        setRecruitment(res.data.data.recruitment);
      } catch (err) {
        console.error("Error fetching recruitment:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecruitment();
  }, [id]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  if (!recruitment)
    return <p className="mt-4 text-center">Job post not found.</p>;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow" style={{ maxWidth: "700px", width: "100%" }}>
        <h3 className="text-center mb-4">Job Post Details</h3>

        <p>
          <strong>Position:</strong> {recruitment.position}
        </p>

        <p>
          <strong>Department:</strong>{" "}
          {recruitment.department?.name || "N/A"}
        </p>

        <p>
          <strong>Status:</strong> {recruitment.status}
        </p>

        <p>
          <strong>Created At:</strong>{" "}
          {new Date(recruitment.created_at).toLocaleString()}
        </p>

        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(recruitment.updated_at).toLocaleString()}
        </p>
        <h5 className="mt-4">
          Applications ({recruitment.job_applications?.length || 0})
        </h5>

        {recruitment.job_applications?.length > 0 ? (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Applied At</th>
              </tr>
            </thead>

            <tbody>
              {recruitment.job_applications.map((app, index) => (
                <tr key={app.id}>
                  <td>{index + 1}</td>
                  <td>{app.applicant_name}</td>
                  <td>{app.applicant_email}</td>
                  <td>{app.applicant_phone}</td>
                  <td>{app.status}</td>
                  <td>
                    {app.applied_at
                      ? new Date(app.applied_at).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-center">No applications yet.</p>
        )}

        <Button
          variant="primary"
          className="w-100 mt-3"
          onClick={() => navigate("/recruitments")}
        >
          Back to List
        </Button>
      </Card>
    </Container>
  );
};

export default RecruitmentView;
