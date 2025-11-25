import { useEffect, useState } from "react";
import { Container, Table, Form, Button, Row, Col, Card } from "react-bootstrap";
import api from "../../axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role_id: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await api.get('user/list');
      setUsers(res.data.data.users);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/user/${editingId}/update`, form);
        setEditingId(null);
      } else {
        await api.post('/user/store', { ...form, password: "default123" });
      }
      setForm({ name: "", email: "", role_id: "" });
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role_id: user.role_id || "" });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await api.delete(`/user/${id}/delete`);
      fetchUsers();
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h2 className="text-center mb-4">Users Management</h2>

        <Form onSubmit={handleSubmit} className="mb-4">
          <Row className="g-2">
            <Col md={3}>
              <Form.Control
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={3}>
              <Form.Control
                name="role_id"
                placeholder="Role ID"
                value={form.role_id}
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Button type="submit" variant={editingId ? "warning" : "primary"} className="w-100">
                {editingId ? "Update User" : "Add User"}
              </Button>
            </Col>
          </Row>
        </Form>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role_id || "-"}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(u)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(u.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
