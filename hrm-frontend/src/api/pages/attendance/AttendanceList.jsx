import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AttendanceService from "../../services/AttendanceService";

const AttendanceList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await AttendanceService.getAll();
      setRecords(res.data.data.attendances);
    } catch (error) {
      console.error("Error fetching attendance records:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Attendance Records</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.employee_id}</td>
              <td>{record.date}</td>
              <td>{record.check_in_time}</td>
              <td>{record.check_out_time || "—"}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AttendanceList;
