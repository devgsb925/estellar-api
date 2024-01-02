import UserService from '../service';
import IUpdateUserProfileRequest from './interface/i-update-user-profile-request';

const updateUserProfileCommand = async (model: IUpdateUserProfileRequest, userid: string) => {
  console.log(model);
  const updateResponse = await UserService.UpdateUserProfile(model, userid);
  return updateResponse.rowCount;
};

export default updateUserProfileCommand;
