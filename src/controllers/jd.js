import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";
import { notifications } from "@mantine/notifications";

export async function getJDControl(projectId, positionId) {
  const response = await apiHelper.get(
    apiUrls.jd + projectId + "/" + positionId
  );
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
      message: response?.detail,
    });
    return null;
  }
}

export async function uploadJDControl(projectId, positionId, content) {
  const data = {
    content: content,
  };
  const response = await apiHelper.put(
    apiUrls.jd + projectId + "/" + positionId,
    data
  );
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
      message: response?.detail,
    });
    return null;
  }
}
