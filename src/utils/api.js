import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error' };
  }
};

// Check coverage
export const checkCoverage = async (address) => {
  try {
    const response = await api.post('/coverage/check', { address });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Unable to check coverage' };
  }
};