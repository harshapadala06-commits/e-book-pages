import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "dummy_key" });

const LOCAL_TIPS = [
  "Optimize your bio to clearly state what you do and who you help in the first 3 seconds of a visit.",
  "Reply to every comment with a question within the first hour to double your engagement rate.",
  "Use 3-5 SEO keywords in your caption instead of 30 generic hashtags.",
  "Post Reels that loop seamlessly; watch time is the #1 ranking factor in 2025.",
  "Audit your following: remove ghost followers to increase your engagement percentage.",
  "Use the 'Green Screen' effect to comment on trending industry news for instant authority.",
  "Create a 'Start Here' highlight to convert new visitors into followers immediately.",
  "Collaborate with accounts that have your ideal audience but aren't direct competitors.",
  "Stop posting watermarked TikToks; Instagram's algorithm actively demotes them.",
  "Write captions that encourage 'Saves'—it is the highest value metric for algorithmic reach."
];

export const generateInstagramTip = async (): Promise<string> => {
  try {
    // If no API key is set in the environment, skip straight to local tips
    if (!process.env.API_KEY) {
       throw new Error("No API Key configured");
    }

    const model = 'gemini-2.5-flash';
    const prompt = "Give me one short, highly actionable, and unconventional tip for growing an Instagram account in 2025. Keep it under 50 words. Focus on engagement or content strategy. Do not start with 'Here is a tip'. Just give the tip directly.";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || LOCAL_TIPS[Math.floor(Math.random() * LOCAL_TIPS.length)];
  } catch (error) {
    console.log("Using local intelligence fallback.");
    // Return a random tip from the local curated list
    return LOCAL_TIPS[Math.floor(Math.random() * LOCAL_TIPS.length)];
  }
};