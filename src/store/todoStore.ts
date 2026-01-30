import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: string;
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
}

export const useTodoState = create<TodoState>()(
  persist<TodoState>(
    (set, get) => ({
      todos: [],
      filter: "all",

      addTodo: (title: string) => {
        if (!title.trim()) return;

        (set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              title: title.trim(),
              completed: false,
            },
          ],
        })),
          get());
      },

      deleteTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.filter((item) => item.id !== id),
        }));
      },

      updateTodo: (id: number, title: string) => {},
    }),
    { name: "todo-storage" },
  ),
);
