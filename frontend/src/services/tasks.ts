import axios from "axios";

// tasks service

const api_base_url = process.env.REACT_APP_API_URL;
const api_url = api_base_url + '/tasks/api/v1/tasks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createApiTask = async (request: any) => await axios.post(api_url + "/", request);
export const getApiTasks = async () => await axios.get(api_url + "/");
export const getApiTask = async (id: string) => await axios.get(api_url + `/${id}/`);
export const deleteApiTask = async (id: string) => await axios.delete(api_url + `/${id}/`);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateApiTask = async (id: string, request: any) => await axios.put(api_url + `/${id}/`, request);
