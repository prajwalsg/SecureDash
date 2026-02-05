import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id
  });
  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const q = req.query.q || "";
  const tasks = await Task.find({
    user: req.user.id,
    title: { $regex: q, $options: "i" }
  });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
