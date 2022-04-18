export interface FailsUserFields {
    name?: Array<string>,
    email?: Array<string>,
    phone?: Array<string>,
    position_id?: Array<string>,
    photo?: Array<string>,
}

class UserError {
    constructor(
        public success: boolean,
        public message: string,
        public fails: FailsUserFields,
    ) { }
}

export default UserError