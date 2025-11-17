// src/services/PerformanceKPIService.js

import api from "../axios";

const ENDPOINT = "/performance-kpis";

const PerformanceKPIService = {
  getAll: () => api.get(ENDPOINT),
  get: (id) => api.get(`${ENDPOINT}/${id}`),
  create: (data) => api.post(ENDPOINT, data),
  update: (id, data) => api.put(`${ENDPOINT}/${id}`, data),
  remove: (id) => api.delete(`${ENDPOINT}/${id}`),
};

export default PerformanceKPIService;
