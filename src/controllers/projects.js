import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";
import appStrings from "../utils/strings";
import { notifications } from "@mantine/notifications";

export async function getProjectByIdControl(id) {
  const response = await apiHelper.get(apiUrls.project + id);
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
      message: response.detail,
    });
    return null;
  }
}

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
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
      message: response.detail,
    });
    return null;
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
