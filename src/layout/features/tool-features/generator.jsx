// import { Toggle } from "@/components/ui/toggle";

import { useRef, useState } from "react";
import generateContent from "@/api/generateContent";
export default function Generator() {
  const promptRef = useRef();
  const [postStyle, setPostStyle] = useState("standard");
  const [generatedPost, setGeneratedPost] = useState("");
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

  const contextPrompt = `As an AI LinkedIn post creator, generate engaging, professional content optimized for the platform, you'd use less of emojis. Focus on delivering value to the audience.`;

  const stylePrompts = {
    standard: `
Create a balanced LinkedIn post (120-200 words):
- Open with an engaging hook, don't overdo it
- Focus on one main idea or insight
- Use a conversational tone, less of jagons
- Include a brief example or data point if relevant
- End with a question or call-to-action
- Add 2-3 relevant non-pascal cased hashtags

Aim for the sweet spot between concise and elaborate. Make it informative and engaging, like a regular conversation`,

    concise: `
Create a short, punchy LinkedIn post that grabs attention quickly:
- Aim for about 80-100 words
- Start with a zinger - something that makes people stop scrolling
- Focus on ONE clear, valuable takeaway for professionals
- Use a 'smart casual' tone for writing
- Wrap up with a brief call-to-action or thought-provoking question
- use 2 relevant hashtags, but don't overdo it!`,

    elaborate: `
Create an insightful LinkedIn post (~250-300 words):
- Start with an attention-grabbing opener
- Dive into 3-4 key points, backed by data or examples
- Explain the industry impact
- Offer practical, actionable advice
- End with a thought-provoking question
- Include 2-3 relevant hashtags (lowercase)

Keep it smart and engaging, Aim to start a conversation, not deliver a lecture. Make it meaty but readable!`,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const userPrompt = promptRef.current.value;
    const fullPrompt = `${contextPrompt}${stylePrompts[postStyle]}. Create a LinkedIn post about: ${userPrompt}`;
    const post = await generateLinkedInPost(fullPrompt);
    setGeneratedPost(post);
  }

  async function generateLinkedInPost(Prompt) {
    const result = await generateContent(Prompt);
    const response = await result.response;
    return processMarkdown(response.text());
  }
  return (
    <>
      <div className="flex justify-envenly px-[8%] pt-10">
        <div className="flex flex-col space-y-4 mr-8">
          <h2>Post Style</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setPostStyle("standard")}
              className={`px-4 py-2 rounded ${
                postStyle === "standard"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setPostStyle("concise")}
              className={`px-4 py-2 rounded ${
                postStyle === "concise"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Concise
            </button>
            <button
              onClick={() => setPostStyle("elaborate")}
              className={`px-4 py-2 rounded ${
                postStyle === "elaborate"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Elaborate
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="text"
              ref={promptRef}
              className="border p-2 rounded"
              placeholder="Enter your post topic"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Generate Post
            </button>
          </form>
        </div>
        {generatedPost && (
          <div className="mt-4 p-4 border rounded">
            <h3 className="font-semibold text-lg text-start mb-4">
              Generated Post:
            </h3>
            <div
              className="flex flex-col justify-start text-start"
              dangerouslySetInnerHTML={{ __html: generatedPost }}
            />
          </div>
        )}
      </div>
    </>
  );
}
