import React, { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const DesignationList = () => {
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDesignations();
  }, []);

  const fetchDesignations = async () => {
    try {
      const response = await api.get("/designations");
      setDesignations(response.data);
    } catch (error) {
      console.error("Error fetching designations:", error);
      toast.error("Failed to load designations!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/designations/${id}/edit`);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this designation?")) {
      try {
        await api.delete(`/designations/${id}`);
        toast.success("Designation deleted successfully!");
        fetchDesignations(); // refresh list
      } catch (error) {
        console.error("Delete failed:", error);
        toast.error("Failed to delete designation!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Designation List</h3>
        <Button variant="primary" onClick={() => navigate("/designations/create")}>
          + Add New
        </Button>
      </Card.Header>
      <Card.Body>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {designations.length > 0 ? (
                designations.map((des) => (
                  <tr key={des.id}>
                    <td>{des.id}</td>
                    <td>{des.title}</td>
                    <td>{new Date(des.created_at).toLocaleString()}</td>
                    <td>{new Date(des.updated_at).toLocaleString()}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(des.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(des.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No designations found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default DesignationList;
