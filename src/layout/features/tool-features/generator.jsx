// import { Toggle } from "@/components/ui/toggle";

import { useRef, useState } from "react";
import generateContent from "@/api/generateContent";
export default function Generator() {
  const promptRef = useRef();
  const [postStyle, setPostStyle] = useState("standard");
  const [generatedPost, setGeneratedPost] = useState("");

  const contextPrompt = `Create an engaging, professional LinkedIn post. Minimal emojis. Deliver value.`;

  const stylePrompts = {
    standard: `
LinkedIn post (120-200 words):
- Engaging hook
- One main idea
- Conversational tone
- Example or data point
- Question or call-to-action
- 2-3 relevant hashtags
Informative yet conversational`,

    concise: `
Short LinkedIn post (80-100 words):
- Attention-grabbing opener
- One clear takeaway
- Smart casual tone
- Brief call-to-action or question
- 2 hashtags
Punchy and valuable`,

    elaborate: `
Insightful LinkedIn post (250-300 words):
- Attention-grabbing opener
- 3-4 key points with data/examples
- Industry impact
- Practical advice
- Thought-provoking question
- 2-3 hashtags
Engaging and conversation-starting`,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const userPrompt = promptRef.current.value;
    const fullPrompt = `${contextPrompt}${stylePrompts[postStyle]}. Create a LinkedIn post about: ${userPrompt}`;

    const result = await generateContent(fullPrompt);
    setGeneratedPost(result);
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
