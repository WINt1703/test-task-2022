import {FileContent} from "use-file-picker/dist/interfaces";

interface UserRequest {
    name: string,
    email: string,
    phone: string,
    position_id: string,
    photo: FileContent,
}

export default UserRequest