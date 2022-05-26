import lookalikeUtil from '../src/index';

test('replace ü with u ', () => {
  const testString = lookalikeUtil.clearSimilar('you sück!');

  expect(testString).toBe('you suck!');
});

test('replace multiple non-english characters with their counterparts', () => {
  const testString = lookalikeUtil.clearSimilar('Êċℎọ!');

  expect(testString).toBe('Echo!');
});
