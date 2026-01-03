const TaskFilters = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-2 bg-white p-3 rounded shadow">
      <select
        className="border p-2 rounded"
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">All Status</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <select
        className="border p-2 rounded"
        onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
      >
        <option value="">All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select
        className="border p-2 rounded"
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="">Sort by Due Date</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default TaskFilters;
