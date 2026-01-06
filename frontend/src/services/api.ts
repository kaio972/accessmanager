import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend:3001'
});

export const addUsuario = async (user: any) => {
  const res = await api.post('/auth/register', user);
  return res.data;
};

export const loginUsuario = async (email: string, password: string) => {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};

export default api;
