import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { formatTime } from '../../Components/formatTime';
import AttendanceService from '../services/AttendanceService';

const AttendanceList = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const res = await AttendanceService.getAll();
      setRecords(res.data.data.attendances);
    } catch (error) {
      console.error("Error fetching attendance records:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Attendance Records</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Code</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            {isAdmin && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.employee?.employee_code || "—"}</td>
              <td>{record.date}</td>
               <td>{formatTime(record.check_in_time)}</td>
              <td>{formatTime(record.check_out_time)}</td>
              <td>{record.status}</td>
              {isAdmin && (
                <td>
                  <Button
                    onClick={() => navigate(`/attendance/${record.id}/edit`)}
                    size="sm"
                    variant="warning"
                  >
                    Edit
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AttendanceList;
