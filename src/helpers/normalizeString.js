export default function normalizeString(strings, ...keys) {
  const stringsNormalized = [];

  for (let i = 0; i < strings.length; i++) {
    stringsNormalized.push(strings[i].trim().replace(/ +?/g, ''));
  }

  const result = [stringsNormalized[0]];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result.push(key, stringsNormalized[i + 1]);
  }

  return result.join('');
}
