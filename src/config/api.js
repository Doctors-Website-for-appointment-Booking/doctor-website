export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  "https://doctor-website-backend-production.up.railway.app";

export const API_ENDPOINTS = {
  APPOINTMENTS: "/api/appointments",
  CONTACTS: "/api/contacts"
};

export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
