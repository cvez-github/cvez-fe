import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";
import { notifications } from "@mantine/notifications";

export async function getCVsControl(projectId, positionId) {
  const response = await apiHelper.get(
    apiUrls.cv + projectId + "/" + positionId
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
    return [];
  }
}

export async function getCVDetailControl(projectId, positionId, cvId) {
  const response = await apiHelper.get(
    apiUrls.cv + projectId + "/" + positionId + "/" + cvId
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

export async function uploadCVDataControl(projectId, positionId, files) {
  // Create a FormData object
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("cvs", file);
  });
  // Send the request
  const response = await apiHelper.postFormData(
    apiUrls.cv + projectId + "/" + positionId + "/uploads",
    formData
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

export async function watchUploadProgressControl(progressId) {
  const response = await apiHelper.get(apiUrls.cv + progressId);
  console.log(response.msg);
}

export async function downloadCVDataControl(projectId, positionId, cvId) {
  const response = await apiHelper.get(
    apiUrls.cv + projectId + "/" + positionId + "/" + cvId + "/download"
  );
  return response;
}
