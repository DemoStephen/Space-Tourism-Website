/* eslint-disable react/prop-types */
export default function List({ title, setSideBar }) {
  return (
    <li
      onClick={() => {
        setSideBar(false);
      }}
      className={`text-white uppercase p-4 md:py-8 cursor-pointer border-b-2 border-transparent hover:border-b-2 md:hover:border-white `}
    >
      {title}
    </li>
  );
}
