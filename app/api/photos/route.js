import { getAllPhotosFrontPage } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllPhotosFrontPage();
  return NextResponse.json(data);
}
