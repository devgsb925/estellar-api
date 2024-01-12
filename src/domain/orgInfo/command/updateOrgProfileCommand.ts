import IOrgProfile from '../interface/i-org-profile';
import OrgProfileService from '../service';

const updateOrgProfileCommand = async (model: IOrgProfile) => {
  const updateResponse = await OrgProfileService.UpdateOrgProfileService(model);
  return updateResponse.rowCount;
};

export default updateOrgProfileCommand;
