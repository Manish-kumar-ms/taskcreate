import { updateTaskStatus, deleteTask } from "../api/taskApi";

const TaskCard = ({ task, refresh }) => {
  const toggleStatus = async () => {
    await updateTaskStatus(
      task._id,
      task.status === "Pending" ? "Completed" : "Pending"
    );
    refresh();
  };

  const removeTask = async () => {
    await deleteTask(task._id);
    refresh();
  };

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>

        <div className="mt-2 text-sm">
          <span className="mr-2">Priority: {task.priority}</span>
          <span>Due: {task.dueDate.slice(0, 10)}</span>
        </div>

        <span
          className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
            task.status === "Pending"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={toggleStatus}
          className="bg-indigo-600 cursor-pointer text-white px-3 py-1 rounded"
        >
          Update
        </button>

        <button
          onClick={removeTask}
          className="bg-red-600 text-white cursor-pointer px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
