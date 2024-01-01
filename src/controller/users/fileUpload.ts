import type { Request, Response } from 'express';

const fileUpload = async (req: Request, response: Response) => {
  const msg = {
    success: true,
  };

  return response.status(200).json(msg).end();
};

export default fileUpload;
