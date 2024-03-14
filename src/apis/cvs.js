import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function getCVs() {
  const response = await apiHelper.get(apiUrls.cvs);
  console.info(response.msg);
  return response.data;
}

export async function getCVById(id) {
  const response = await apiHelper.get(apiUrls.cv(id));
  console.info(response.msg);
  return response.data;
}

export async function uploadCV(file) {
  const formData = new FormData();
  formData.append("data", file);
  const response = await apiHelper.postFormData(apiUrls.uploadCV, formData);
  console.info(response.msg);
  return response.data;
}

export async function deleteCV(id) {
  const response = await apiHelper.delete(apiUrls.deleteCV(id));
  console.info(response.msg);
  return response.data;
}
