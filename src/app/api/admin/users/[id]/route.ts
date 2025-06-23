import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "ユーザーを削除しました" });
  } catch (error) {
    return NextResponse.json(
      { message: "削除に失敗しました" },
      { status: 500 }
    );
  }
}
