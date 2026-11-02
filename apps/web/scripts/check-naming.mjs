import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirectories = new Set([".next", "dist", "node_modules", "out"]);
const kebabCase = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const violations = [];

function isKebabCaseName(name) {
  const segments = name.startsWith(".")
    ? name.slice(1).split(".")
    : name.split(".");

  return (
    segments.length > 0 && segments.every((segment) => kebabCase.test(segment))
  );
}

async function checkDirectory(directory, relativeSegments = []) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const relativePath = [...relativeSegments, entry.name];
    const githubMarkdown =
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".md") &&
      relativeSegments.includes(".github");
    const readme = entry.isFile() && entry.name.toLowerCase() === "readme.md";
    const githubDirectory = entry.isDirectory() && entry.name === ".github";

    if (
      !githubMarkdown &&
      !readme &&
      !githubDirectory &&
      !isKebabCaseName(entry.name)
    ) {
      violations.push(relativePath.join(path.sep));
    }

    if (entry.isDirectory()) {
      await checkDirectory(path.join(directory, entry.name), relativePath);
    }
  }
}

await checkDirectory(root);

if (violations.length > 0) {
  console.error(
    "Names must use kebab-case (except README.md and GitHub Markdown files):",
  );
  for (const violation of violations) {
    console.error(`  ${path.relative(root, path.join(root, violation))}`);
  }
  process.exitCode = 1;
} else {
  console.log("Web file and folder names follow the kebab-case convention.");
}
