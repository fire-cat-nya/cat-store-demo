import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(request: any, context: any) {
  try {
    await prisma.user.delete({ where: { id: context.params.id } });
    return NextResponse.json({ message: "ユーザーを削除しました" });
  } catch (err) {
    console.error("Delete user error:", err);
    return NextResponse.json(
      { message: "削除に失敗しました" },
      { status: 500 }
    );
  }
}
