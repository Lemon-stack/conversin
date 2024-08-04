import Main from "./generationContainer/home";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Layout() {
  return (
    <div className="grid lg:grid-cols-[19%_1fr]">
      <div className="hidden w-full lg:flex flex-col p-4 text-gray-100">
        <section className="flex flex-col">
          <div>
            Post<span className="bg-teal-500 rounded-sm ml-0.5 px-1">in</span>
          </div>
          <button className="flex my-4 justify-start items-center px-3 font-thin bg-teal-500 rounded-full py-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-[1.2rem] mr-2 -mb-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-sm">New chat</span>
          </button>
        </section>
      </div>

      {/* drawer menu for small screen */}
      <Sheet>
        <SheetTrigger className="text-gray-50 lg:hidden absolute top-2 left-4 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>No fear</SheetTitle>
            <SheetDescription>
              No fear bigman, I still dey do the needful for here!
              Hope say e dey go as you want?
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Main />
    </div>
  );
}
