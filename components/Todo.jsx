import React from "react";

const Todo = ({
  id,
  title,
  description,
  completed,
  mongoId,
  deleteTodo,
  markAsDone,
}) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {id}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4"> {description}</td>
      <td className="px-6 py-4">{completed ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-2">
        <button
          className="py-2 px-4 bg-red-500 rounded text-white"
          onClick={() => deleteTodo(mongoId)}
        >
          Delete
        </button>
        <button
          className="py-2 px-4 bg-green-500 rounded text-white"
          onClick={() => markAsDone(mongoId)}
          disabled={false}
        >
          Done
        </button>
      </td>
    </tr>
  );
};

export default Todo;
