import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px" }}>
        <h2>Student Portal</h2>
        <ul>
          <li><Link to="/dashboard/profile">My Profile</Link></li>
          <li><Link to="/dashboard/transcript">Transcript</Link></li>
          <li><Link to="/dashboard/help">Help</Link></li>
        </ul>
      </aside>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
