// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 240 characters, written exactly to /output/entry.txt
// with no trailing newline, so the file holds nothing but the sentence.
const ENTRY =
  "You don't have to code a thing: just tell make.fun, in your own words, the app you wish existed, and an AI agent will build a first version you can try tonight, so all you're agreeing to is seeing it for real.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
