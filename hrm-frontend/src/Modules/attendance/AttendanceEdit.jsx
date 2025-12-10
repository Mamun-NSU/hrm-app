import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AttendanceService from '../services/AttendanceService';

const AttendanceEdit = ({ isAdmin }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [attendance, setAttendance] = useState({
    check_in_time: "",
    check_out_time: "",
    date: "",
    employee_id: "",
    status: "",
  });

  const [loading, setLoading] = useState(true);

  const fetchAttendance = async () => {
    try {
      const res = await AttendanceService.get(id);

      setAttendance(res.data.data.attendance);
    } catch (err) {
      toast.error("Failed to load attendance record!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [id]);

  const handleStatusChange = (e) => {
    setAttendance({ ...attendance, status: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      toast.error("Unauthorized!");
      return;
    }

    setLoading(true);

    try {
      await AttendanceService.update(id, {
        status: attendance.status,
      });

      toast.success("Attendance status updated successfully!");

      navigate("/attendance/list");
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
    <Card className="mt-4 shadow-sm p-4">
      <h3>Edit Attendance</h3>

      <Form onSubmit={handleUpdate}>

        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            disabled
            type="text"
            value={attendance.employee_id}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            disabled
            type="date"
            value={attendance.date}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Check In Time</Form.Label>
          <Form.Control
            disabled
            type="time"
            value={attendance.check_in_time || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Check Out Time</Form.Label>
          <Form.Control
            disabled
            type="time"
            value={attendance.check_out_time || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            onChange={handleStatusChange}
            required
            value={attendance.status}
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
            <option value="Leave">Leave</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Update Status"}
        </Button>

        <Button
          variant="secondary"
          className="ms-2"
          onClick={() => navigate("/attendance/list")}
        >
          Cancel
        </Button>
      </Form>
    </Card>
  );
};

export default AttendanceEdit;
