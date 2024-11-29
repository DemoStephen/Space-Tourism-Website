import { NavLink } from "react-router";
import MeetDev from "../components/MeetDev";
import Header from "../UI/Header";
import Navigation from "../UI/Navigation";

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-center bg-cover bg-no-repeat py-8 flex flex-col justify-between bg-home-mobile md:bg-home-tablet lg:bg-home-desktop`}
    >
      <Navigation />
      <section className="flex justify-between items-center content-center px-[5%] md:px-[10%] py-10 md:py-20 flex-col lg:flex-row md:gap-28 gap-16 lg:gap-0">
        <Header home title="SPACE" paragraph="SO, YOU WANT TO TRAVEL TO">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </Header>
        <NavLink
          to="/destination"
          className={({ isActive }) => {
            return isActive ? "border-b-2 border-white" : "";
          }}
        >
          <div className="w-44 h-44 bg-white text-blue-900 uppercase rounded-full flex items-center justify-center hover:scale-125 transition-all hover:bg-blue-300 hover:text-white cursor-pointer">
            Explore
          </div>{" "}
        </NavLink>
      </section>
      <MeetDev />
    </main>
  );
}
