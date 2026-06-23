require("dotenv").config();

const { getWeather } = require("./weather");
const { sendEmail } = require("./email");
const { runAgent } = require("./agent");

async function main() {
    

    console.log("Getting weather...");

    const weather = await getWeather();

    console.log("Generating report...");

    const report = await runAgent(weather);

    console.log(report);

    console.log("Sending email...");

    await sendEmail(
        "Bangalore Weather Update",
        report
    );

    console.log("Done.");
}

main();