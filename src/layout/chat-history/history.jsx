export default function History() {
  return (
    <div className="w-full flex flex-col p-4 text-gray-100">
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
  );
}
