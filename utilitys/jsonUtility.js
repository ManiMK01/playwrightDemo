import fs from 'fs';
import path from 'path';

export class JsonUtils {
  // READ
  static readJSON(fileName) {
    const data = fs.readFileSync(this.getFilePath(fileName), 'utf-8');
    return JSON.parse(data);
  }
  // WRITE
  static writeJSON(fileName, data) {
    fs.writeFileSync(
      this.getFilePath(fileName),
      JSON.stringify(data, null, 2)
    );
  }
}