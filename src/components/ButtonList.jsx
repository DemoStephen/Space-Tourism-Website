/* eslint-disable react/prop-types */
export default function ButtonList({ title, view, index, onChangeView }) {
  return (
    <li>
      <button
        onClick={() => onChangeView(index)}
        className={`uppercase p-2 ${view === index && " border-b-2"}`}
      >
        {title}
      </button>
    </li>
  );
}
