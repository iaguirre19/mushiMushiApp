import axios from 'axios';

const BaseURL = 'http://192.168.1.83:3001';

const axiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  },
);

export const pingServer = async () => {
  try {
    const response = await axiosInstance.get('/ping');
    return response;
  } catch (error) {
    console.error('Error en pingServer:', error);
    throw error;
  }
};

export const getHomeData = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response;
  } catch (error) {
    console.error('Error en getHomeData:', error);
    throw error;
  }
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/authenticate', {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error('Error en authenticateUser:', error);
    throw error;
  }
};

export const authorizeUser = async (token: string) => {
  try {
    const response = await axiosInstance.get('/authorize', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error en authorizeUser:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/users');
    return response;
  } catch (error) {
    console.error('Error en getUsers:', error);
    throw error;
  }
};

export const createUser = async (userData: any) => {
  try {
    const response = await axiosInstance.post('/users', userData);
    return response;
  } catch (error) {
    console.error('Error en createUser:', error);
    throw error;
  }
};

export const updateUser = async (userData: any) => {
  try {
    const response = await axiosInstance.put('/users', userData);
    return response;
  } catch (error) {
    console.error('Error en updateUser:', error);
    throw error;
  }
};

export const verifyOtp = async (otp: string) => {
  try {
    const response = await axiosInstance.get('/otp');
    if (Array.isArray(response)) {
      const validOtp = response.find((item: {otp: string}) => item.otp === otp);
      if (validOtp) {
        return {success: true, message: 'OTP válido'};
      } else {
        return {success: false, message: 'OTP inválido'};
      }
    } else {
      throw new Error('Formato de respuesta inesperado');
    }
  } catch (error) {
    console.error('Error en verifyOtp:', error);
    throw error;
  }
};
