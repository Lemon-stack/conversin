import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "@/client/firebase";
import {
  arrayUnion,
  collection,
  doc,
  FieldValue,
  Firestore,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { generateContent, generateName } from "@/api/generateContent";
import Message from "./message";
import { useParams } from "react-router-dom";

export default function Main({ docRef }) {
  const { chatId } = useParams();
  // time record for sent messages
  const date = Date();
  const [messages, setMessages] = useState([]);

  const [isGenerating, setIsGenerating] = useState(false);
  // const [timeAway, setTimeAway] = useState(0);
  // const [lastLeaveTime, setLastLeaveTime] = useState(null);
  const messageRef = useRef();
  const profile = useSelector((state) => state.googleSignin);
  const userName = profile.user?.displayName;
  // // Create a reference to the 'messages' collection inside the user's document

  // async function getFolderName() {
  //   const prompt = `summarise this text in a maximum of 4 words`;
  //   const result = await generateName();
  // }
  async function sendMessage() {
    setIsGenerating(true);
    const messageText = messageRef?.current.value.trim();
    if (messageText === "") {
      console.log("Please enter a message.");
      return;
    }
    try {
      // Add the message to the 'messages' subcollection of the user's document
      const userMessage = {
        text: messageText,
        name: userName,
        avatar: profile.user?.photoURL,
        createdAt: serverTimestamp(),
        uid: profile.user?.uid,
      };
      const res = await updateDoc(docRef, {
        messages: arrayUnion(userMessage),
      });
      console.log(res);
      aiResponse(messageText);
      messageRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  }

  async function aiResponse(message) {
    const prompt = `You're a conversational AI for crafting LinkedIn posts. Ask how you can assist. You're to help in creating engaging posts through conversation.
    avoid unneecessary jagons and maintain mid-casual

Current context: ${message}`;

    const result = await generateContent(prompt);
    try {
      const aiResponse = {
        text: result,
        name: "Postin",
        avatar: " ",
        createdAt: serverTimestamp(),
        uid: "1",
      };

      await updateDoc(docRef, {
        messages: arrayUnion(aiResponse),
      });
    } catch (e) {
      console.log(e);
    }
    setIsGenerating(false);
  }

  useEffect(() => {
    if (!profile.user?.uid) return; // Ensure uid is available

    const fetchMessages = async () => {
      try {
        const docRef = doc(
          db,
          `users/${profile.user?.uid}/chatHistory/${chatId}`
        );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fetchedMessages = data.messages || [];

          const sortedMessages = fetchedMessages.sort((a, b) => {
            const aDate = new Date(a.createdAt);
            const bDate = new Date(b.createdAt);
            return aDate - bDate;
          });
          setMessages(sortedMessages);
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, [profile.user?.uid, chatId]);

  // checking users stay time-stay
  // const handleVisibilityChange = () => {
  //   if (document.hidden) {
  //     // User leaves the app
  //     setLastLeaveTime(Date.now());
  //   } else {
  //     // User returns to the app
  //     if (lastLeaveTime) {
  //       const timeSpentAway = Date.now() - lastLeaveTime;
  //       setTimeAway(prevTimeAway => prevTimeAway + timeSpentAway);
  //     }
  //     setLastLeaveTime(null); // Reset last leave time
  //   }
  // };

  // document.addEventListener('visibilitychange', handleVisibilityChange);

  // document.removeEventListener('visibilitychange', handleVisibilityChange);

  // const formatTime = (ms) => {
  //   const seconds = Math.floor(ms / 1000);
  //   const minutes = Math.floor(seconds / 60);
  //   const hours = Math.floor(minutes / 60);

  //   return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  // };

  return (
    <div className="text-gray-50 py-2 relative bg-[#0d0d0f] px-auto flex-col flex w-full h-screen items-center">
      <section className="w-full flex justify-end pr-6">
        <p>{userName}</p>
      </section>
      <section className="flex flex-col px-16 max-h-screen overflow-y-scroll custom-scrollbar-two pt-6 pb-24 lg:px-40">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </section>

      <span className="min-h-[4.2rem] bg-[#0d0d0f] z-20 w-full absolute bottom-0"></span>
      <div className="w-full absolute bottom-6 z-20 flex px-[6%] md:px-[20%] rounded-md">
        <form
          className="w-full flex bg-zinc-900 items-end rounded-xl p-2.5"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <textarea
            ref={messageRef}
            className="custom-scrollbar w-full border-0 mr-1.5 flex items-center bg-zinc-900 z-30 focus:ring-0 max-h-24 outline-none  text-gray-50 rounded-lg shadow-sm resize-none"
            placeholder="Type your message here..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />

          {!isGenerating ? (
            <button
              className="bg-teal-500 px-5 z-30 h-9 rounded-xl"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          ) : (
            <button className="bg-teal-500 px-5 z-30 h-9 rounded-xl">
              <svg
                aria-hidden="true"
                className="size-5 text-gray-50 animate-spin"
                viewBox="0 0 100 101"
                fill="#0694a2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#0694a2"
                />
              </svg>
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
