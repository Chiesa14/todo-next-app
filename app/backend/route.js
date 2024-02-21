import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function GET(request) {
  const todos = await TodoModel.find().sort({ createdAt: -1 });
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title: title,
    description: description,
  });
  return NextResponse.json({ msg: "Added Successfully" });
}
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("mongoID");
  await TodoModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Deleted Successfully" });
}

export async function PUT(request) {
  const id = await request.nextUrl.searchParams.get("mongoID");
  await TodoModel.findByIdAndUpdate(id, {
    $set: {
      isComplete: true,
    },
  });
  return NextResponse.json({ msg: "Updated Successfully" });
}
