import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Message = ({ message }) => {
  const profile = useSelector((state) => state.googleSignin);
  const userName = profile.user?.displayName;
  return (
    <div
      className={`flex flex-col justify-start relative p-2 text-sm rounded-md bg-[#0d0d0f] mb-4 ${
        message.name === userName ? "bg-zinc-900 mr-auto" : "text-start"
      }`}
    >

      <Avatar className="size-6 border absolute top-0 -left-8">
        <AvatarImage className="p-0.5 rounded-full" src={`${message.name === userName? message.avatar:"/Postin-logo.png"}`} />
        <AvatarFallback className="text-zinc-900">CN</AvatarFallback>
      </Avatar>

      <div className="chat-bubble__right">
        <p
          className="user-message"
          dangerouslySetInnerHTML={{ __html: message.text }}
        />
      </div>
      {message.name === "Postin" ? (
        <section className="flex justify-end gap-1">
          <div className="bg-teal-500 hover:bg-teal-700 cursor-pointer rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="bg-teal-500 hover:bg-teal-700 cursor-pointer rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};
export default Message;
