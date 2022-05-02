import { clearSimilar } from '../src/index'

test('replace ü with u ', () => {
    let testString = clearSimilar("you sück!")

    expect(testString).toBe("you suck!")
})

test('replace multiple non-english characters with their counterparts', () => {
    let testString = clearSimilar("Êċℎọ!")

    expect(testString).toBe("Echo!")
})


