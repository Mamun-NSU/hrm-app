import React, { useEffect, useState } from "react";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const SalaryStructureEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ basic_salary: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const res = await api.get(`/salary-structures/${id}`);
        setForm({ basic_salary: res.data.data.basic_salary });
      } catch (err) {
        console.error(err);
        toast.error("Failed to load salary structure!");
      } finally {
        setLoading(false);
      }
    };
    fetchStructure();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/salary-structures/${id}`, form);
      toast.success("Salary structure updated successfully!");
      navigate("/salary-structures");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update salary structure!");
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header><h3>Edit Salary Structure</h3></Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Basic Salary</Form.Label>
            <Form.Control
              type="number"
              value={form.basic_salary}
              onChange={(e) => setForm({ ...form, basic_salary: e.target.value })}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">Update</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SalaryStructureEdit;
