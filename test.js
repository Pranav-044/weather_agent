const OpenAI = require("openai");
require("dotenv").config();

const client = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1"
});
console.log("Base URL:", client.baseURL);
async function test() {
  try {
    const response = await client.chat.completions.create({
      model: "nvidia/nemotron-3-super-120b-a12b",
      messages: [
        {
          role: "user",
          content: "Say hello"
        }
      ]
    });

    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

test();