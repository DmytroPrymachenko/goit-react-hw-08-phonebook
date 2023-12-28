import axios from 'axios';

export const api = axios.create({ baseURL: 'https://connections-api.herokuapp.com' });

export function setTokin(token) {
  api.defaults.headers.common.Authorization = token;
}

export async function signUp(body) {
  try {
    const { data } = await api.post('/users/signup', body);
    setToken(data.token);
    console.log(data);
    console.log(data.token);
    return data;
  } catch (error) {
    console.error('Sign-up error:', error);
    console.error('Response data:', error.response?.data);
    console.error('Response status:', error.response?.status);
    throw error;
  }
}

export async function signIn(body) {
  try {
    const { data } = await api.post('/users/login', body);
    setToken(data.token);
    console.log(data);
    console.log(data.token);
    return data;
  } catch (error) {
    console.error('Sign-in error:', error);
    console.error('Response data:', error.response?.data);
    console.error('Response status:', error.response?.status);
    throw error;
  }
}

export function setToken(token) {
  api.defaults.headers.common['Authorization'] = token;
}

export async function logout() {
  try {
    const { data } = await api.post('/users/logout');
    return data;
  } catch (error) {
    console.error('Logout error:', error);
    console.error('Response data:', error.response?.data);
    console.error('Response status:', error.response?.status);
    throw error;
  }
}

export async function refresh() {
  try {
    const { data } = await api.get('/users/current');
    return data;
  } catch (error) {
    console.error('Refresh error:', error);
    console.error('Response data:', error.response?.data);
    console.error('Response status:', error.response?.status);
    throw error;
  }
}
