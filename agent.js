const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: "https://integrate.api.nvidia.com/v1"

});

async function runAgent(weatherData) {

    const prompt = `
You are an autonomous weather assistant.

Analyze the weather data and generate
a professional email update.

Weather Data:

${JSON.stringify(weatherData, null, 2)}
`;

    const response = await client.chat.completions.create({
    model: "nvidia/nemotron-3-super-120b-a12b",
    messages: [
        {
            role: "user",
            content: prompt
        }
    ]
});

    return response.choices[0].message.content;
}

module.exports = { runAgent };