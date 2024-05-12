import { createClient } from "@/utils/supabase/server";
import addTodo from "@/actions/addTodo";
import DeleteTodoButton from "@/components/DeleteTodoButton";

export default async function TodoList() {
  const supabase = createClient();
  const { data } = await supabase.from("todos").select("id, todo");

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-8">
        Server Actions Demo Vercel
      </h2>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form action={addTodo} method="POST" className="mb-8">
          <div className="mb-4">
            <label
              htmlFor="todo"
              className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
            >
              Todo
            </label>
            <div>
              <input
                id="todo"
                name="todo"
                type="text"
                placeholder="What needs to be done?"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Add Todo
            </button>
          </div>
        </form>
        <ul className="space-y-4">
          {data &&
            data.map((todo) => (
              <li
                key={todo.id}
                className="bg-indigo-100 dark:bg-indigo-800 px-4 py-2 rounded-md shadow-md flex justify-between items-center"
              >
                <span className="text-indigo-800 dark:text-indigo-200 font-semibold">
                  {todo.todo}
                </span>
                <DeleteTodoButton id={todo.id} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
