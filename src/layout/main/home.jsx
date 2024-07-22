import { Outlet } from "react-router-dom";
import Left from "../nav/left";
import Top from "../nav/top";

export default function Home() {
  return (
      <div className="flex w-full min-h-screen">
        <div className="hidden lg:block lg:w-[14%]">
          <Left />
          </div>
        <div className="w-full lg:w-[86%] flex flex-col">
          <Top/>
        <Outlet />
          </div>  
      </div>
  );
}
