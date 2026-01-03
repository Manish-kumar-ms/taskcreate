import Task from "../models/Task.model.js";

// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task ,message: "Task created successfully"});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// GET ALL TASKS
export const getTasks = async (req, res) => {
  try {
    const { status, priority, sort } = req.query;

    const filter = {};

    //  Filter by status
    if (status) {
      filter.status = status;
    }

    // Filter by priority
    if (priority) {
      filter.priority = priority;
    }

    // Sort by due date
    let sortOption = {};
    if (sort === "asc") {
      sortOption.dueDate = 1;
    } else if (sort === "desc") {
      sortOption.dueDate = -1;
    }

    const tasks = await Task.find(filter).sort(sortOption);

    res.json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE TASK STATUS
export const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.json({ success: true, data: task,message: "Task status updated successfully"});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE TASK
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
