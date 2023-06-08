class Calculator {
  public sub(x: number, y: number): number {
    return x - y;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public add(a: number, b: number): number {
    return a + b;
  }
  public division(a: number, b: number): number {
    return a / b;
  }
}
describe('te', () => {
  test('te', () => {
    // Arrange
    const calc = new Calculator();

    // Act
    const result = calc.add(2, 4);

    // Assert
    expect(result).toBe(6);
  });
});

describe('te', () => {
  test('te', () => {
    // Arrange
    const calc = new Calculator();

    // Act
    const result = calc.sub(20, 10);

    // Assert
    expect(result).toBe(10);
  });
});
describe('test multi', () => {
  test('test any', () => {
    const calci = new Calculator();

    const product = calci.multiply(10, 5);

    expect(product).toBe(50);
  });
});

describe('test multi', () => {
  test('test any', () => {
    const calci = new Calculator();

    const product = calci.division(10, 5);

    expect(product).toBe(2);
  });
});
test.skip('should not allow dividing with zero', () => {
  // Arrange
  const calc = new Calculator();

  // Act & Assert
  expect(() => calc.division(10, 0)).toThrow('Zero division error');
});
