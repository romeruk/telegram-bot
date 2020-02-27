export default function StringFormat(strings, ...placeholders) {

  let output = '';
  for (let i = 0; i < placeholders.length; i++) {
    output += strings[i] + placeholders[i];
  }
  output += strings[placeholders.length];

  let lines = output.split(/(?:\r\n|\n|\r)/);

  return lines.map((line) => line.replace(/^\s+/, '') + '\n').join(' ').trim();
}