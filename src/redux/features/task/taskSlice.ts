import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid"

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    // {
    //   id: "randomid1",
    //   tittle: "Initial Frontend",
    //   description: "Create Home page and routing",
    //   dueDate: "2025-11-11",
    //   isCompleted: false,
    //   priority: "Low",
    // },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload, id, isCompleted: false
      }
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
