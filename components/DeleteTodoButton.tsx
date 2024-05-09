"use client";

import deleteTodo from "@/actions/deleteTodo";
import { useTransition } from "react";

type Props = {
  id: number;
};

export const DeleteTodoButton: React.FC<Props> = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  const handleDeleteTodo = (id: number) => {
    startTransition(async () => {
      await deleteTodo(id);
    });
  };

  return (
    <button
      disabled={isPending}
      className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
      onClick={() => handleDeleteTodo(id)}
    >
      Delete todo item
    </button>
  );
};

export default DeleteTodoButton;
