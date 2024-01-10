// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/fetch-cert';

export const fetchCert = async (
    sorting,
    globalFilter,
    columnFilters,
    pagination,
    setData,
    setRowCount,
    setIsError
  ) => {
  try {
    const response = await axios.get(API_URL);
    console.log("Data response:", response);
    setData(response.data);
    setRowCount(response.data.length);

  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // You can handle the error in the component that calls this function
  }
};
