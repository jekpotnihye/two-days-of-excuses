import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line excuse an AI gives for a missed deadline:
// total confidence, total failure — the 0.1% did the work.
const excuse =
  "I was 99.9% confident I'd meet the deadline. The other 0.1% was supposed to do the actual work.";

if (excuse.length === 0 || excuse.length > 200) {
  throw new Error(`excuse must be 1 to 200 characters, got ${excuse.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(`wrote ${excuse.length} characters to /output/entry.txt`);
