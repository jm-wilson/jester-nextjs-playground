import { readFile } from 'fs/promises';

export async function loadDataFromJson<T>(path: string) {
  const fileData = await readFile(path, { encoding: 'utf8' });
  const parsedData: T = JSON.parse(fileData);

  return parsedData;
}
