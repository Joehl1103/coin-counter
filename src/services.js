import axios from "axios";

const baseUrl = "http://localhost:3000/entries";

const getEntries = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addEntry = async (entry) => {
  console.log("adding entry", entry);
  await axios.post(baseUrl, entry);
};

const getEntryById = async (id) => {
  const response = await axios.get(baseUrl);
  return response.data.filter((e) => e.id === id);
};

const deleteEntry = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
};

export default {
  getEntries,
  getEntryById,
  addEntry,
  deleteEntry,
};
