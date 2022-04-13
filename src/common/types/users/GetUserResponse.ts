import Links from "./Links";
import User from "./User";

interface GetUserResponse {
    success: boolean,
    page: number,
    total_pages: number,
    total_users: number,
    count: number,
    links: Links,
    users: Array<User>,
}

export default GetUserResponse