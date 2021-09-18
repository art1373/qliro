import axios from "../config";

export const fetchOrdersApi = async () => {
  return await axios.get("/orders");
};
