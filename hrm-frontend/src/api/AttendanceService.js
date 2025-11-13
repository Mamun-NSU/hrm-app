// src/api/services/AttendanceService.js

import api from "./axios";


const AttendanceService = {
  // ✅ Get all attendance records
  getAll: () => {
    return api.get("/attendance");
  },

  // ✅ Create (Check-In)
  create: (data) => {
    return api.post("/attendance", data);
  },

  // ✅ Get single record
  get: (id) => {
    return api.get(`/attendance/${id}`);
  },

  // ✅ Update (Check-Out or Edit)
  update: (id, data) => {
    return api.put(`/attendance/${id}`, data);
  },

  // ✅ Delete (optional)
  remove: (id) => {
    return api.delete(`/attendance/${id}`);
  },
};

export default AttendanceService;

