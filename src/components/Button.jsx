/* eslint-disable react/prop-types */
export default function Button({ index, view, onChangeView }) {
  return (
    <button
      onClick={() => onChangeView(index)}
      className={`w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center content-center border-2 rounded-full ${
        view === index && "bg-slate-50 text-blue-900"
      } hover:bg-slate-50 hover:text-blue-900`}
    >
      {index + 1}
    </button>
  );
}
