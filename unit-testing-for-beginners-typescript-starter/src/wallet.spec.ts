class SomeClassWithState {
  public anInstanceVar: number;

  constructor(initVal: number) {
    this.anInstanceVar = initVal;
  }

  public increaseBy(num: number) {
    this.anInstanceVar += num;
  }
  public withdraw(withdraw: number) {
    this.anInstanceVar -= withdraw;
  }

  public getVal(): number {
    return this.anInstanceVar;
  }
}

// Test
describe('test state based class', () => {
  test('test with state', () => {
    // Arrange
    const cls = new SomeClassWithState(20);

    // Act
    cls.increaseBy(5);
    cls.withdraw(4);

    // Assert
    expect(cls.getVal()).toBe(21);
  });
});
