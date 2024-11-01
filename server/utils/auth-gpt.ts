// Make sure to include these imports:

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

const prompt = "Write a story about a magic backpack.";

(async () => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
})();