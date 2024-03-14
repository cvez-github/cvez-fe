import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function matchingCV(jdId) {
  const response = await apiHelper.post(apiUrls.matchCV, { jd_id: jdId });
  console.info(response.msg);
  return response.data;
}

export async function matchingQuestion(cvId) {
  const response = await apiHelper.post(apiUrls.matchQuestion, { cv_id: cvId });
  console.info(response.msg);
  return response.data;
}
