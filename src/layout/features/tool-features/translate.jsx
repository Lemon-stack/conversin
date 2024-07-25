import { useRef, useState } from "react";
import generateContent from "@/api/generateContent";
const Translate = () => {

  const [generating, setGenerating] = useState(false);
  const promptRef = useRef();
  const [outputLanguage, setOutputLanguage] = useState("French");
  const [generatedPost, setGeneratedPost] = useState("");
  const contextPrompt = `Translate this LinkedIn post accurately, maintaining tone and professional context:`;

  const translate = async () => {
    setGenerating(true);
    let fullPrompt = `${contextPrompt}
${promptRef.current.value}
To ${outputLanguage}. Preserve hashtags and @mentions.`;

    const result = await generateContent(fullPrompt);
    setGeneratedPost(result);
    setGenerating(false)    
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex">
        <p>TO</p>
        <select
          name="language"
          value={outputLanguage}
          onChange={(e) => setOutputLanguage(e.target.value)}
        >
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Dutch">Dutch</option>
        </select>
      </section>

      <textarea ref={promptRef} className="p-2" cols={50} rows={14}></textarea>
      {!generating ? (
        <button
          className="bg-black rounded-md p-2 text-white"
          onClick={translate}
        >
          translate
        </button>
      ) : (
        <button className="bg-gray-200 rounded-md p-2" disabled>
          Translating ....
        </button>
      )}

      {generatedPost && (
        <div dangerouslySetInnerHTML={{ __html: generatedPost }} />
      )}
    </div>
  );
};
export default Translate;
