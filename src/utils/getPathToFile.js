import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getPathToFile = (url, fileName) => {
  const __dirname = dirname(fileURLToPath(url));
  const pathToFile = join(__dirname, 'files', fileName);

  return pathToFile;
}