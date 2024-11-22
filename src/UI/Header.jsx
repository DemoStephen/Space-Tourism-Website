/* eslint-disable react/prop-types */
export default function Header({
  home,
  technology,
  title,
  paragraph,
  children,
}) {
  return (
    <header className={`text-center lg:text-left ${!technology && "lg:w-1/2"}`}>
      <p className="text-xl md:text-2xl uppercase">{paragraph}</p>
      {home ? (
        <h1 className="text-white text-6xl lg:text-8xl uppercase my-2">
          {title}
        </h1>
      ) : (
        <h2 className="text-white my-2 uppercase text-4xl lg:text-6xl">
          {title}
        </h2>
      )}
      <p>{children}</p>
    </header>
  );
}
