import fs from 'fs';
import path from 'path';


import { findFirstWordIndex } from './findFirstWordIndex';

type WordChangesFile = {
  additions: string[];
  deletions: string[];
};

// Loads optional word customizations for a given locale from "../customization/<locale>.json".
// If the file is missing or invalid, it falls back to empty additions/deletions.
const getCustomizations = (locale: string) => {
  const customizationLocalePath = path.resolve(__dirname, `../lib/customization/${locale}.json`);
  console.log(`Loading customizations for ${locale} from ${customizationLocalePath}`);

  try {
    if (fs.existsSync(customizationLocalePath)) {
      const fileContent = fs.readFileSync(customizationLocalePath, 'utf8');
      const parsed = JSON.parse(fileContent) as WordChangesFile;

      if (parsed) {
        return parsed;
      }
    }
  } catch {
    // Ignore errors
  }
  return { additions: [], deletions: [] } as WordChangesFile;
};


export const extractWords = (file: string, locale: string): string[] => {
  const lines = file.split(/\r?\n/g);
  const firstWordIndex = findFirstWordIndex(lines, locale);
  const words: Set<string> = new Set();
  const customizations = getCustomizations(locale);
  console.log(`Extracting words (${locale})`, customizations.additions);

  for (let i = firstWordIndex; i < lines.length; ++i) {
    const trimmed = lines[i].trim();
    if (trimmed.length > 0) {
      words.add(trimmed.toLocaleLowerCase());
    }
  }
  for (const word of customizations.additions) {
    words.add(word);
  }
  for (const word of customizations.deletions) {
    words.delete(word);
  }

  return Array.from(words);
};
