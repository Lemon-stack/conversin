const GPT4oMiniAPI = {
  endpoint: "https://api.openai.com/v1/chat/completions",
  apiKey: import.meta.env.VITE_OAPI,
};

const generateContent = async (prompt) => {
  try {
    const response = await fetch(GPT4oMiniAPI.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GPT4oMiniAPI.apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};

export default generateContent;
