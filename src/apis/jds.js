import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function getJDs() {
  const response = await apiHelper.get(apiUrls.jds);
  console.info(response.msg);
  return response.data;
}

export async function uploadJD(title, content) {
  const response = await apiHelper.post(apiUrls.uploadJD, { title, content });
  console.info(response.msg);
  return response.data;
}

export async function deleteJD(id) {
  const response = await apiHelper.delete(apiUrls.deleteJD(id));
  console.info(response.msg);
  return response.data;
}
