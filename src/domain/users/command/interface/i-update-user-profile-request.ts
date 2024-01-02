interface IUpdateUserProfileRequest {
  last_update_date: Date;
  avatar: string;
  code: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  nick_name: string;
  dob: Date;
  gender: string;
  email: string;
  primary_contact_no: string;
  secondary_contact_no: string;
  relation: string;
}

export default IUpdateUserProfileRequest;
