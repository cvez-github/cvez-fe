import apiHelper from "../utils/apiHelper";
import { apiUrls } from "../utils/constants";

export async function getPositionsControl(project_id) {
  const response = await apiHelper.get(apiUrls.position + project_id);
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    throw new Error(response.detail);
  }
}

export async function createPositionControl(
  project_id,
  name,
  alias,
  description,
  startDate,
  endDate,
  criteria
) {
  const data = {
    name,
    alias,
    description,
    start_date: startDate,
    end_date: endDate,
    criterias: criteria,
  };
  const response = await apiHelper.post(apiUrls.position + project_id, data);
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    throw new Error(response.detail);
  }
}

export async function getPositionControl(project_id, position_id) {
  const response = await apiHelper.get(
    apiUrls.position + project_id + "/" + position_id
  );
  console.log(response.msg);
  if (response?.data) {
    return response.data;
  } else {
    throw new Error(response.detail);
  }
}
