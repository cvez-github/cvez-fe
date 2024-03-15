import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function generateCV(cvId, jdId) {
  const response = await apiHelper.post(apiUrls.generateCV, {
    cv_id: cvId,
    jd_id: jdId,
  });
  console.info(response.msg);
  return response.data;
}
