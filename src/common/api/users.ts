import axiosApiInstance from "./instance";
import UsersResponse from "../types/users/UsersResponse";
import UserRequest from "../types/users/UserRequest";
import {base64toBlob} from "../utils/base64-converter";
import UserError from "../types/users/UserError";
import {AxiosError, AxiosResponse} from "axios";
import UserResponse from "../types/users/UserResponse";

export async function getUsers(page?: number): Promise<UsersResponse> {
    return axiosApiInstance.get("/users", {
        params: {
            page: page,
            count: 6,
        }
    }).then(res => res.data)
}

export async function signUp(req: UserRequest): Promise<UserError | UserResponse>  {
    const formData = new FormData()
    formData.append("name", req.name)
    formData.append("email", req.email)
    formData.append("position_id", req.position_id)
    formData.append("phone", req.phone)
    formData.append("photo", base64toBlob(req.photo.content), req.photo.name)

    return await axiosApiInstance.post("users", formData)
        .then((res: AxiosResponse<UserResponse>) => res.data)
        .catch((error: AxiosError<UserError>) => error.response!.data)
}