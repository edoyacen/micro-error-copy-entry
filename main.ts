// This entry writes the answer for One Word for Your Wi-Fi to the output directory.
// It keeps the answer on a single line, honors MAKEFUN_OUTPUT_DIR, and reports the character count.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Interference";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
