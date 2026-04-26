import sharp from "sharp";
import path from "node:path";

const IMG_DIR = path.resolve("public/images");

// Pre-bake a high-quality upscaled variant of the portfolio bg so the browser
// downscales for display instead of upscaling a tiny source.
const SOURCE = path.join(IMG_DIR, "white-farmhouse-aerial-drone-kentucky.webp");
const TARGET = path.join(IMG_DIR, "white-farmhouse-aerial-drone-kentucky-3200.webp");
const TARGET_WIDTH = 3200;

const meta = await sharp(SOURCE).metadata();
console.log(`source:  ${meta.width}×${meta.height}`);

await sharp(SOURCE)
  .resize({ width: TARGET_WIDTH, kernel: sharp.kernel.lanczos3 })
  // Mild unsharp mask: sigma 0.8, flat=1.0, jagged=1.5 — boosts edge clarity
  // without halos. Conservative because the source has limited detail.
  .sharpen({ sigma: 0.8, m1: 1.0, m2: 1.5 })
  .webp({ quality: 88, effort: 6 })
  .toFile(TARGET);

const outMeta = await sharp(TARGET).metadata();
console.log(`output:  ${outMeta.width}×${outMeta.height}`);
console.log(`saved:   ${TARGET}`);
