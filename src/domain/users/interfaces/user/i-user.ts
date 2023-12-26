interface IUser {
    user_id: string;
    date_created: Date;
    last_update_date?: Date;
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
    password_hash: string;
    access_status: number;
    relation: string;
    session_token: string;
    refresh_token: string;
    salt: string;
}

export default IUser;