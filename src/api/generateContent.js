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

const generateContent = async (userPrompt) => {
  const API_KEY = import.meta.env.VITE_GAPI;
  const genAI = new GoogleGenerativeAI(API_KEY);

  // Convert Markdown to HTML
  function processMarkdown(text) {
    // Convert headers
    text = text.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
    text = text.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>");
    text = text.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");
    
    // Convert bold and italic
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
    
    // Convert lists
    text = text.replace(/^\s*-\s+(.*)$/gm, "<li>$1</li>");
    
    // Wrap <li> elements with <ul>
    text = text.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");
    
    // Remove multiple <ul> tags
    text = text.replace(/<\/ul>\s*<ul>/g, '');
    
    // Convert line breaks to <br> and handle consecutive breaks
    text = text.replace(/\n\n+/g, "</p><p>");
    text = text.replace(/\n/g, "<br>");
    
    // Wrap paragraphs in <p> tags, but avoid extra <p> tags
    text = "<p>" + text + "</p>";
    text = text.replace(/<p><\/p>/g, ''); // Remove empty paragraphs
    text = text.replace(/<\/p>\s*<p>/g, "</p><p>");
    
    return text;
}


  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage(userPrompt);
    const response = await result.response.text();
    return processMarkdown(response)
};

export default generateContent;

