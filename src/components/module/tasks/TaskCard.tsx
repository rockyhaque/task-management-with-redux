// import { Button } from "@components/ui/button";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    task: ITask
}

export default function TaskCard({task}: IProps) {
  // console.log("Task Card -> ",task)
  return (
    <div className="border px-5 py-3 rounded-md mb-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={cn("size-3 rounded-full", {
            "bg-green-500": task.priority === 'low',
            "bg-cyan-500": task.priority === 'medium',
            "bg-rose-500": task.priority === 'high'
          })}></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
