import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => { load(); }, []);

  const add = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    load();
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={add}>Add Task</button>
        <ul>{tasks.map(t => <li key={t._id}>{t.title}</li>)}</ul>
      </div>
    </>
  );
}
