import Task from "../models/TaskSchema.js";

export const getAllTask = async (req, res) => {
  const { filter = "today" } = req.query;
  const now = new Date();
  let startDate;

  switch (filter) {
    case "today":
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case "week":
      const mondayDate =
        now.getDate() - (now.getDay() - 1) - (now.getDay() === 0 ? 7 : 0);
      startDate = new Date(now.getFullYear(), now.getMonth(), mondayDate);
      break;
    case "month":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      break;
    case "all":

    default: {
      startDate = null;
    }
  }

  const query = startDate ? { createdAt: { $gte: startDate } } : {};

  try {
    const tasks = await Task.find(query).sort({ createdAt: -1 });
    const activeTaskCount = await Task.countDocuments({ status: "active" });
    const completedTaskCount = await Task.countDocuments({
      status: "completed",
    });
    res.json({ tasks, activeTaskCount, completedTaskCount });
  } catch (error) {
    console.error("Lỗi xảy ra khi gọi getAllTask.", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = await Task.create({ title: title });
    res.json({ newTask });
  } catch (error) {
    console.error("Lỗi xảy ra khi gọi createTask.", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status, completedAt } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title: title,
        status: status,
        completedAt: completedAt,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task không tồn tại" });
    }

    res.json({ updatedTask });
  } catch (error) {
    console.error("Lỗi xảy ra khi gọi updateTask.", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task không tồn tại" });
    }

    res.json({ deletedTask });
  } catch (error) {
    console.error("Lỗi xảy ra khi gọi deleteTask.", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
