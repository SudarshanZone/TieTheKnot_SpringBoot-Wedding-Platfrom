// // api.js
// import axios from 'axios';

// const vendorsUrl = 'http://localhost:8080';

// export const getVendor = async (id) => {
//   id = id || '';
//   try {
//     return await axios.get(`${vendorsUrl}/vendors/${id}`);
//   } catch (error) {
//     console.log('Error while calling getUsers api ', error);
//   }
// }

// export const addVendor = async (vendor) => {
//   return await axios.post(`${vendorsUrl}/vendor`, vendor);
// }

// export const deleteVendor = async (id) => {
//   return await axios.delete(`${vendorsUrl}/vendor/${id}`);
// }

// export const editVendor = async (id, vendor) => {
//   return await axios.put(`${vendorsUrl}/vendor`, vendor)
// }
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getVendor = async (id) => {
  return await axios.get(`${BASE_URL}/vendors/${id}`);
};

export const addVendor = async (data) => {
  return await axios.post(`${BASE_URL}/vendors`, data);
};

export const editVendor = async (id, data) => {
  return await axios.put(`${BASE_URL}/vendors/${id}`, data);
};

export const deleteVendor = async (id) => {
  return await axios.delete(`${BASE_URL}/vendors/${id}`);
};

export const getAllVendors = async () => {
  return await axios.get(`${BASE_URL}/vendors`);
};