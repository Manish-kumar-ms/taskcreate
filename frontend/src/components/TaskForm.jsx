import { useState } from "react";
import { createTask } from "../api/taskApi";

const TaskForm = ({ refresh }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const isValid = form.title && form.dueDate;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isValid || isLoading) return;

    try {
      setIsLoading(true);
      await createTask(form);
      setForm({ title: "", description: "", priority: "Low", dueDate: "" });
      refresh();
    } catch (error) {
      console.error("Failed to create task", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      <h2 className="font-semibold text-lg">Create Task</h2>

      <input
        className="w-full border p-2 rounded"
        placeholder="Task title *"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        disabled={isLoading}
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        disabled={isLoading}
      />

      <div className="flex gap-2">
        <select
          className="border p-2 rounded w-1/2"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
          disabled={isLoading}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded w-1/2"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          disabled={isLoading}
        />
      </div>

      <button
        disabled={!isValid || isLoading}
        className={`w-full py-2 rounded text-white transition
    ${
      !isValid
        ? "bg-gray-300 cursor-not-allowed"
        : isLoading
        ? "bg-blue-400 cursor-wait"
        : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
    }
  `}
      >
        {isLoading ? "Creating..." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
