require("dotenv").config();
const cron = require("node-cron");

const { getWeather } = require("./weather");
const { sendEmail } = require("./email");
const { runAgent } = require("./agent");

async function main() {
    const timestamp = new Date().toLocaleString();
    console.log(`\n[${timestamp}] Getting weather...`);

    try {
        const weather = await getWeather();

        console.log(`[${timestamp}] Generating report...`);
        const report = await runAgent(weather);

        console.log(`\n--- REPORT PREVIEW ---`);
        console.log(report);
        console.log(`----------------------\n`);

        console.log(`[${timestamp}] Sending email...`);
        await sendEmail(
            "Bangalore Weather Update",
            report
        );

        console.log(`[${timestamp}] Done.`);
    } catch (error) {
        console.error(`[${timestamp}] ERROR:`, error.message);
    }
}

// 1. Run it immediately on startup
console.log("Starting Weather Agent...");
main();

// 2. Schedule it to run at minute 0 of every hour
// (e.g., 2:00, 3:00, 4:00, etc.)
cron.schedule("0 * * * *", () => {
    main();
});

console.log("\n[!] Agent is now running in the background.");
console.log("[!] Scheduled to send an email every hour on the hour.");
console.log("[!] Keep this terminal open to continue sending emails.\n");
