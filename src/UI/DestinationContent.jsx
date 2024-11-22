/* eslint-disable react/prop-types */
import ButtonList from "../components/ButtonList";
import { Data } from "../util/data";
export default function DestinationContent({ view, onChangeView }) {
  return (
    <section className="lg:w-1/2">
      <ul className="flex gap-3 justify-center md:justify-start">
        {Data.destinations.map((list, index) => {
          return (
            <ButtonList
              key={list.name}
              title={list.name}
              view={view}
              index={index}
              onChangeView={onChangeView}
            />
          );
        })}
      </ul>
      <header className="text-center md:text-left">
        <h1 className="text-6xl lg:text-8xl uppercase my-4 text-white">
          {Data.destinations[view].name}
        </h1>
        <p>{Data.destinations[view].description}</p>
        <hr className="my-8" />
        <section className="flex flex-col md:flex-row gap-10 justify-between">
          <div className="md:w-1/2 text-center md:text-start uppercase">
            <p>AVG. DISTANCE</p>
            <h3 className="text-3xl text-white">
              {Data.destinations[view].distance}
            </h3>
          </div>
          <div className="md:w-1/2 text-center uppercase">
            <p>Est. travel time</p>
            <h3 className="text-3xl text-white">
              {Data.destinations[view].travel}
            </h3>
          </div>
        </section>
      </header>
    </section>
  );
}
