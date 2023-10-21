// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean;
    statusCode: number;
    data: {
        id: number;
        name: string;
        price: number;
        stock: number;
    } [],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data = [
        {
            id : 1,
            name: 'Hygedent',
            price: 56000,
            stock: 10,
        },
        {
            id : 2,
            name: 'Stone Biru',
            price: 35000,
            stock: 10,
        },
];
  res.status(200).json({ status:true, statusCode:200, data });
}
