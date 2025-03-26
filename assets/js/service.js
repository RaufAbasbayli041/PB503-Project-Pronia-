import { base_url } from "./constant.js";
import { endpoint } from "./constant.js";

const getAllDatas = async (endpoint) => {
  try {
    const response = await axios(`${base_url}/${endpoint}`);
 
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getDataById = async (endpoint, id) => {
  try {
    const response = await axios(`${base_url}/${endpoint}/${id}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const createData = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${base_url}/${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteDataById = async (endpoint,id) => {
    try {
        const response = await axios.delete(`${base_url}/${endpoint}/${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
   
}

const editDataById = async (endpoint,id, payload) => {
    try {
      const response = await axios.post(`${base_url}/${endpoint}/${id}`, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export {getAllDatas,getDataById,editDataById,createData,deleteDataById}
  