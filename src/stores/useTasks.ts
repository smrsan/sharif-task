import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ITask {
  id?: number;
  name: string;
  status: "todo" | "doing" | "done";
  date: Date;
}

interface ITasksState {
  lastId: number;
  tasks: ITask[];
  add: (newTask: ITask) => void;
  remove: (taskId: number) => void;
}

export const useTasks = create<ITasksState>()(
  persist(
    (set) => ({
      lastId: 0,
      tasks: [],

      add(newTask) {
        set((state) => ({
          lastId: state.lastId + 1,
          tasks: [
            {
              ...newTask,
              id: state.lastId + 1,
            },
            ...state.tasks,
          ],
        }));
      },

      remove(taskId) {
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== taskId) }));
      },
    }),
    {
      name: "tasks",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
