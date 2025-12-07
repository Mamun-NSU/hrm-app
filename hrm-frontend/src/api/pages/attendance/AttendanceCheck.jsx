import { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import AttendanceService from "../../services/AttendanceService";

const AttendanceCheck = ({ employeeId }) => {
  const [todayRecord, setTodayRecord] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodayRecord();
  }, []);

  const fetchTodayRecord = async () => {
    try {
      const res = await AttendanceService.getByEmployee(employeeId);
      const today = new Date().toISOString().slice(0, 10);
      const record = res.data.data.attendance.find(r => r.date === today);
      setTodayRecord(record || null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckIn = async () => {
    setLoading(true);
    try {
      await AttendanceService.checkIn(employeeId);
      alert("Checked in successfully!");
      fetchTodayRecord();
    } catch (err) {
      console.error(err);
      alert("Failed to check in");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckOut = async () => {
    setLoading(true);
    try {
      await AttendanceService.checkOut(todayRecord.id);
      alert("Checked out successfully!");
      fetchTodayRecord();
    } catch (err) {
      console.error(err);
      alert("Failed to check out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Attendance</h3>
      </Card.Header>
      <Card.Body>
        {!todayRecord ? (
          <Button onClick={handleCheckIn} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Check In"}
          </Button>
        ) : !todayRecord.check_out_time ? (
          <Button onClick={handleCheckOut} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Check Out"}
          </Button>
        ) : (
          <p>You have checked out today at {todayRecord.check_out_time}</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default AttendanceCheck;
