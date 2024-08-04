
import { useSelector } from "react-redux";
const Message = ({ message }) => {
    const profile = useSelector((state) => state.googleSignin);
    const userName = profile.user?.displayName;
  return (
    <div
      className={`flex flex-col justify-start p-2 text-sm rounded-md bg-[#0d0d0f] mb-4 ${message.name === userName ? "bg-zinc-900 mr-auto" : "text-start"}`}>
      {/* <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      /> */}
      <div className="chat-bubble__right">
        <p className="user-message" dangerouslySetInnerHTML={{ __html: message.text }}/>
      </div>
    </div>
  );
};
export default Message;