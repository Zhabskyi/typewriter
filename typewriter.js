const sentence = "hello there from lighthouse labs";

let offset = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 0 + offset);
  offset += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, offset += 50);