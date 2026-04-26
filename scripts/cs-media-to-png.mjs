import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("public/images");
const DST = path.resolve("assets/cs-media");

await mkdir(DST, { recursive: true });

const files = (await readdir(SRC)).filter(
  (f) =>
    (f.startsWith("cs-media-") || f.startsWith("cheris-")) && f.endsWith(".webp"),
);

for (const f of files) {
  const out = f.replace(".webp", ".png");
  const srcBuf = await sharp(path.join(SRC, f)).png().toBuffer();
  await sharp(srcBuf).toFile(path.join(DST, out));
  console.log(`OK  ${f}  ->  ${out}  (${(srcBuf.length / 1024).toFixed(0)} KB)`);
}

console.log(`\nDone. ${files.length} PNG copies in ${DST}`);
