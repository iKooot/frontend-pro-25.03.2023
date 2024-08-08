import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
