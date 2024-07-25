import { NavLink } from "react-router-dom";

export default function Left() {
  return (
    <div className="lg:flex hidden flex-col w-full h-full py-6 shadow-md">
      <h2 className="text-xl text-teal-500 font-semibold mb-6 mx-4">Postin</h2>
      <NavLink
        className={({ isActive }) =>
          `py-2 flex justify-start px-6 text-center text-gray-800 hover:bg-gray-100 hover:text-teal-500 ${
            isActive
              ? "text-teal-500 bg-teal-500/15 border-r-2 border-teal-500"
              : ""
          }`
        }
        to="main"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={18}
          height={18}
          className={({ isActive }) => `mr-2 ${isActive ? "text-white" : ""}`}
          fill={"none"}
        >
          <path
            d="M16 5C16 4.06812 16 3.60218 16.1522 3.23463C16.3552 2.74458 16.7446 2.35523 17.2346 2.15224C17.6022 2 18.0681 2 19 2C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5V9C22 9.93188 22 10.3978 21.8478 10.7654C21.6448 11.2554 21.2554 11.6448 20.7654 11.8478C20.3978 12 19.9319 12 19 12C18.0681 12 17.6022 12 17.2346 11.8478C16.7446 11.6448 16.3552 11.2554 16.1522 10.7654C16 10.3978 16 9.93188 16 9V5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 19C16 18.0681 16 17.6022 16.1522 17.2346C16.3552 16.7446 16.7446 16.3552 17.2346 16.1522C17.6022 16 18.0681 16 19 16C19.9319 16 20.3978 16 20.7654 16.1522C21.2554 16.3552 21.6448 16.7446 21.8478 17.2346C22 17.6022 22 18.0681 22 19C22 19.9319 22 20.3978 21.8478 20.7654C21.6448 21.2554 21.2554 21.6448 20.7654 21.8478C20.3978 22 19.9319 22 19 22C18.0681 22 17.6022 22 17.2346 21.8478C16.7446 21.6448 16.3552 21.2554 16.1522 20.7654C16 20.3978 16 19.9319 16 19Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12H8C9.88562 12 10.8284 12 11.4142 12.5858C12 13.1716 12 14.1144 12 16V18C12 19.8856 12 20.8284 11.4142 21.4142C10.8284 22 9.88562 22 8 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2 5C2 4.06812 2 3.60218 2.15224 3.23463C2.35523 2.74458 2.74458 2.35523 3.23463 2.15224C3.60218 2 4.06812 2 5 2H9C9.93188 2 10.3978 2 10.7654 2.15224C11.2554 2.35523 11.6448 2.74458 11.8478 3.23463C12 3.60218 12 4.06812 12 5C12 5.93188 12 6.39782 11.8478 6.76537C11.6448 7.25542 11.2554 7.64477 10.7654 7.84776C10.3978 8 9.93188 8 9 8H5C4.06812 8 3.60218 8 3.23463 7.84776C2.74458 7.64477 2.35523 7.25542 2.15224 6.76537C2 6.39782 2 5.93188 2 5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <span className="ml-1">Dashboard</span>
      </NavLink>
      <h2 className="ml-6 text-sm font-semibold mb-3 mt-5 uppercase">Tools</h2>
      <NavLink
        to="generate"
        className={({ isActive }) =>
          `py-2 flex justify-start px-6 items-center text-gray-800 hover:text-teal-500 ${
            isActive
              ? "text-teal-500 bg-teal-500/15 border-r-2 border-teal-500"
              : ""
          }`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={16}
          height={16}
          // color="#ffffff"
          className={({ isActive }) => `mr-2 ${isActive ? "text-white" : ""}`}
          fill={"none"}
        >
          <path
            d="M10 6C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 12.8302 22 11.8419 21.965 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 2L18.2948 2.7966C18.6813 3.84117 18.8746 4.36345 19.2556 4.74445C19.6366 5.12545 20.1588 5.31871 21.2034 5.70523L22 6L21.2034 6.29477C20.1588 6.68129 19.6366 6.87455 19.2556 7.25555C18.8746 7.63655 18.6813 8.15883 18.2948 9.2034L18 10L17.7052 9.2034C17.3187 8.15883 17.1254 7.63655 16.7444 7.25555C16.3634 6.87455 15.8412 6.68129 14.7966 6.29477L14 6L14.7966 5.70523C15.8412 5.31871 16.3634 5.12545 16.7444 4.74445C17.1254 4.36345 17.3187 3.84117 17.7052 2.7966L18 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-1">Generate</span>
      </NavLink>

      <NavLink
        to="paraphrase"
        className={({ isActive }) =>
          `py-2 flex justify-start px-6 items-center text-center text-gray-800 hover:text-teal-500 ${
            isActive
              ? "text-teal-500 bg-teal-500/15 border-r-2 border-teal-500"
              : ""
          }`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={17}
          height={17}
          className={({ isActive }) => `mr-2 ${isActive ? "text-white" : ""}`}
          fill={"none"}
        >
          <path
            d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="ml-1">Paraphraser</span>
      </NavLink>
      <NavLink
        to="translate"
        className={({ isActive }) =>
          `py-2 px-6 flex justify-start items-center text-center text-gray-800 hover:text-teal-500 ${
            isActive
              ? "text-teal-500 bg-teal-500/15 border-r-2 border-teal-500"
              : ""
          }`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={17.8}
          height={17.8}
          className={({ isActive }) => `mr-2 ${isActive ? "text-white" : ""}`}
          fill={"none"}
        >
          <path
            d="M5 5.82759H7.7M11 5.82759H9.5M7.7 5.82759H9.5M7.7 5.82759V5M9.5 5.82759C9.18351 6.95937 8.52075 8.02923 7.76429 8.96946M5.83571 11C6.44723 10.4377 7.13788 9.74802 7.76429 8.96946M7.76429 8.96946C7.37857 8.51724 6.83857 7.78558 6.68429 7.45455M7.76429 8.96946L8.92143 10.1724"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 19L14.3333 17M18.5 19L17.6667 17M14.3333 17L16 13L17.6667 17M14.3333 17H17.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 10V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8C2 10.8284 2 12.2426 2.87868 13.1213C3.75736 14 5.17157 14 8 14H10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 16C10 13.1716 10 11.7574 10.8787 10.8787C11.7574 10 13.1716 10 16 10C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22C13.1716 22 11.7574 22 10.8787 21.1213C10 20.2426 10 18.8284 10 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 16.5C4 17.9045 4 18.6067 4.33706 19.1111C4.48298 19.3295 4.67048 19.517 4.88886 19.6629C5.39331 20 6.09554 20 7.5 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-0.5">Translator</span>
      </NavLink>

      <h2 className="ml-6 text-sm font-semibold mt-6 mb-1 uppercase">
        Settings
      </h2>
      <NavLink
        to="plans"
        className={({ isActive }) =>
          `py-2 px-6 flex justify-start items-center text-center text-gray-800 hover:text-teal-500 ${
            isActive
              ? "text-teal-500 bg-teal-500/15 border-r-2 border-teal-500"
              : ""
          }`
        }
      >
        <svg
          fill="none"
          height="15"
          viewBox="0 0 15 15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85344 8.84842L7.20711 8.49498L6.50023 7.78764L6.14656 8.14108L6.85344 8.84842ZM9 10.4935V10.9935H10V10.4935H9ZM10 9.49414V8.99414H9V9.49414H10ZM9 1.49939V1.99939H10V1.49939H9ZM10 0.5V0H9V0.5H10ZM4.5 4.99683H4V5.99683H4.5V4.99683ZM5.5 5.99683H6V4.99683H5.5V5.99683ZM13.5 4.99683H13V5.99683H13.5V4.99683ZM14.5 5.99683H15V4.99683H14.5V5.99683ZM12.1466 2.14512L11.7929 2.49856L12.4998 3.20589L12.8534 2.85244L12.1466 2.14512ZM13.8534 1.85305L14.2071 1.49961L13.5002 0.792283L13.1466 1.14573L13.8534 1.85305ZM5.85345 1.14573L5.49978 0.792283L4.79289 1.49961L5.14655 1.85305L5.85345 1.14573ZM6.14655 2.85244L6.50022 3.20589L7.20711 2.49856L6.85345 2.14512L6.14655 2.85244ZM12.8534 8.14109L12.4998 7.78764L11.7929 8.49497L12.1466 8.84841L12.8534 8.14109ZM13.1466 9.8478L13.5002 10.2012L14.2071 9.49393L13.8534 9.14048L13.1466 9.8478ZM0.853438 14.8445L6.85344 8.84842L6.14656 8.14108L0.146562 14.1372L0.853438 14.8445ZM10 10.4935V9.49414H9V10.4935H10ZM10 1.49939V0.5H9V1.49939H10ZM4.5 5.99683H5.5V4.99683H4.5V5.99683ZM13.5 5.99683H14.5V4.99683H13.5V5.99683ZM12.8534 2.85244L13.8534 1.85305L13.1466 1.14573L12.1466 2.14512L12.8534 2.85244ZM5.14655 1.85305L6.14655 2.85244L6.85345 2.14512L5.85345 1.14573L5.14655 1.85305ZM12.1466 8.84841L13.1466 9.8478L13.8534 9.14048L12.8534 8.14109L12.1466 8.84841Z"
            fill="black"
            className="fill-current"
          />
        </svg>
        <span className="ml-1">Plans</span>
      </NavLink>
      <NavLink
        to="guide"
        className={({ isActive }) =>
          `py-2 px-6 flex justify-start items-center text-center text-gray-800 hover:text-teal-500 ${
            isActive
              ? "text-teal-500 bg-teal-500/15 border-r-2 border-teal-500"
              : ""
          }`
        }
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span className="ml-1">Help</span>
      </NavLink>
    </div>
  );
}
