import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const apiHelper = {
  addToken: (token) => {
    api.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  },

  get: async (url, params = {}) => {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error) {
      return { error };
    }
  },

  post: async (url, data = {}, config = {}) => {
    try {
      const response = await api.post(url, data, {
        ...config,
        headers: { "Content-Type": "application/json", ...config.headers },
      });
      return response.data;
    } catch (error) {
      return { error };
    }
  },

  postFormData: async (url, formData, config = {}) => {
    try {
      const response = await api.post(url, formData, {
        ...config,
        headers: { "Content-Type": "multipart/form-data", ...config.headers },
      });
      return response.data;
    } catch (error) {
      return { error };
    }
  },

  put: async (url, data = {}, config = {}) => {
    try {
      const response = await api.put(url, data, {
        ...config,
        headers: { "Content-Type": "application/json", ...config.headers },
      });
      return response.data;
    } catch (error) {
      return { error };
    }
  },

  delete: async (url, config = {}) => {
    try {
      const response = await api.delete(url, { ...config });
      return response.data;
    } catch (error) {
      return { error };
    }
  },
};

export default apiHelper;
