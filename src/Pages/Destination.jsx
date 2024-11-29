import { useState } from "react";
import Picks from "../components/Picks";
import DestinationContent from "../UI/DestinationContent";
import { Data } from "../util/data";
import Navigation from "../UI/Navigation";
import MeetDev from "../components/MeetDev";

export default function Destination() {
  const [view, setView] = useState(0);
  return (
    <main
      className={`min-h-screen bg-center bg-cover bg-no-repeat py-8 flex flex-col justify-between bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop`}
    >
      <Navigation />
      <Picks index="01" text="Pick your destination" />

      <section className="flex justify-between items-center content-center px-[5%] md:px-[10%] flex-col lg:flex-row md:gap-28 gap-8 lg:gap-8">
        <section className="w-full md:w-1/2 animate-pulse">
          <img
            src={Data.destinations[view].images.png}
            alt={Data.destinations[view].name}
          />
        </section>
        <DestinationContent view={view} onChangeView={setView} />
      </section>
      <MeetDev />
    </main>
  );
}
