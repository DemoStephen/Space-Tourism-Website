import { useState } from "react";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import Navigation from "./UI/Navigation";
import MeetDev from "./components/MeetDev";
export default function App() {
  const [view, setView] = useState("home");

  let bgInfo = "";

  if (view == "home") {
    bgInfo = "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
  } else if (view === "crew") {
    bgInfo = "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
  } else if (view === "technology") {
    bgInfo =
      "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop";
  } else if (view === "destination") {
    bgInfo =
      "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop";
  }
  return (
    <main
      className={`min-h-screen bg-center bg-cover bg-no-repeat py-8 flex flex-col justify-between ${bgInfo}`}
    >
      <Navigation onChangeView={setView} view={view} />
      {view === "home" && <Home handleView={setView} />}
      {view === "destination" && <Destination />}
      {view === "crew" && <Crew />}
      {view === "technology" && <Technology />}
      <MeetDev />
    </main>
  );
}
