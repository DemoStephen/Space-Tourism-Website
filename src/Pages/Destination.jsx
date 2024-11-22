import { useState } from "react";
import Picks from "../components/Picks";
import DestinationContent from "../UI/DestinationContent";
import { Data } from "../util/data";

export default function Destination() {
  const [view, setView] = useState(0);
  return (
    <>
      <Picks index="01" text="Pick your destination" />

      <main className="flex justify-between items-center content-center px-[5%] md:px-[10%] flex-col lg:flex-row md:gap-28 gap-8 lg:gap-0">
        <section className="w-full md:w-1/2 ">
          <img
            src={Data.destinations[view].images.png}
            alt={Data.destinations[view].name}
          />
        </section>
        <DestinationContent view={view} onChangeView={setView} />
      </main>
    </>
  );
}
