import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./leave.api";

const LeaveView = () => {
  const { id } = useParams();
  const [leave, setLeave] = useState(null);

  useEffect(() => {
    api.get(`/leave-request/${id}/show`).then((res) => setLeave(res.data.data.leave_request));
  }, []);

  if (!leave) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Leave Request Details</h2>
      <div className="card p-4 shadow-sm mt-3">
        <p><strong>Employee:</strong> {leave.user?.name}</p>
        <p><strong>From:</strong> {leave.date_from}</p>
        <p><strong>To:</strong> {leave.date_to}</p>
        <p><strong>Reason:</strong> {leave.reason}</p>
        <p><strong>Status:</strong> {leave.status}</p>
      </div>
    </div>
  );
};

export default LeaveView;
