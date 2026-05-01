import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const OUT_DIR = resolve("recordings");
mkdirSync(OUT_DIR, { recursive: true });

const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 2,
  recordVideo: { dir: OUT_DIR, size: VIEWPORT },
  reducedMotion: "no-preference",
});
const page = await context.newPage();

// Apply before any paint: kill the white flash on first frame, and hide the
// Next.js dev indicator so it doesn't end up in the recording.
await page.addInitScript(() => {
  const style = document.createElement("style");
  style.textContent = `
    html, body { background: #0a0a0a !important; }
    nextjs-portal,
    [data-nextjs-toast],
    [data-nextjs-dev-tools-button],
    #__next-build-watcher,
    #__next-prerender-indicator { display: none !important; }
  `;
  (document.head || document.documentElement).appendChild(style);
});

// Land on a dark page first so the very first frame of the recording is dark,
// not the browser's default white about:blank. Then navigate to the real page.
await page.goto(
  "data:text/html;charset=utf-8," +
    encodeURIComponent("<html style='background:#0a0a0a'><body style='background:#0a0a0a;margin:0'></body></html>")
);
await page.waitForTimeout(400);

await page.goto("http://localhost:3000/portfolio", { waitUntil: "domcontentloaded" });

// Make sure the autoplaying video has actually started painting frames.
await page.waitForFunction(() => {
  const v = document.querySelector("video");
  return !!v && !v.paused && v.currentTime > 0 && v.readyState >= 2;
}, null, { timeout: 15000 });

// Hold on the small framed clip for a beat so the viewer registers the start state.
await page.waitForTimeout(2000);

// Smooth scroll through the section's progress range (~80vh).
// We scroll a bit further so we land at "fullscreen + hold".
const targetPx = Math.round(VIEWPORT.height * 1.1);
const steps = 90;
const stepDelay = 16; // ~60fps
for (let i = 1; i <= steps; i++) {
  const y = Math.round((targetPx * i) / steps);
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(stepDelay);
}

// Hold on the fullscreen state and wait for the video-time-driven exit fade
// (credit fades in when the video reaches its trim cutoff).
await page.waitForTimeout(10000);

// Small final hold so the credit is clearly visible.
await page.waitForTimeout(1500);

await page.close();
const video = page.video();
const path = await video.path();
await context.close();
await browser.close();

console.log("VIDEO:", path);
