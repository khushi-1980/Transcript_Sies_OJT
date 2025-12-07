import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Profile from "./Profile.jsx";
import Transcript from "./Transcript.jsx";
import Help from "./Help.jsx";
import "./Dashboard.css";

export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Welcome, {user.name}</h2>
        <nav>
          <ul>
            <li><NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink></li>
            <li><NavLink to="/dashboard/transcript" className={({ isActive }) => isActive ? "active" : ""}>Transcript</NavLink></li>
            <li><NavLink to="/dashboard/help" className={({ isActive }) => isActive ? "active" : ""}>Help</NavLink></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="profile" element={<Profile user={user} />} />
          <Route path="transcript" element={<Transcript />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<Profile user={user} />} /> {/* default route */}
        </Routes>
      </main>
    </div>
  );
}
