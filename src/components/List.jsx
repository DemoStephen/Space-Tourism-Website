/* eslint-disable react/prop-types */
export default function List({ title, page, view, onChangeView }) {
  return (
    <li
      onClick={() => onChangeView(page)}
      className={`text-white text-center md:text-left uppercase py-4 md:py-8 cursor-pointer border-b-2 border-transparent hover:border-b-2 md:hover:border-white ${
        page === view && "border-b-2 border-white"
      }`}
    >
      {title}
    </li>
  );
}
