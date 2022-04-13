import axios, {AxiosError} from "axios";
import {clearToken, getTokenFromCookie, refreshToken} from "./token";

const axiosApiInstance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
    timeout: 5000,
});

axiosApiInstance.interceptors.request.use(
     async config => {
        const token = await getTokenFromCookie()
        config.headers = {
            "Token": token,
        }
        return config;
    },
    (error: AxiosError) => {

        clearToken()
        Promise.reject(error)
});

axiosApiInstance.interceptors.response.use((response) => {
    return response
}, async function (error: AxiosError) {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
        const {token} = await refreshToken();
        axios.defaults.headers.common["Token"] = token;
        return axiosApiInstance(originalRequest);
    }
    clearToken()
    return Promise.reject(error);
});

export default axiosApiInstance;