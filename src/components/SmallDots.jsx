/* eslint-disable react/prop-types */
export default function SmallDots({ view, thisView, changeView }) {
  return (
    <span
      onClick={() => changeView(thisView)}
      className={`p-2 cursor-pointer ${
        view !== thisView ? "bg-slate-600" : "bg-slate-50"
      } rounded-full`}
    ></span>
  );
}
