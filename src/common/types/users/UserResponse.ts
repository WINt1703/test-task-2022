class UserResponse {
    constructor(
        public success: boolean,
        public user_id: number,
        public message: string,
    ) { }
}

export default UserResponse