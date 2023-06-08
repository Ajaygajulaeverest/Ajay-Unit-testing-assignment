import IRandomNumberGenerator from './IRandomGen';
import iLogger from './iLogger';
import { Logger } from './logger';
import { RandomNumberGenerator } from './RandomNumberGenerator';

export default class jackpot {
  private readonly secretGen: IRandomNumberGenerator;
  private readonly logger: iLogger;
  constructor(secretGen: IRandomNumberGenerator, logger: iLogger) {
    this.secretGen = secretGen;
    this.logger = logger;
  }
  public spin(): boolean {
    const number1: number = this.secretGen.random(0, 9);
    const number2: number = this.secretGen.random(0, 9);
    const number3: number = this.secretGen.random(0, 9);
    this.writeIntoLog(number1, number2, number3);

    if (number1 === number2 && number3 === number2) {
      return true;
    } else {
      return false;
    }
  }
  public writeIntoLog(number1: number, number2: number, number3: number) {
    const log = `Generated ${number1} ${number2} ${number3}`;
    this.logger.log(log);
  }

  // public random(min: number, max: number): number {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
}
const stubs = new RandomNumberGenerator();
const loggerMo = new Logger();
const enco = new jackpot(stubs, loggerMo);

enco.spin();
