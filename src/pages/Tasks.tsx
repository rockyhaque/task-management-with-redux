import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

//   console.log(tasks);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold py-10 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent ">
          Tasks
        </h1>
        <AddTaskModal />
      </div>

      <div>
        {tasks.map((task, idx) => (
          <TaskCard task={task} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
