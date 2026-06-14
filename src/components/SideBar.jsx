import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-header">

        <img
          src="/jadavpur university logo.jpg"
          alt="Jadavpur University"
          className="sidebar-logo"
        />

        <div className="sidebar-title">
          <div>Prof. Priti Kumar Roy</div>
          <div>Department of Mathematics</div>
          <div>Jadavpur University</div>
        </div>

      </div>

      <ul className="sidebar-nav">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/research"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            Research
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/publications"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            Publications
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            Research Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            Awards & Honors
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            Students & Fellows
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            Books Published
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;