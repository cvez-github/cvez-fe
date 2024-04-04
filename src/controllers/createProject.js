import apiHelper from "../utils/apiHelper"
import { apiUrls } from "../utils/constants"


export async function createProjectControl(name, alias, description) {
    const data = {
        name,
        alias,
        description
    }
    const response = await apiHelper.post(apiUrls.project, data)
    console.log(response.msg)
    if (response?.data) {
        return response.data
    } else {
        throw new Error(response.detail)
    }
}