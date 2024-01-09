interface IOrgProfile {
  organization_id: string;
  logo: string; // 128
  name: string; // 32
  email: string; // 128
  contact_no: string; // 16
  complete_address: string; // 256
  city: string; // 32
  district: string; // 64
  postal: string; // 6
}

export default IOrgProfile;
