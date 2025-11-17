// src/services/PerformanceEvaluationService.js
import api from "../axios"; // assuming your Axios instance is in src/axios

const BASE_URL = "/performance-evaluations";

const PerformanceEvaluationService = {
  getAll: () => api.get(BASE_URL),
  get: (id) => api.get(`${BASE_URL}/${id}`),
  create: (data) => api.post(BASE_URL, data),
  update: (id, data) => api.put(`${BASE_URL}/${id}`, data),
  remove: (id) => api.delete(`${BASE_URL}/${id}`),
};

export default PerformanceEvaluationService;
