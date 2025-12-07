import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import AttendanceService from "../../services/AttendanceService";

const AttendanceEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [attendance, setAttendance] = useState({
    employee_id: "",
    date: "",
    check_in_time: "",
    check_out_time: "",
    status: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendance();
  }, [id]);

  const fetchAttendance = async () => {
    try {
      const res = await AttendanceService.getById(id);
      setAttendance(res.data.data.attendance);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load attendance record!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setAttendance({ ...attendance, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await AttendanceService.update(id, attendance);
      toast.success("Attendance updated successfully!");
      navigate("/attendance");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update attendance!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Edit Attendance</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              name="employee_id"
              value={attendance.employee_id}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={attendance.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Check In Time</Form.Label>
            <Form.Control
              type="time"
              name="check_in_time"
              value={attendance.check_in_time || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Check Out Time</Form.Label>
            <Form.Control
              type="time"
              name="check_out_time"
              value={attendance.check_out_time || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={attendance.status}
              onChange={handleChange}
              required
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
              <option value="Leave">Leave</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Update"}
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            onClick={() => navigate("/attendance")}
          >
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AttendanceEdit;
