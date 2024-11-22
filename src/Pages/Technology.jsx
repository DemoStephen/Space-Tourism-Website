import { useState } from "react";
import Header from "../UI/Header";
import { Data } from "../util/data";
import Button from "../components/Button";
export default function Technology() {
  const [view, setView] = useState(0);
  return (
    <>
      <section className="flex justify-between items-center content-center md:px-[10%] py-10 md:py-20 flex-col-reverse lg:flex-row md:gap-28 gap-16 lg:gap-8">
        <section className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-centerborder-2 gap-8 px-[5%] lg:px-[0%]">
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
        <section className="w-full lg:w-1/2">
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet={Data.technology[view].images.portrait}
            />
            <img
              src={Data.technology[view].images.landscape}
              alt={Data.technology[view].name}
            />
          </picture>
        </section>
      </section>
    </>
  );
}
