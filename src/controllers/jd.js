import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function getJD(project_id, position_id) {
  const response = await apiHelper.get(
    apiUrls.jd + project_id + "/" + position_id
  );
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    throw new Error(response.detail);
  }
}

export async function uploadJD(project_id, position_id, content) {
  const data = {
    content: content,
  };
  const response = await apiHelper.put(
    apiUrls.jd + project_id + "/" + position_id,
    data
  );
  console.log(response.msg);
  return response.data;
}
