import type { Request, Response } from 'express';
import StaffUserCommands from '../../domain/staff/command';

const addStaffUser = async (req: Request, response: Response) => {
  for (let index = 0; index < 100; index++) {
    await StaffUserCommands.AddStaffUserCommand();
  }
  const result = await StaffUserCommands.AddStaffUserCommand();
  return response.status(200).json(result).end();
};

export default addStaffUser;
