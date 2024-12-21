import { axiosClient } from "@/lib/api/axiosClient";
import { isAxiosError } from "axios";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    await axiosClient.post('monsters', body);
    return NextResponse.json({ post: 200 });
  } catch(error) {
    console.log('~~~~~~~~~~~~~~~~~~~~api routes~~~~~~~~~~~~~~~~')
    if (isAxiosError(error)) {
      return NextResponse.json({ error: error.message}, {status: error.status})
    } else {
      return NextResponse.json({ error: 'internal server error'}, {status: 500})
    }
  }
}