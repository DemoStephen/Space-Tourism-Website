/* eslint-disable react/prop-types */
export default function Picks({ index, text }) {
  return (
    <div className="uppercase text-white px-[5%] md:px-[10%] my-10 text-2xl lg:text-3xl">
      <b className="text-blue-300">{index}</b> {text}
    </div>
  );
}
