import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Navigation from "./UI/Navigation";

export default function App() {
  const homeClasses = "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
  const crewClasses = "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
  const destinationClasses =
    "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop";
  return (
    <section
      className={`min-h-screen bg-center bg-cover bg-no-repeat py-8 flex flex-col justify-between ${destinationClasses}`}
    >
      <Navigation />
      {/* <Home /> */}
      <Destination />
      {/* <Crew /> */}
    </section>
  );
}
