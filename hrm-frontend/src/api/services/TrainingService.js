import api from "../axios";

const BASE_URL = "/trainings";

const TrainingService = {
  getAll: () => api.get(BASE_URL),
  get: (id) => api.get(`${BASE_URL}/${id}`),
  create: (data) => api.post(BASE_URL, data),
  update: (id, data) => api.put(`${BASE_URL}/${id}`, data),
  remove: (id) => api.delete(`${BASE_URL}/${id}`),
};

export default TrainingService;
