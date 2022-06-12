const ESC = "\x1b";
export const textEncoder = new TextEncoder();

export const ansi = (str: string) => {
  return textEncoder.encode(`${ESC}${str}`);
};

export const previousCurrentLine = () => {
  Deno.stdout.writeSync(ansi("[1A")); // delete entire current line")
  Deno.stdout.writeSync(ansi("[2K")); // delete entire current line")
  Deno.stdout.writeSync(ansi("[0G")); // move cursor to head of line
};

export const makeInvisibleCursor = () => {
  Deno.stdout.writeSync(ansi("[?25l"));
};

export const makeVisibleCursor = () => {
  Deno.stdout.writeSync(ansi("[?25h"));
};

export const eraseCurrentLine = () => {
  Deno.stdout.writeSync(ansi("[2K")); // delete entire current line")
  Deno.stdout.writeSync(ansi("[0G")); // move cursor to head of line
};

export const saveCursor = () => {
  Deno.stdout.writeSync(ansi("[s"));
};

export const restoreCursor = () => {
  Deno.stdout.writeSync(ansi("[u"));
};
