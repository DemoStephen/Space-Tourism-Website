import { useState } from "react";
import Header from "../UI/Header";
import { Data } from "../util/data";
import Button from "../components/Button";
import MeetDev from "../components/MeetDev";
import Navigation from "../UI/Navigation";
export default function Technology() {
  const [view, setView] = useState(0);
  return (
    <main
      className={`min-h-screen bg-center bg-cover bg-no-repeat py-8 flex flex-col justify-between bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop`}
    >
      <Navigation />
      <section className="grid lg:grid-cols-2 justify-between items-center content-center md:px-[10%] py-10 md:py-20 gap-16 md:gap-28 lg:gap-8">
        <section className="flex flex-col lg:flex-row justify-center gap-8 px-[5%] lg:px-0">
          <div className="flex lg:flex-col justify-center gap-4 lg:gap-6">
            <Button index={0} onChangeView={setView} view={view} />
            <Button index={1} onChangeView={setView} view={view} />
            <Button index={2} onChangeView={setView} view={view} />
          </div>
          <Header
            title={Data.technology[view].name}
            paragraph="The Technology"
            technology
          >
            {Data.technology[view].description}
          </Header>
        </section>
        <section className="row-start-1 lg:row-start-auto">
          <img
            src={Data.technology[view].images.portrait}
            alt={Data.technology[view].name}
            className="w-full hidden lg:block"
          />
          <img
            src={Data.technology[view].images.landscape}
            alt={Data.technology[view].name}
            className="w-full lg:hidden block"
          />
        </section>
      </section>
      <MeetDev />
    </main>
  );
}
