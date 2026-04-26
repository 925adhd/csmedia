import sharp from "sharp";
import path from "node:path";

const IMG_DIR = path.resolve("public/images");
const SOURCE = path.join(IMG_DIR, "jared-clouse-bary-logo.webp");
const TARGET = path.join(IMG_DIR, "jared-clouse-bary-logo-tall.webp");

// Pad transparent space on top so the logo art sits in the lower ~60% of the
// canvas. With `object-cover` on a portrait card, the art ends up bottom-side.
const EXTEND_TOP = 700;

const meta = await sharp(SOURCE).metadata();
console.log(`source:  ${meta.width}×${meta.height}`);

await sharp(SOURCE)
  .ensureAlpha()
  .extend({
    top: EXTEND_TOP,
    bottom: 0,
    left: 0,
    right: 0,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .webp({ quality: 90, effort: 6 })
  .toFile(TARGET);

const out = await sharp(TARGET).metadata();
console.log(`output:  ${out.width}×${out.height}`);
console.log(`saved:   ${TARGET}`);
