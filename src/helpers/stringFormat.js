export default function StringFormat(strings, ...values) {

  let output = '';
  for (let i = 0; i < values.length; i++) {
    output += strings[i] + values[i];
  }
  output += strings[values.length];

  let lines = output.split(/(?:\r\n|\n|\r)/);

  return lines.map((line) => line.replace(/^\s+/, '') + '\n').join(' ').trim();
}