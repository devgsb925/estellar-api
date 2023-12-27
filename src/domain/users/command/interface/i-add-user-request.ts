interface IAddUserRequest {
    code: string;
    avatar: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    nick_name: string;
    dob: Date;
    gender: string;
    email: string;
    primary_contact_no: string;
    secondary_contact_no: string;
    username: string;
    relation: string;
}

export default IAddUserRequest;