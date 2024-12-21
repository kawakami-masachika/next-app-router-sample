import { axiosClient } from "@/lib/api/axiosClient";
import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

type Response =  {
  kinds: {
    id: number;
    name: number;
  }[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const response = await axiosClient.get<Response>('moves');
    return NextResponse.json({ kinds: response.data.kinds });
  } catch(error) {
    if (isAxiosError(error)) {
      return NextResponse.json({ error: error.message}, {status: error.status})
    } else {
      return NextResponse.json({ error: 'internal server error'}, {status: 500})
    }
  }
}
