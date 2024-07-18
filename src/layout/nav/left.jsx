import { NavLink } from "react-router-dom";

export default function Left() {
  return (
    <div className="lg:w-[14%] bg-green-200">
      <NavLink
        to="dashboard"
           activeclassname="active"
      >
        Dashboard
      </NavLink>
      <div className="space-y-3 flex flex-col items-center h-full">
        <NavLink
          to="generate"
          className="block p-4 text-center text-gray-800 hover:bg-gray-300"
          activeclassname="active"
        >
          Generate
        </NavLink>
        <NavLink
          to="paraphrase"
          className="block p-4 text-center text-gray-800 hover:bg-gray-300"
          activeclassname="active"
        >
          ParaPhraser
        </NavLink>
        <NavLink
          to="translate"
          className="block p-4 text-center text-gray-800 hover:bg-gray-300"
          activeclassname="active"
        >
          Translator
        </NavLink>
      </div>
    </div>
  );
}
