import React, { useEffect, useState } from "react";
import api from "../../axios";
import { useNavigate, useParams } from "react-router-dom";

const LeaveEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [leave, setLeave] = useState(null);

  useEffect(() => {
    fetchLeave();
  }, []);

  const fetchLeave = async () => {
    const res = await api.get(`/leaves/${id}`);
    setLeave(res.data);
  };

  const updateStatus = async (status) => {
    await api.put(`/leaves/${id}`, { status });
    navigate("/leaves");
  };

  if (!leave) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Review Leave Request</h2>

      <div className="card p-4 shadow-sm mt-3">
        <p><strong>Employee:</strong> {leave.user?.name}</p>
        <p><strong>Date From:</strong> {leave.date_from}</p>
        <p><strong>Date To:</strong> {leave.date_to}</p>
        <p><strong>Reason:</strong> {leave.reason}</p>

        <div className="mt-3">
          <button
            className="btn btn-success me-2"
            onClick={() => updateStatus("approved")}
          >
            Approve
          </button>

          <button
            className="btn btn-danger"
            onClick={() => updateStatus("rejected")}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveEdit;
