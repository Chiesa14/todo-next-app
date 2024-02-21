import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/Todo";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "Get method hit" });
}

export async function POST(request) {
  const { title, description } = await request.json();
  const newTodo = new TodoModel({
    title: title,
    description: description,
  });
  newTodo.save();
  return NextResponse.json({ msg: "Post method hit" });
}
