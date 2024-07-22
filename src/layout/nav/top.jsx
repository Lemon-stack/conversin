import { useSelector } from "react-redux";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

export default function Top() {
  const profile = useSelector((state) => state.googleSignin);
  const username = profile.user?.displayName;
  return (
    <section className="flex items-center w-full justify-between lg:justify-end flex-row-reverse py-2 shadow-md mb-4">
      <div className="z-20 py-0.5 px-2 rounded-md">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <svg
                  className="w-5 h-5 text-teal-500 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                    clipRule="evenodd"
                  />
                </svg>
                {username}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="min-w-40 flex flex-col min-h-20 p-2">
                    <button className="py-0.5 flex justify-center items-center px-3 w-full text-gray-50 bg-teal-500 rounded-md">
                      Signout
                      <svg
                        className="w-4 h-4 ml-1 text-gray-50"
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
                          d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                        />
                      </svg>
                    </button>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="lg:hidden -mb-1.5 ml-6">
        <Sheet>
          <SheetTrigger>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Postin</SheetTitle>
              <SheetDescription>
              <div className="flex-col w-full h-full py-6">
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
      <h2 className="ml-6 text-sm font-semibold mb-3 mt-5 text-start uppercase">Tools</h2>
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
          width={18}
          height={18}
          className={({ isActive }) => `mr-2 ${isActive ? "text-white" : ""}`}
          fill={"none"}
        >
          <path
            d="M6.08938 14.9992C5.71097 14.1486 5.5 13.2023 5.5 12.2051C5.5 8.50154 8.41015 5.49921 12 5.49921C15.5899 5.49921 18.5 8.50154 18.5 12.2051C18.5 13.2023 18.289 14.1486 17.9106 14.9992"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 1.99921V2.99921"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 11.9992H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 11.9992H2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.0704 4.92792L18.3633 5.63503"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.6368 5.636L4.92969 4.92889"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.517 19.3056C15.5274 18.9788 15.9326 18.054 16.0466 17.1238C16.0806 16.8459 15.852 16.6154 15.572 16.6154L8.47685 16.6156C8.18725 16.6156 7.95467 16.8614 7.98925 17.1489C8.1009 18.0773 8.3827 18.7555 9.45345 19.3056M14.517 19.3056C14.517 19.3056 9.62971 19.3056 9.45345 19.3056M14.517 19.3056C14.3955 21.2506 13.8338 22.0209 12.0068 21.9993C10.0526 22.0354 9.60303 21.0833 9.45345 19.3056"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
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
          width={24}
          height={24}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          className={({ isActive }) =>
            `mr-2 ${isActive ? "text-teal-500" : ""}`
          }
        >
          <path
            d="M394.11 303.93V76.58c0-16.19-13.18-29.37-29.37-29.37H245.68c-16.19 0-29.37 13.18-29.37 29.37v102.11h-69.05c-16.19 0-29.37 13.18-29.37 29.37v227.36c0 16.19 13.18 29.37 29.37 29.37h119.06c16.19 0 29.37-13.18 29.37-29.37V333.3h69.05c16.19 0 29.37-13.17 29.37-29.37zM263.69 432.79h-113.8v-222.1h113.8v222.1zm98.42-131.49h-66.42v-93.24c0-16.19-13.18-29.37-29.37-29.37h-18.01V79.21h113.8V301.3zM446.62 431.1c8.84 0 16-7.16 16-16v-52.89c0-.53-.03-1.06-.08-1.59-.02-.23-.06-.45-.1-.67-.04-.29-.08-.58-.13-.87-.05-.26-.12-.52-.19-.77-.06-.25-.12-.5-.19-.75-.08-.25-.17-.5-.26-.75-.09-.24-.17-.49-.27-.73-.1-.23-.21-.46-.32-.68-.12-.25-.23-.49-.35-.74-.12-.22-.25-.43-.38-.64-.14-.24-.27-.47-.43-.71-.16-.24-.33-.46-.5-.68-.14-.19-.27-.39-.43-.57-.67-.82-1.42-1.56-2.23-2.23-.19-.15-.38-.28-.57-.43-.23-.17-.45-.35-.69-.5-.23-.15-.47-.29-.7-.43-.21-.13-.42-.26-.64-.38-.24-.13-.49-.24-.73-.35-.23-.11-.45-.22-.69-.32-.24-.1-.48-.18-.72-.26-.25-.09-.5-.19-.75-.26-.24-.07-.49-.13-.73-.19-.26-.07-.52-.14-.78-.19-.28-.06-.57-.09-.85-.13-.23-.03-.46-.08-.69-.1-.53-.05-1.05-.08-1.58-.08h-52.89c-8.84 0-16 7.16-16 16s7.16 16 16 16H408l-78.48 78.48c-6.25 6.25-6.25 16.38 0 22.63 3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.56 11.31-4.69l78.48-78.48v14.27c0 8.83 7.17 15.99 16 15.99zM49.38 96.9v52.89c0 .53.03 1.06.08 1.59.02.23.06.45.1.67.04.29.08.58.13.87.05.26.12.52.19.77.06.25.12.5.19.75.08.25.17.5.26.75.09.24.17.49.27.73.1.23.21.46.32.68.12.25.23.49.35.74.12.22.25.43.38.64.14.24.27.47.43.71.16.24.33.46.5.68.14.19.27.39.43.57.67.82 1.42 1.56 2.23 2.23.18.15.38.28.57.43.23.17.45.35.69.51.23.15.46.28.7.42.22.13.43.26.65.38.24.13.48.23.73.35.23.11.46.22.69.32.24.1.48.18.72.26.25.09.5.19.76.27.24.07.48.13.72.19.26.07.53.14.79.19.28.06.56.09.84.13.24.03.47.08.71.1.52.05 1.05.08 1.58.08h52.9c8.84 0 16-7.16 16-16s-7.16-16-16-16H104l78.48-78.48c6.25-6.25 6.25-16.38 0-22.63s-16.38-6.25-22.63 0l-78.48 78.48V96.9c0-8.84-7.16-16-16-16s-15.99 7.16-15.99 16z"
            fill="#2ec4b5"
            className="fill-current"
          ></path>
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
          width={32}
          height={32}
          className={({ isActive }) =>
            `mr-2 ${isActive ? "text-teal-500" : ""}`
          }
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M380.97 224.59h-68.455a74.486 74.486 0 0 0 .88-11.415v-73.178a74.32 74.32 0 0 0-74.236-74.236H131.03a74.32 74.32 0 0 0-74.236 74.236v73.178a74.32 74.32 0 0 0 74.236 74.236h68.472a73.82 73.82 0 0 0-.896 11.414v73.179a74.32 74.32 0 0 0 74.236 74.235h108.13a74.32 74.32 0 0 0 74.235-74.235v-73.179a74.32 74.32 0 0 0-74.236-74.235ZM72.795 213.175v-73.178A58.302 58.302 0 0 1 131.03 81.76h108.129a58.302 58.302 0 0 1 58.236 58.236v73.178a58.301 58.301 0 0 1-58.236 58.236H131.03a58.302 58.302 0 0 1-58.236-58.236ZM386.97 316.809h-19.5a120.722 120.722 0 0 1-28.823 50.691 124.523 124.523 0 0 0 22.002 14.08l10.884 5.465a8 8 0 1 1-7.18 14.3l-10.884-5.466a140.143 140.143 0 0 1-26.6-17.308 139.38 139.38 0 0 1-26.529 17.308l-10.883 5.465a8 8 0 0 1-7.18-14.3l10.883-5.464a123.73 123.73 0 0 0 21.943-14.064 123.957 123.957 0 0 1-20.202-28.643 8 8 0 1 1 14.256-7.265 107.983 107.983 0 0 0 17.714 25.062 105.445 105.445 0 0 0 23.895-39.86h-83.926a8 8 0 0 1 0-16h52.065v-24.175a8 8 0 0 1 16 0v24.174h52.065a8 8 0 0 1 0 16Z"
            fill=""
            className="fill-current"
          ></path>
          <path
            d="M199.407 133.608c-2.612-6.461-8.096-10.475-14.313-10.475s-11.7 4.014-14.313 10.476l-34.535 85.431a8 8 0 1 0 14.834 5.997l12.948-32.03h42.133l12.947 32.03a8 8 0 1 0 14.834-5.997Zm-28.912 43.4 14.6-36.115 14.598 36.115Z"
            fill=""
            className="fill-current"
          ></path>
        </svg>
        <span className="ml-0.5">Translator</span>
      </NavLink>

      <h2 className="ml-6 text-sm text-start font-semibold mt-6 mb-1 uppercase">
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
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
