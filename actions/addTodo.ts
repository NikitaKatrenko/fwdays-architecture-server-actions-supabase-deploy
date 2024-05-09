"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

const supabase = createClient();
export default async function addTodo(formData: FormData) {
  const todoItem = formData.get("todo");
  if (!todoItem) {
    return;
  }
  // Save todo item to supabase database
  const { data, error } = await supabase.from("todos").insert({
    todo: todoItem,
    created_at: new Date().toISOString(),
  });

  revalidatePath("/todo");
}
