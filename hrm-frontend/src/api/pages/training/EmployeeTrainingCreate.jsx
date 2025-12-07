import { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeTrainingService from "../../services/EmployeeTrainingService";
import TrainingService from "../../services/TrainingService";
import EmployeeService from "../../services/EmployeeService"; 

const EmployeeTrainingCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({ employee_id: "", training_id: "", status: "pending" });
  const [trainings, setTrainings] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchOptions();
    if (id) fetchEmployeeTraining(id);
  }, [id]);

  const fetchOptions = async () => {
    try {
      const [trainRes, empRes] = await Promise.all([TrainingService.getAll(), EmployeeService.getAll()]);
      setTrainings(trainRes.data.data.trainings); setEmployees(empRes.data.data.employees);
    } catch { toast.error("Failed to load options"); }
  };

  const fetchEmployeeTraining = async (id) => {
    try { const res = await EmployeeTrainingService.get(id); setData(res.data.data.employee); }
    catch { toast.error("Failed to load record"); }
  };

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (id) await EmployeeTrainingService.update(id, data);
      else await EmployeeTrainingService.create(data);
      toast.success("Saved successfully!"); navigate("/employee-trainings");
    } catch { toast.error("Failed to save"); }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>{id ? "Edit Employee Training" : "Add Employee Training"}</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Employee</Form.Label>
            <Form.Select name="employee_id" value={data.employee_id} onChange={handleChange} required>
              <option value="">Select Employee</option>
              {employees.map(employee => <option key={employee.id} value={employee.id}>{employee.user?.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Training</Form.Label>
            <Form.Select name="training_id" value={data.training_id} onChange={handleChange} required>
              <option value="">Select Training</option>
              {trainings.map(training => <option key={training.id} value={training.id}>{training.title}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" value={data.status} onChange={handleChange}>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="in_progress">In Progress</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">{id ? "Update" : "Create"}</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmployeeTrainingCreate;
