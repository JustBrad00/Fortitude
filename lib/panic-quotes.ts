export const panicQuotes = [
  "You are stronger than this urge",
  "This feeling will pass",
  "Every moment of resistance is a victory",
  "You've overcome this before, you can do it again",
  "Progress, not perfection"
];

export function getRandomQuote(): string {
  return panicQuotes[Math.floor(Math.random() * panicQuotes.length)];
}
