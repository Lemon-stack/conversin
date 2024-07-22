
// import { useRef, useState } from "react";
// export default function Paraphrase() {
//     const promptRef = useRef();
//   const [style, setStyle] = useState("standard");
//   const [generatedPost, setGeneratedPost] = useState("");

//   //convert results
//   function processMarkdown(text) {
//     // Convert headers
//     text = text.replace(/^###\s(.*)$/gm, "<h3>$1</h3>");
//     text = text.replace(/^##\s(.*)$/gm, "<h2>$1</h2>");
//     text = text.replace(/^#\s(.*)$/gm, "<h1>$1</h1>");

//     // Convert bold
//     text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

//     // Convert italic
//     text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

//     // Convert lists
//     text = text.replace(/^\s*-\s(.*)$/gm, "<li>$1</li>");
//     text = text.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

//     // Convert line breaks
//     text = text.replace(/\n/g, "<br>");

//     return text;
//   }

//   const API_KEY = import.meta.env.VITE_GAPI;
//   const genAI = new GoogleGenerativeAI(API_KEY);

//   const contextPrompt = `As an AI LinkedIn post creator, generate engaging, professional content optimized for the platform, you'd use less of emojis. Focus on delivering value to the audience.`;

//   const stylePrompts = {
//     simplify: `
// create a simplified and engaging post
// - Focus on one main idea or insight
// - Use a conversational tone, remove unnecessary jagons making it understandable to a lay man
// - Add 2-3 relevant non-pascal cased hashtags`,

//     shorten: `
// create a short, punchy post that grabs attention quickly:
// - Aim for about 80-100 words
// - Focus on ONE clear, valuable takeaway
// - Use a 'smart casual' tone for writing
// - use 2 relevant hashtags, but don't overdo it
// - Wrap it up with a clever one-liner that ties it all together`,

//     humourous: `
// create a humuorous post
// - Keep it clean and work-friendly - we're going for laughs, not HR violations
// - Throw in an emoji or two, but don't go overboard
// - Add a couple of hashtags - one serious, one funny
// - aiming for "chuckle and nod" rather than "laugh out loud".`,

//     formalize: `
// make a formal post
// - Keep it clean and work-friendly - we're going for laughs, not HR violations
// - Throw in an emoji or two, but don't go overboard
// - Add a couple of hashtags - one serious, one funny
// - aiming for "chuckle and nod" rather than "laugh out loud".`,


//     lengthen: `
// create a lengthy insightful post (~250-300 words):
// - Start with an attention-grabbing opener
// - Dive into 3-4 key points
// - Offer practical, actionable advice if required.
// - Include 2 relevant hashtags (lowercase)
// Style Guide:
// - Use a conversational yet professional tone
// - Break up text with short paragraphs for readability
// - Include transitions between points for smooth flow
// - Aim for clarity while showcasing expertise

// Keep it smart and engaging, Aim to start a conversation, not deliver a lecture. Make it meaty but readable!`,
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const post = await generateLinkedInPost(promptRef.current.value);
//     setGeneratedPost(post);
//   }

//   async function generateLinkedInPost(userPrompt) {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const fullPrompt = `${contextPrompt}

// ${stylePrompts[style]}

// the post must stictly be based on this template: ${userPrompt}

// Post:`;


//     const result = await model.generateContent(fullPrompt);
//     const response = await result.response;
//     return processMarkdown(response.text());
//   }
// return(
//   <>
//   <div className="flex space-y-4 justify-envenly px-[8%] pt-10">
//     <div className="flex flex-col space-y-4 mr-8">
//       <h2>Post Style</h2>
//       <div className="space-x-4 space-y-4 grid grid-cols-3">
//         <button
//           onClick={() => setStyle("simplify")}
//           className={`px-4 py-2 rounded ${
//             style === "simplify"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200"
//           }`}
//         >
//           Simplify
//         </button>
//         <button
//           onClick={() => setStyle("shorten")}
//           className={`px-4 py-2 rounded ${
//             style === "shorten"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200"
//           }`}
//         >
//           Shorten
//         </button>
//         <button
//           onClick={() => setStyle("formalize")}
//           className={`px-4 py-2 rounded ${
//             style === "formalize"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200"
//           }`}
//         >
//           Formalize
//         </button>

//         <button
//           onClick={() => setStyle("humourous")}
//           className={`px-4 py-2 rounded ${
//             style === "humourous"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200"
//           }`}
//         >
//           Humourous
//         </button>

//         <button
//           onClick={() => setStyle("lengthen")}
//           className={`px-4 py-2 rounded ${
//             style === "lengthen"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200"
//           }`}
//         >
//           Lengthen
//         </button>
//       </div>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
//         <textarea
//         rows={10}
//         cols={20}
//           type="text"
//           ref={promptRef}
//           className="border p-2 rounded"
//           placeholder="Enter your post topic"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Generate Post
//         </button>
//       </form>
//     </div>
//     {generatedPost && (
//       <div className="mt-4 p-4 border rounded">
//         <h3 className="font-semibold text-lg text-start mb-4">
//           Generated Post:
//         </h3>
//         <div
//           className="flex flex-col justify-start text-start"
//           dangerouslySetInnerHTML={{ __html: generatedPost }}
//         />
//       </div>
//     )}
//   </div>


export default function Paraphrase() {
  return (
    <div>Paraphrase</div>
  )
}

// </>
// )}
