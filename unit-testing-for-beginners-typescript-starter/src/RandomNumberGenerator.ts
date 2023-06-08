// eslint-disable-next-line no-console

import IRandomNumberGenerator from './IRandomGen';

export class RandomNumberGenerator implements IRandomNumberGenerator {
  public random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
