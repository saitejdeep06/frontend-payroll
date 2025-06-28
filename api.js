import axios from "axios";

const API_BASE = "https://your-api-domain.com/employee";

// Login user, expects { username, password }
export const login = (credentials) =>
  axios.post(`${API_BASE}/login`, credentials);

// Get all employees, pass token as argument
export const getEmployees = (token) =>
  axios.get(API_BASE, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Get employee profile by ID
export const getEmployeeProfile = (id, token) =>
  axios.get(`${API_BASE}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });