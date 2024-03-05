// customerServices.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:4333/order",
});

export async function fetchCustomerData() {
  try {
    const response = await instance.get("/");
    return response.data;
  } catch (error) {
    console.log("Error fetching customer data:", error);
  }
}

export async function saveCustomerData(url, customerData) {
  try {
    console.log('customerData', customerData);
    const response = await instance.post("/order", customerData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error saving customer data:", error.message);
    return { message: "Error saving customer data" };
  }
}


