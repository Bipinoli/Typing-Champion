const { generator, reader } = require('../../src/services/signature');

let signature;

test("signature generation works", () => {
  signature = generator(nickname = 'bipin');
  expect(signature).not.toBe(undefined);
});


test("signature reader works", () => {
  expect(reader(signature).nickname).toBe('bipin');
});