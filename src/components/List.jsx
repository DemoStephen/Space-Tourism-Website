/* eslint-disable react/prop-types */
export default function List({ title, page, view, onChangeView, setSideBar }) {
  return (
    <li
      onClick={() => {
        onChangeView(page);
        setSideBar(false);
      }}
      className={`text-white uppercase py-4 md:py-8 cursor-pointer border-b-2 border-transparent hover:border-b-2 md:hover:border-white ${
        page === view && !setSideBar && "border-b-2 border-white"
      }  ${setSideBar && "px-4"}`}
    >
      {title}
    </li>
  );
}
