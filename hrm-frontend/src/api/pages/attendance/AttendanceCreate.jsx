import React, { useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import AttendanceService from "../../services/AttendanceService";


const AttendanceCreate = ({ employeeId }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckIn = async () => {
    setLoading(true);
    try {
      await AttendanceService.checkIn(employeeId);
      alert("Checked in successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to check in");
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
        <Button onClick={handleCheckIn} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Check In"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AttendanceCreate;
