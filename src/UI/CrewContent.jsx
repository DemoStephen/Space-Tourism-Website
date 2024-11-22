import { useEffect, useState } from "react";
import Header from "../UI/Header";
import { Data } from "../util/data";
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
          <span
            className={`p-2 ${
              view !== 0 ? "bg-slate-600" : "bg-slate-50"
            } rounded-full`}
          ></span>
          <span
            className={`p-2 ${
              view !== 1 ? "bg-slate-600" : "bg-slate-50"
            } rounded-full`}
          ></span>
          <span
            className={`p-2 ${
              view !== 2 ? "bg-slate-600" : "bg-slate-50"
            } rounded-full`}
          ></span>
          <span
            className={`p-2 ${
              view !== 3 ? "bg-slate-600" : "bg-slate-50"
            } rounded-full`}
          ></span>
        </div>
      </section>
      <section>
        <div>
          <img
            src={Data.crew[view].images.png}
            alt={Data.crew[view].name}
            className="w-4/5 lg:w-full m-auto"
          />
        </div>
      </section>
    </main>
  );
}
