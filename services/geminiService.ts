import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateInstagramTip = async (): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = "Give me one short, highly actionable, and unconventional tip for growing an Instagram account in 2025. Keep it under 50 words. Focus on engagement or content strategy. Do not start with 'Here is a tip'. Just give the tip directly.";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Consistency is key! Post daily reels to maximize reach.";
  } catch (error) {
    console.error("Error generating tip:", error);
    return "Optimize your bio to clearly state what you do and who you help in the first 3 seconds of a visit.";
  }
};