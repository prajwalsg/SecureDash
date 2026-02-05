import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    nav("/login");
  };

  return (
    <div className="p-4 bg-gray-800 text-white flex justify-between">
      <span>Dashboard</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
