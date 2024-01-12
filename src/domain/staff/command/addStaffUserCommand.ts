import StaffUserService from '../service';
import UserService from '../../../domain/users/service';
import { faker } from '@faker-js/faker';
import ISeedStaffProfile from '../../../controller/staffUsers/seed/i-seed-staff-profile';
import { GenerateSalt, PasswordHasher, RandomStringGenerator, RandomStringGenerator2 } from '../../../utility/cryptography';

const addStaffUserCommand = async () => {
  const fname = faker.person.firstName();
  const lname = faker.person.lastName();

  const salt = GenerateSalt();
  const pw = PasswordHasher('11223344', salt);

  const model: ISeedStaffProfile = {
    user_id: faker.string.uuid(),
    date_created: faker.date.past({ years: 1 }),
    last_update_date: null,
    code: RandomStringGenerator(3, 3),
    avatar: 'profile.png',
    first_name: fname,
    middle_name: faker.person.middleName(),
    last_name: lname,
    nick_name: 'NA',
    dob: faker.date.birthdate(),
    gender: faker.person.sexType(),
    email: faker.internet.email(),
    primary_contact_no: RandomStringGenerator2(3, 7),
    secondary_contact_no: RandomStringGenerator2(3, 7),
    username: faker.internet.userName({ firstName: fname, lastName: lname }),
    password_hash: pw,
    access_status: 0,
    relation: '',
    session_token: '',
    refresh_token: '',
    salt: salt,
    account_type: 2,
  };

  const response = await StaffUserService.AddStaffUserService(model);
  // add user role
  await UserService.AddUserRole(model.user_id, process.env.ADMIN_UUID, true);

  return response.rowCount;
};

export default addStaffUserCommand;
