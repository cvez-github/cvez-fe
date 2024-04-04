import apiHelper from "../utils/apiHelper"
import { apiUrls } from "../utils/constants"


export async function getYourProjectsControl() {
    const params = {
        get_type: "owned"
    }
    const response = await apiHelper.get(apiUrls.project, params)
    console.log(response.msg)
    if (response?.data) {
        return response.data
    } else {
        return []
    }
}


export async function getSharedProjectsControl() {
    const params = {
        get_type: "shared"
    }
    const response = await apiHelper.get(apiUrls.project, params)
    console.log(response.msg)
    if (response?.data) {
        return response.data
    } else {
        return []
    }
}


export async function getTrashProjectsControl() {
    const params = {
        get_type: "deleted"
    }
    const response = await apiHelper.get(apiUrls.project, params)
    console.log(response.msg)
    if (response?.data) {
        return response.data
    } else {
        return []
    }
}