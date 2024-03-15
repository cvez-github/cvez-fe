import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function getQuestions() {
  const response = await apiHelper.get(apiUrls.questions);
  console.info(response.msg);
  return response.data;
}

export async function uploadQuestion(title, content, answer) {
  const response = await apiHelper.post(apiUrls.uploadQuestion, {
    title,
    content,
    answer,
  });
  console.info(response.msg);
  return response.data;
}

export async function deleteQuestion(id) {
  const response = await apiHelper.delete(apiUrls.deleteQuestion(id));
  console.info(response.msg);
  return response.data;
}
