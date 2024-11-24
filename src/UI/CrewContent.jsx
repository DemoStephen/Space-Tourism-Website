import { useEffect, useState } from "react";
import Header from "../UI/Header";
import { Data } from "../util/data";
import SmallDots from "../components/SmallDots";
export default function CrewContent() {
  const [view, setView] = useState(0);
  useEffect(() => {
    if (Data.crew.length - 1 > view) {
      setTimeout(() => {
        setView((prev) => prev + 1);
      }, 15000);
    } else {
      setTimeout(() => {
        setView(0);
      }, 15000);
    }
  }, [view]);
  return (
    <main className="flex justify-between items-center content-center px-[5%] md:px-[10%] flex-col lg:flex-row md:gap-28 gap-8 lg:gap-0">
      <section className="flex justify-between flex-col">
        <Header title={Data.crew[view].name} paragraph={Data.crew[view].role}>
          {Data.crew[view].bio}
        </Header>
        <div className="flex items-center content-center justify-center lg:justify-start gap-2 my-8">
          <SmallDots view={view} thisView={0} changeView={setView} />
          <SmallDots view={view} thisView={1} changeView={setView} />
          <SmallDots view={view} thisView={2} changeView={setView} />
          <SmallDots view={view} thisView={3} changeView={setView} />
        </div>
      </section>
      <section>
        <div>
          <img
            src={Data.crew[view].images.png}
            alt={Data.crew[view].name}
            className="w-4/5 lg:w-full m-auto "
          />
        </div>
      </section>
    </main>
  );
}
