import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"

export const registerAPI = async(student)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,student,"")
}

export const getallStudentsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-students`,"","")
}