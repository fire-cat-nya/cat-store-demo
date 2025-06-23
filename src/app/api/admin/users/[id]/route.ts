import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "ユーザーを削除しました" });
  } catch (err) {
    console.error("Delete user error:", err);
    return NextResponse.json(
      { message: "削除に失敗しました" },
      { status: 500 }
    );
  }
}
