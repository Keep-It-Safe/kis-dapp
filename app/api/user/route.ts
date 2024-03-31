import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const walletAddress = searchParams.get("address");

  if (!walletAddress) {
    return NextResponse.json(
      { message: "Missing wallet address" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { address: walletAddress },
  });

  if (user) {
    return NextResponse.json({ user }, { status: 200 });
  } else {
    const user = await prisma.user.create({
      data: {
        address: walletAddress,
      },
    });
    return NextResponse.json({ user }, { status: 200 });
  }
}
