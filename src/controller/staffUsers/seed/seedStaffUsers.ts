import { faker } from '@faker-js/faker';
import ISeedStaffProfile from './i-seed-staff-profile';
import { RandomStringGenerator, RandomStringGenerator2 } from '../../../utility/cryptography';

function seedStaffUsers(): ISeedStaffProfile {
  const fname = faker.person.firstName();
  const lname = faker.person.lastName();
  return {
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
    password_hash: RandomStringGenerator(5, 3),
    access_status: 0,
    relation: '',
    session_token: '',
    refresh_token: '',
    salt: '',
    account_type: 2,
  };
}

export const SeedStaffUsers = seedStaffUsers();
