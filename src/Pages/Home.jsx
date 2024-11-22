import Header from "../UI/Header";

export default function Home() {
  return (
    <>
      <main className="flex justify-between items-center content-center px-[5%] md:px-[10%] py-10 md:py-20 flex-col lg:flex-row md:gap-28 gap-16 lg:gap-0">
        <Header home title="SPACE" paragraph="SO, YOU WANT TO TRAVEL TO">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Header>
        <div className="w-44 h-44 bg-white text-blue-900 uppercase rounded-full flex items-center justify-center hover:scale-125 transition-all hover:bg-blue-300 hover:text-white cursor-pointer">
          Explore
        </div>
      </main>
    </>
  );
}
