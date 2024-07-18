import { Outlet } from "react-router-dom";
import Top from "../nav/top";
import Left from "../nav/left";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Top />
      <section className="flex">
        <Left />
        <Outlet />
      </section>
    </div>
  );
}
