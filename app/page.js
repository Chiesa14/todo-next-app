"use client";
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get("/backend");
    setTodos(response.data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/backend", formData);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      fetchTodos();
    } catch (error) {
      toast.error("Faild to add task");
    }
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete("/backend", {
      params: { mongoID: id },
    });
    toast.success(response.data.msg);
    fetchTodos();
  };

  return (
    <>
      <ToastContainer
        limit={1}
        position="bottom-right"
        autoClose={2000}
        rtl={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        transition={Slide}
        theme="colored"
        className="opacity-80"
      />
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          value={formData.title}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full rounded-md h-[50px]"
          onChange={onChangeHandler}
        />
        <textarea
          value={formData.description}
          name="description"
          placeholder="Enter Descrption"
          className="px-3 py-2 border-2 w-full rounded-md h-[150px]"
          onChange={onChangeHandler}
        ></textarea>
        <button
          type="submit"
          className=" bg-green-600 py-3 px-11 text-white rounded-md"
          onClick={onSubmitHandler}
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
            {todos.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index + 1}
                  title={item.title}
                  description={item.description}
                  completed={item.isComplete}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
