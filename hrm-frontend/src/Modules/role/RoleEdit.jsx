import { useEffect, useState } from "react";
import { Card, Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import RoleService from "../services/RoleService";

const RoleEdit = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await RoleService.get(id);
        setForm({ name: response.data.data.role.name, description: response.data.data.role.description });
      } catch (error) {
        toast.error("Failed to load role data!");
      } finally {
        setLoading(false);
      }
    };
    fetchRole();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RoleService.update(id, form);
      toast.success("Role updated successfully!");
      navigate("/roles");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update role!");
    }
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Edit Role</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Role Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" className="w-100" variant="primary">Update Role</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RoleEdit;
