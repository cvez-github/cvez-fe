import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function createProjectControl(name, alias, description) {
  const data = {
    name,
    alias,
    description,
  };
  const response = await apiHelper.post(apiUrls.project, data);
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    throw new Error(response.detail);
  }
}

export async function deleteProjectControl(id) {
  const response = await apiHelper.delete(apiUrls.project + id);
  console.log(response.msg);
}

export async function restoreProjectControl(id) {
  const response = await apiHelper.put(apiUrls.restoreProject + id);
  console.log(response.msg);
}
