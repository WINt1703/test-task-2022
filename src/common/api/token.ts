import TokenResponse from "../types/TokenResponse";
import {setCookies, removeCookies, getCookie} from "cookies-next";
import axios from "axios";

export async function refreshToken(): Promise<TokenResponse> {
    const response: TokenResponse = await axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
                                               .then(res => res.data)
    setCookies("token", response.token, {
        maxAge: 60 * 40,
    })
    return response
}

export function clearToken(): void {
    removeCookies("token");
}

export async function getTokenFromCookie(): Promise<string> {
    const token = getCookie("token")

    if (token)
        return Promise.resolve(token.toString())

    return await refreshToken().then(res => res.token)
}
