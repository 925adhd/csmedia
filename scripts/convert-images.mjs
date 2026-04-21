import sharp from "sharp";
import { readFile, writeFile, unlink, access } from "node:fs/promises";
import path from "node:path";

const IMG_DIR = path.resolve("public/images");

const jobs = [
  { from: "aerial-drone-brick-home-grayson-county-ky.jpg",      to: "aerial-drone-brick-home-grayson-county-ky.webp" },
  { from: "cs-media-video-production-studio-kentucky.jpg",       to: "cs-media-video-production-studio-kentucky.webp" },
  { from: "kentucky-baby-shower-event-photography.jpg",          to: "kentucky-baby-shower-event-photography.webp" },
  { from: "kentucky-event-catering-photography.jpg",             to: "kentucky-event-catering-photography.webp" },
  { from: "real-estate-media-process-background-kentucky.jpg",   to: "real-estate-media-process-background-kentucky.webp" },
  { from: "snow-dogs-food-truck-promo-kentucky.jpg",             to: "snow-dogs-food-truck-promo-kentucky.webp" },
  { from: "Screenshot 2026-04-20 105756.png",                    to: "cs-media-video-production-poster-kentucky.webp" },
];

for (const { from, to } of jobs) {
  const src = path.join(IMG_DIR, from);
  const dst = path.join(IMG_DIR, to);
  try {
    const buf = await readFile(src);
    const before = buf.length;
    const out = await sharp(buf).webp({ quality: 80 }).toBuffer();
    await writeFile(dst, out);
    const pct = ((1 - out.length / before) * 100).toFixed(1);
    console.log(`✓ ${from} → ${to}  (${(before/1024).toFixed(0)}KB → ${(out.length/1024).toFixed(0)}KB, −${pct}%)`);
    await unlink(src);
  } catch (err) {
    console.error(`✗ ${from}: ${err.message}`);
  }
}
