
import type { Request, Response } from 'express';

import IUser from '../../domain/users/interface/user/i-user';
import UserCommands from '../../domain/users/command';
import { IAddUserResponse } from 'domain/users/command/interface/i-add-user-response';
import addUserSchema from '../../domain/users/schema/user/addUserSchema';
import IAddUserRequest from 'domain/users/command/interface/i-add-user-request';


const addUser = async (req: Request, response: Response) => {

    const _dob = new Date(req.body['dob']);

    // validation error
    const { error, value } = addUserSchema.validate(modelMapper(req.body));
    if (error) throw error;

    const model: IUser = {
        user_id: '',
        date_created: new Date(),
        last_update_date: null,
        code: '',
        avatar: req.body['avatar'],
        first_name: req.body['first_name'],
        middle_name: req.body['middle_name'],
        last_name: req.body['last_name'],
        nick_name: req.body['nick_name'],
        dob: _dob,
        gender: req.body['gender'],
        email: req.body['email'],
        primary_contact_no: req.body['primary_contact_no'],
        secondary_contact_no: req.body['secondary_contact_no'],
        username: req.body['username'],
        password_hash: '',
        access_status: 0,
        relation: req.body['relation'],
        session_token: '',
        refresh_token: '',
        salt: ''
    };

    var result: IAddUserResponse = await UserCommands.AddCommand(model);

    return response.status(200).json(result).end();

}

const modelMapper = (formData: any) => {

    const model: IAddUserRequest = {
        code: formData['code'],
        avatar: formData['avatar'],
        first_name: formData['first_name'],
        middle_name: formData['middle_name'],
        last_name: formData['last_name'],
        nick_name: formData['nick_name'],
        dob: formData['dob'],
        gender: formData['gender'],
        email: formData['email'],
        primary_contact_no: formData['primary_contact_no'],
        secondary_contact_no: formData['secondary_contact_no'],
        username: formData['username'],
        relation: formData['relation']
    };

    return model;
}


export default addUser;