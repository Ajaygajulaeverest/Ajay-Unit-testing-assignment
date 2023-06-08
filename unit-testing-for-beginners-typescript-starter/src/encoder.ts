import IRandomNumberGenerator from './IRandomGen';

import iLogger from './iLogger';

export default class Encoder {
  private readonly NUMBER_OF_ALPHABETS = 26;
  private readonly secretGen: IRandomNumberGenerator;
  private readonly logger: iLogger;

  constructor(secretGen: IRandomNumberGenerator, logger: iLogger) {
    this.secretGen = secretGen;
    this.logger = logger;
  }

  public encode(text: string): string {
    const source = text.toLowerCase();
    let result = '';

    const encodeWith: number = this.secretGen.random(
      1,
      this.NUMBER_OF_ALPHABETS,
    );
    for (let idx = 0; idx < text.length; idx++) {
      result += String.fromCharCode(
        ((source.charCodeAt(idx) - 'a'.charCodeAt(0) + encodeWith) %
          this.NUMBER_OF_ALPHABETS) +
          'a'.charCodeAt(0),
      );
    }
    this.writeIntoLog(text, result, encodeWith);
    return result;
  }
  private writeIntoLog(input: string, encoded: string, shiftedBy: number) {
    const log = `${input} is encoded into ${encoded} by shifting ${shiftedBy} characters \n`;
    this.logger.log(log);
  }
}
