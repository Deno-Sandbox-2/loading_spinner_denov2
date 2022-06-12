import {
  textEncoder,
  saveCursor,
  restoreCursor,
  makeVisibleCursor,
  makeInvisibleCursor,
  ansi,
} from "./ansi.ts";

const spinCharactors = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

let spinCount = 0;
const printSpin = () => {
  Deno.stdout.writeSync(ansi("[1m"));
  Deno.stdout.writeSync(ansi("[35m"));
  Deno.stdout.writeSync(textEncoder.encode(spinCharactors[spinCount]));
  Deno.stdout.writeSync(ansi("[0m"));

  spinCount++;

  if (spinCount >= spinCharactors.length) spinCount = 0; //要素番号のリセット
};

export const loading = (msg: string) => {
  saveCursor();
  makeInvisibleCursor();

  printSpin();
  Deno.stdout.writeSync(textEncoder.encode(" " + msg));

  const iId = setInterval(() => {
    restoreCursor();
    printSpin();
  }, 70);

  return iId;
};

export const clearLoading = (intervalId: number, msg: string) => {
  clearInterval(intervalId);
  console.log(`\n${msg}`); //end Message
  makeVisibleCursor();
};
