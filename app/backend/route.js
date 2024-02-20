import { ConnectDB } from "@/lib/comfig/db";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export default function GET(request) {
  return NextResponse.json({ msg: "Response from server" });
}
