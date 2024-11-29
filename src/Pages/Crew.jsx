import MeetDev from "../components/MeetDev";
import Picks from "../components/Picks";
import CrewContent from "../UI/CrewContent";
import Navigation from "../UI/Navigation";
export default function Crew() {
  return (
    <main
      className={`min-h-screen bg-center bg-cover bg-no-repeat py-8 flex flex-col justify-betweenbg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop`}
    >
      <Navigation />
      <Picks index="02" text="Meet your crew" />
      <CrewContent />
      <MeetDev />
    </main>
  );
}
