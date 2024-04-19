


const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
// it is necessary to configure the dotenv files
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log(genAI.apiKey);
console.log(process.env.API_KEY);

// ...

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// ...

async function run() {
    const prompt = "tell me about the dsa and why it is some important"
  
    const result = await model.generateContent(prompt);
    console.log(result);

    const response = await result.response;
    console.log(response);
    const text = response.text();
    console.log(text);
  }
  
  run();