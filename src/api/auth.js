import api from './config';

export const registerRequest = user => api.post('auth/register', user);
export const loginRequest = user => api.post('auth/login', user);
export const verifyTokenRequest = token => api.post('auth/verify', token);
export const forgtPassword = email => api.post('auth/recovery', email);
export const changePasswordRequest = (data) => api.post(`auth/change-password`, data);

