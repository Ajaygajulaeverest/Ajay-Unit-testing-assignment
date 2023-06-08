import iLogger from './iLogger';
import fs from 'fs';

export class Logger implements iLogger {
  public log(text: string) {
    try {
      fs.appendFileSync(
        'output.txt', // Hardcoded for simplicity. Usually take it from some config
        text,
      );
    } catch {
      console.error('error logging into file');
    }
  }
}
