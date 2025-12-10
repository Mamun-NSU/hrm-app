import api from "../axios";

const ENDPOINT = "/performance-kpi";

const PerformanceKPIService = {
  getAll: () => api.get(`${ENDPOINT}/list`),
  get: (id) => api.get(`${ENDPOINT}/${id}/show`),
  create: (data) => api.post(`${ENDPOINT}/store`, data),
  update: (id, data) => api.put(`${ENDPOINT}/${id}/update`, data),
  remove: (id) => api.delete(`${ENDPOINT}/${id}/delete`),
};

export default PerformanceKPIService;
