"use client";
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  return (
    <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full rounded-md h-[50px]"
        />
        <textarea
          name="description"
          placeholder="Enter Descrption"
          className="px-3 py-2 border-2 w-full rounded-md h-[150px]"
        ></textarea>
        <button
          type="submit"
          className=" bg-green-600 py-3 px-11 text-white rounded-md"
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[50%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                DEscription
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
