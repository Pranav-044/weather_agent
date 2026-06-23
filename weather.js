const axios = require("axios");

async function getWeather() {
    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: "Bangalore",
                units: "metric",
                appid: process.env.OPENWEATHER_API_KEY
            }
        }
    );

    return response.data;
}

module.exports = { getWeather };