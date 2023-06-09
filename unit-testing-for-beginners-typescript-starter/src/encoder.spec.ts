import jackpot from './jackpot';
import IRandomNumberGenerator from './IRandomGen';
import iLogger from './iLogger';

class LoggerMock implements iLogger {
  public called: number;
  constructor() {
    this.called = 0;
  }
  public log() {
    this.called += 1;
  }
}
class RandomGenStub implements IRandomNumberGenerator {
  private returnVal: number;

  constructor(returnVal: number) {
    this.returnVal = returnVal;
  }

  public random(): number {
    return this.returnVal;
  }
}
describe('test encoder', () => {
  test('should encode text correctly', () => {
    // Arrange
    const stubGen = new RandomGenStub(8);
    const loggerMock = new LoggerMock();
    const enco = new jackpot(stubGen, loggerMock);

    // Act
    const encoded = enco.spin();

    //Assert
    expect(encoded).toBe(true);
    expect(loggerMock.called).toBe(1);
  });
});
