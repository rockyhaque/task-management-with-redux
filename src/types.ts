export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "all" | "high" | "medium" | "low";
}

export type TPriority = ITask["priority"]