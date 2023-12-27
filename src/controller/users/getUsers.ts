import type { Request, Response } from 'express';
import Queries from '../../domain/users/queries/index';

const getUsers = async (req: Request, response: Response) => {

    // business error from domain    
    var res = (await Queries.GetUsersQuery());

    // return response
    return response.status(200).json(res).end();

}


export default getUsers;