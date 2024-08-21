import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="w-full absolute flex justify-between px-2 md:px-10 items-center bg-white h-[40px] shadow-sm">
      <div className="text-xl font-bold">
        LOGO <span className="text-pink-700">.</span>
      </div>

      <ul className="flex gap-5 items-center">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-pink-600"
                  : "text-black"
              }
               hover:text-pink-600
              `

            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-pink-600"
                  : "text-black"
              }
               hover:text-pink-600
              `
            }
            to="/signup"
            >
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-pink-600"
                  : "text-black"
              }
              hover:text-pink-600
              `
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
    <Outlet/>
            </>

  );
}

export default Navbar;
