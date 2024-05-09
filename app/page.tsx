import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex-1 w-full min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col gap-20 items-center justify-center">
      <h2 className="font-bold text-4xl mb-4 text-white animate-pulse">
        Приклад роботи з серверними actions
      </h2>
      <Link
        href="/login"
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Увійти
      </Link>
      <Link
        href="/protected"
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Перейти на сторінку доступну лише для аутентифікованих користувачів
      </Link>
      <Link
        href="/todo"
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Перейти на сторінку списка задач
      </Link>
    </div>
  );
}
