import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";
import { getCookie, setCookie, removeCookie } from "../utils/cookie";
import { notifications } from "@mantine/notifications";
import appStrings from "../utils/strings";

export async function loginControl(accessToken) {
  const response = await apiHelper.post(apiUrls.login, {
    gtoken: accessToken,
  });
  console.log(response.msg);
  // Set cookies
  setCookie("token", response?.data.token);
}

export async function logoutControl() {
  // Remove token from cookie storage
  removeCookie("token");
  // Logout from server
  await apiHelper.post(apiUrls.logout);
}

export async function getCurrentUserControl({ onFail, onSuccess }) {
  // Get token from cookie storage
  const token = getCookie("token");
  console.log(token);
  if (!token) {
    onFail("No token found");
  }
  // Append token to apiHelper
  apiHelper.addToken(token);
  // Get current user
  try {
    const response = await apiHelper.get(apiUrls.me);
    console.log(response.msg);
    if (response?.data) {
      onSuccess(response.data);
    }
  } catch (error) {
    notifications.show({
      title: appStrings.language.utils.error,
      color: "red",
      message: error?.message,
    });
    onFail(error);
  }
}
