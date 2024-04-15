import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";
import { notifications } from "@mantine/notifications";

export async function getMatchControl(projectId, positionId) {
  const response = await apiHelper.get(
    apiUrls.matchCVJD + projectId + "/" + positionId
  );
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    notifications.show({
      title: "Error",
      color: "red",
      message: response?.detail,
    });
    return null;
  }
}
