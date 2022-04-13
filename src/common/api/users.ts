import axiosApiInstance from "./instance";
import GetUserResponse from "../types/users/GetUserResponse";

export async function getUsers(page?: number): Promise<GetUserResponse> {
    return axiosApiInstance.get("/users", {
        params: {
            page: page,
            count: 6,
        }
    }).then(res => res.data)
}