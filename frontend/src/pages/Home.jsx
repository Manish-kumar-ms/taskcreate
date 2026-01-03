import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskForm from "../components/TaskForm";
import TaskFilters from "../components/TaskFilters";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTasks = async () => {
    const res = await getTasks(filters);
    setTasks(res.data.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Task Tracker</h1>

      <TaskForm refresh={fetchTasks} />
      <TaskFilters filters={filters} setFilters={setFilters} />

      <div className="grid gap-4">
        {tasks.length ? (
          tasks.map((task) => (
            <TaskCard key={task._id} task={task} refresh={fetchTasks} />
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
