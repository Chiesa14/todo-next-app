import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    desciption: {
      typeof: string,
      required: true,
    },
    isComplete: {
      type: boolean,
      default: false,
    },
  },
  {
    timeStamp: true,
  }
);

export default TodoModel = mongoose.model("Todo", Schema);
