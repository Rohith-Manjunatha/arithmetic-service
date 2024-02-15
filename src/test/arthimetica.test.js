const { add } = require("../arthimetica");

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
});

test('1002 + 1003 is equal to 2005', () => {
    expect(add(1002,1003)).toBe(2005);
});

test('35 + 34 is equal to 69', () => {
    expect(add(35,34)).toBe(69);
});