import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import List from "../components/List";
import { useState } from "react";
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
    <nav className="flex items-center content-center justify-between px-[10%] md:pr-[0%] relative">
      <img src={logo} alt="logo" className="animate-pulse" />
      <ul className="hidden md:flex items-center content-center gap-6 lg:gap-8 backdrop-blur-md lg:pl-28 pr-11 lg:pr-20">
        <List title="00 Home" />
        <List title="01 Destination" />
        <List title="02 Crew" />
        <List title="03 Technology" />
      </ul>
      <button className="md:hidden" onClick={handleSideBar}>
        <img src={menu} alt="menu" />
      </button>
      {sideBar && (
        <ul className="absolute top-20 left-[10%] backdrop-blur-sm w-4/5 rounded-xl md:hidden">
          <List title="00 Home" />
          <List title="01 Destination" />
          <List title="02 Crew" />
          <List title="03 Technology" />
        </ul>
      )}
    </nav>
  );
}
