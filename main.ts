const spinCharactors = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

const ESC = "\x1b";
const textEncoder = new TextEncoder();

const ansiEscapeSequence = (str: TemplateStringsArray) => {
  return textEncoder.encode(`${ESC}${str}`);
};
let spin_count = 0;

const eraseCurrentLine = () => {
  Deno.stdout.writeSync(ansiEscapeSequence`[2K`);
  Deno.stdout.writeSync(ansiEscapeSequence`[0G`); //カーソルを消す
};

const saveCursor = () => {
  Deno.stdout.writeSync(ansiEscapeSequence`[s`);
};

const restoreCursor = () => {
  Deno.stdout.writeSync(ansiEscapeSequence`[u`);
};
const spin = (message: string) => {
  const te = new TextEncoder();
  Deno.stdout.writeSync(te.encode("\x1B[?25l")); //カーソルを消す
  Deno.stdout.writeSync(te.encode("\x1B[?25l")); //カーソルを消す
  // rl.clearLine(process.stdout, 0); //行をすべて削除
  // rl.moveCursor(process.stdout, -9999, 0); //一番左側に戻る
  console.log(`${spinCharactors[spin_count]} ${message}`); //spin_charの配列で描画
  spin_count++; //要素番号計算
  spin_count >= spinCharactors.length ? (spin_count = 0) : null; //要素番号のリセット
};

export const loading = (msg: string) =>
  setInterval(() => {
    spin(msg);
  }, 200);

export const endloading = (loading: number, msg: string) => {
  clearInterval(loading);
  // rl.clearLine(process.stdout, 0); // 行をすべて削除
  console.log(`\n${msg}`); //end Message
  console.log("\x1B[?25h"); //ローディングで消したカーソルを戻す
};

for (let i = 10; i > 0; i--) {
  Deno.sleepSync(300);
  Deno.stdout.writeSync(`---${i}---`);
  eraseCurrentLine();
}
