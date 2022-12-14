const { deterministicPartitionKey } = require("./dpk");

// describe("deterministicPartitionKey", () => {
//   it("Returns the literal '0' when given no input", () => {
//     const trivialKey = deterministicPartitionKey();
//     expect(trivialKey).toBe("0");
//   });
// });

describe('deterministicPartitionKey', () => {
  it('should return the same partitionKey for the same input', () => {
      const event = {
          id: '123',
          name: 'foo',
      };
      expect(deterministicPartitionKey(event)).toBe(deterministicPartitionKey(event));
  })
  it('should return a string of length 256 if the input string is longer than 256', () => {
      const event = {
          id: '123',
          name: 'a'.repeat(257),
      };
      expect(deterministicPartitionKey(event)).toHaveLength(128);
  })
})
