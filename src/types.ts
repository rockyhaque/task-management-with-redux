export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "all" | "high" | "medium" | "low";
  assignedTo: string | null;
}

export type TPriority = ITask["priority"]

export interface IUser {
  id: string;
  name: string;
}