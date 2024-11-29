import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import cancel from "../assets/shared/icon-close.svg";
import List from "../components/List";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Navigation() {
  const [sideBar, setSideBar] = useState(false);
  function handleSideBar() {
    if (sideBar) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  }
  return (
    <nav className="flex items-center content-center justify-between px-[10%] md:pr-[0%]">
      <img src={logo} alt="logo" className="animate-pulse" />
      <ul className="hidden md:flex items-center content-center gap-6 lg:gap-8 backdrop-blur-md lg:pl-28 pr-11 lg:pr-20  text-center md:text-left">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "border-b-2 border-white" : "";
          }}
        >
          <List title="00 Home" />
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) => {
            return isActive ? "border-b-2 border-white" : "";
          }}
        >
          <List title="01 Destination" />
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => {
            return isActive ? "border-b-2 border-white" : "";
          }}
        >
          <List title="02 Crew" />
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => {
            return isActive ? "border-b-2 border-white" : "";
          }}
        >
          <List title="03 Technology" />
        </NavLink>
      </ul>
      <button className="md:hidden" onClick={handleSideBar}>
        <img src={menu} alt="menu" />
      </button>
      {sideBar && (
        <div className="fixed h-screen top-0 right-0 bg-slate-800 w-4/5 md:hidden z-10">
          <div className="flex justify-end px-4 py-8">
            <button onClick={handleSideBar} className="p-3">
              <img src={cancel} alt="" />
            </button>
          </div>
          <ul className="">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "border-b-2 border-white" : "";
              }}
            >
              <List title="00 Home" setSideBar={setSideBar} />
            </NavLink>
            <NavLink
              to="/destination"
              className={({ isActive }) => {
                return isActive ? "border-b-2 border-white" : "";
              }}
            >
              <List title="01 Destination" setSideBar={setSideBar} />
            </NavLink>
            <NavLink
              to="/crew"
              className={({ isActive }) => {
                return isActive ? "border-b-2 border-white" : "";
              }}
            >
              <List title="02 Crew" setSideBar={setSideBar} />
            </NavLink>
            <NavLink
              to="/technology"
              className={({ isActive }) => {
                return isActive ? "border-b-2 border-white" : "";
              }}
            >
              <List title="03 Technology" setSideBar={setSideBar} />
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}
