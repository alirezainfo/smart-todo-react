import { title } from "process";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoState = create(
  persist((set, get) => ({
    todos: [],
    filters: "all",

    addTodo: (title) => {
      if (!title.trim()) return;

      set((state) => ({
        todos: [
          ...state.todos,
          {
            title: title.trim(),
            completed: title.completed,
          },
        ],
      }));
    },
  }))
);
