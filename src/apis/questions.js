import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function getQuestions() {
  const response = await apiHelper.get(apiUrls.questions);
  console.info(response.msg);
  return response.data;
}
