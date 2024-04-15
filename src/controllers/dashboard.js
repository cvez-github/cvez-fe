import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";
import { notifications } from "@mantine/notifications";
import appStrings from "../utils/strings";

export async function getYourProjectsControl() {
  const params = {
    get_type: "owned",
  };
  const response = await apiHelper.get(apiUrls.project, params);
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
    });
    return [];
  }
}

export async function getSharedProjectsControl() {
  const params = {
    get_type: "shared",
  };
  const response = await apiHelper.get(apiUrls.project, params);
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
    });
    return [];
  }
}

export async function getTrashProjectsControl() {
  const params = {
    get_type: "deleted",
  };
  const response = await apiHelper.get(apiUrls.project, params);
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
    });
    return [];
  }
}
