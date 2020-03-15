import axios from "axios";

window.axios = axios;

const BASE_URL = "http://dummy.restapiexample.com/api/v1";

const AxiosApi = {
  getAll: async function() {
    const response = await axios.get(`${BASE_URL}/employees`);
    const all = response.data;
    return all.data;
  },
  getSingle: async function(id) {
    const response = await axios.get(`${BASE_URL}/employee/${id}`);

    const single = response.data;
    //endpoint bug
    console.log(single);
    return single.data;
  },
  addSingle: async function(item) {
    const response = await axios.post(`${BASE_URL}/create`, item);
    const addedItem = response.data;
    return addedItem;
  },
  replaceSingle: async function(indexToUpdate, itemToUpdate) {
    if (!indexToUpdate) {
      throw new Error("Item has to have an id to be updated");
    }
    const response = await axios.put(
      `${BASE_URL}/update/${indexToUpdate + 1}`,
      { ...itemToUpdate, id: indexToUpdate }
    );
    const replacedItem = response.data;
    return replacedItem;
  },
  removeSingle: async function(itemToRemove) {
    if (!itemToRemove.id) {
      throw new Error("Timebox has to have an id to be updated");
    }
    await axios.delete(`${BASE_URL}/delete/${itemToRemove.id}`);
  }
};

export default AxiosApi;
