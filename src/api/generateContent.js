// import OpenAI from "openai";

// const generateContent = async (prompt) => {
//   const openai = new OpenAI({
//     apiKey: import.meta.env.VITE_OAPI,
//   });

//   const maxRetries = 5;
//   let retries = 0;
//   let success = false;
//   let response;

//   while (!success && retries < maxRetries) {
//     try {
//       response = await openai.chat.completions.create({
//         messages: [{ role: "user", content: prompt }],
//         model: "gpt-4o-mini",
//       });

//       if (!response.ok) {
//         if (response.status === 429) {
//           retries++;
//           const delay = Math.pow(2, retries) * 1000; // Exponential backoff
//           console.log(`Rate limited. Retrying in ${delay / 1000} seconds...`);
//           await new Promise((resolve) => setTimeout(resolve, delay));
//         } else {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//       } else {
//         success = true;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   if (!success) {
//     throw new Error("Failed to generate content after multiple retries.");
//   }

//   const data = await response.json();
//   return data;
// };

// export default generateContent;

import { GoogleGenerativeAI } from "@google/generative-ai";
// import { useSelector } from "react-redux";
const generateContent = async (userprompt) => {
  // const profile = useSelector((state) => state.googleSignin);
  // const credits = profile.user?.credits;
  const API_KEY = import.meta.env.VITE_GAPI;
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  //convert results
  function processMarkdown(text) {
    // Convert headers
    text = text.replace(/^###\s(.*)$/gm, "<h3>$1</h3>");
    text = text.replace(/^##\s(.*)$/gm, "<h2>$1</h2>");
    text = text.replace(/^#\s(.*)$/gm, "<h1>$1</h1>");

    // Convert bold
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Convert italic
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Convert lists
    text = text.replace(/^\s*-\s(.*)$/gm, "<li>$1</li>");
    text = text.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

    // Convert line breaks
    text = text.replace(/\n/g, "<br>");

    return text;
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(userprompt);
  const response = await result.response;
  return processMarkdown(response.text());
};

export default generateContent;
