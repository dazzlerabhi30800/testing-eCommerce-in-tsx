import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Data from './data.json';


type Data = {
    id: number,
    name: string,
    stock: boolean,
    image: string,
    quantity: number,
    price: number,
    discount: number,
}

export async function GET(req: NextRequest, res: NextApiResponse<Array<Data>>) {
    return NextResponse.json(Data);
}