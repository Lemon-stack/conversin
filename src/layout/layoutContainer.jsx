import { collection, doc, onSnapshot, query } from "firebase/firestore";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { db } from "@/client/firebase";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const profile = useSelector((state) => state.googleSignin);
  const [history, setHistory] = useState([]);
  let chatRef = "chat1";

  let docRef;

  if (profile.user?.uid) {
    docRef = doc(db, `users/${profile.user?.uid}/chatHistory/${chatRef}`);
  }

  useEffect(() => {
    if (!docRef) {
      return;
    }
    const q = query(
      collection(db, `users/${profile.user?.uid}/chatHistory`) // Path to collection
    );

    const history = onSnapshot(q, (QuerySnapshot) => {
      const fetchedHistory = [];
      QuerySnapshot.forEach((doc) => {
        fetchedHistory.push({ ...doc.data(), id: doc.id });
      });
      // Sort messages by createdAt field
      const sortedHistory = fetchedHistory.sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        return aDate - bDate;
      });
      setHistory(sortedHistory);
    });
    return () => history();
  }, [docRef, profile.user?.uid]);

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
          {history?.map((history) => (
            <div className="" key={history.id}>
              <button className="w-full flex px-2 text-sm py-1">
                {history.id}
              </button>
            </div>
          ))}
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
              No fear bigman, I still dey do the needful for here! Hope say e
              dey go as you want?
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Outlet context={{ docRef }} />
    </div>
  );
}
